// Netlify serverless function — proxies Google Places API for reviews
// Keeps the API key server-side only

let cache = { data: null, timestamp: 0 };
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

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

  // Return cached data if still fresh
  if (cache.data && Date.now() - cache.timestamp < CACHE_TTL) {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
      body: JSON.stringify(cache.data),
    };
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${placeId}?fields=reviews,rating,userRatingCount&key=${apiKey}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Google Places API error:', response.status, errText);
      return {
        statusCode: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Failed to fetch reviews from Google' }),
      };
    }

    const data = await response.json();

    // Sanitize, filter 5-star only, sort newest first
    const reviews = (data.reviews || [])
      .filter((r) => r.rating === 5)
      .map((r) => ({
        author: r.authorAttribution?.displayName || 'Guest',
        profilePhoto: r.authorAttribution?.photoUri || '',
        rating: r.rating || 5,
        text: r.text?.text || '',
        relativeTime: r.relativePublishTimeDescription || '',
        publishTime: r.publishTime || '',
      }))
      .sort((a, b) => new Date(b.publishTime) - new Date(a.publishTime))
      .slice(0, 5);

    const result = {
      reviews,
      rating: data.rating || null,
      totalReviews: data.userRatingCount || null,
    };

    // Update server-side cache
    cache = { data: result, timestamp: Date.now() };

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error('Reviews function error:', err);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
