// Netlify serverless function — serves reviews from static JSON pool
// Reviews are synced from Google Business Profile via scripts/sync-reviews.py
// Returns the 5 newest 5-star reviews.

const fs = require('fs');
const path = require('path');

const DISPLAY_COUNT = 5;

let reviewsData = null;

function loadReviews() {
  if (reviewsData) return reviewsData;
  const filePath = path.join(__dirname, '..', '..', 'data', 'reviews.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  reviewsData = JSON.parse(raw);
  return reviewsData;
}

exports.handler = async () => {
  try {
    const data = loadReviews();
    const { reviews: pool, rating, totalReviews } = data;

    const reviews = [...pool]
      .sort((a, b) => (b.publishTime || '').localeCompare(a.publishTime || ''))
      .slice(0, DISPLAY_COUNT);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=900',
      },
      body: JSON.stringify({ reviews, rating, totalReviews }),
    };
  } catch (err) {
    console.error('Reviews function error:', err);
    return {
      statusCode: 502,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: 'Failed to load reviews' }),
    };
  }
};
