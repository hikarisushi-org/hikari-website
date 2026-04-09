// Netlify serverless function — proxies Google Places API for reviews
// Keeps the API key server-side only
// Fetches both "most relevant" and "newest" reviews, then randomly picks 5
// to display so the section feels fresh on each visit.

let cache = { data: null, timestamp: 0 };
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes (shorter so reviews rotate more often)
const DISPLAY_COUNT = 5;

// Fisher-Yates shuffle
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Deduplicate reviews by author name + text
function dedup(reviews) {
  const seen = new Set();
  return reviews.filter((r) => {
    const key = `${r.author}::${r.text}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

// Normalize a raw Google review into our shape
function normalizeReview(r) {
  return {
    author: r.authorAttribution?.displayName || 'Guest',
    profilePhoto: r.authorAttribution?.photoUri || '',
    rating: r.rating || 5,
    text: r.text?.text || '',
    relativeTime: r.relativePublishTimeDescription || '',
    publishTime: r.publishTime || '',
  };
}

async function fetchGoogleReviews(placeId, apiKey) {
  const headers = {
    'Content-Type': 'application/json',
    'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
  };

  // Fetch both sort orders to get a larger pool of reviews
  const [relevantRes, newestRes] = await Promise.all([
    fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&reviews_sort=MOST_RELEVANT&key=${apiKey}`,
      { headers }
    ),
    fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&reviews_sort=NEWEST&key=${apiKey}`,
      { headers }
    ),
  ]);

  if (!relevantRes.ok) {
    const errText = await relevantRes.text();
    throw new Error(`Google API error (relevant): ${relevantRes.status} ${errText}`);
  }

  const relevantData = await relevantRes.json();
  // Newest call is best-effort; fall back gracefully
  let newestData = { reviews: [] };
  if (newestRes.ok) {
    newestData = await newestRes.json();
  }

  // Combine both sets, keep only 5-star, deduplicate
  const allRaw = [...(relevantData.reviews || []), ...(newestData.reviews || [])];
  const fiveStar = allRaw.filter((r) => r.rating === 5).map(normalizeReview);
  const pool = dedup(fiveStar);

  return {
    pool,
    rating: relevantData.rating || null,
    totalReviews: relevantData.userRatingCount || null,
  };
}

exports.handler = async () => {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Missing API key or Place ID configuration' }),
    };
  }

  // Return cached pool if still fresh, but pick a NEW random selection each time
  let pool, rating, totalReviews;

  if (cache.data && Date.now() - cache.timestamp < CACHE_TTL) {
    ({ pool, rating, totalReviews } = cache.data);
  } else {
    try {
      const fetched = await fetchGoogleReviews(placeId, apiKey);
      pool = fetched.pool;
      rating = fetched.rating;
      totalReviews = fetched.totalReviews;

      // Cache the full pool (not the selection) so we can pick differently next call
      cache = { data: { pool, rating, totalReviews }, timestamp: Date.now() };
    } catch (err) {
      console.error('Reviews function error:', err);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Failed to fetch reviews from Google' }),
      };
    }
  }

  // Randomly pick DISPLAY_COUNT reviews from the pool each request
  const reviews = shuffle(pool).slice(0, DISPLAY_COUNT);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=900', // 15-min browser cache
    },
    body: JSON.stringify({ reviews, rating, totalReviews }),
  };
};
