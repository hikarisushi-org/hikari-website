// Netlify serverless function — serves reviews from static JSON pool
// Reviews are synced from Google Business Profile via scripts/sync-reviews.py
// Returns a deterministic daily rotation of 5-star reviews.

const fs = require('fs');
const path = require('path');

const DISPLAY_COUNT = 5;
const BUSINESS_TIME_ZONE = 'America/Denver';
const MS_PER_DAY = 24 * 60 * 60 * 1000;

let reviewsData = null;

function loadReviews() {
  if (reviewsData) return reviewsData;
  const filePath = path.resolve('data', 'reviews.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  reviewsData = JSON.parse(raw);
  return reviewsData;
}

function getBusinessDayNumber(date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: BUSINESS_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return Math.floor(Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day)
  ) / MS_PER_DAY);
}

function selectDailyReviews(pool, date = new Date()) {
  if (!Array.isArray(pool) || pool.length === 0) return [];

  const sorted = [...pool]
    .sort((a, b) => (b.publishTime || '').localeCompare(a.publishTime || ''));
  const count = Math.min(DISPLAY_COUNT, sorted.length);
  const start = (getBusinessDayNumber(date) * count) % sorted.length;

  return Array.from({ length: count }, (_, index) => {
    return sorted[(start + index) % sorted.length];
  });
}

exports.handler = async () => {
  try {
    const data = loadReviews();
    const { reviews: pool, rating, totalReviews } = data;

    const reviews = selectDailyReviews(pool);

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

exports._private = {
  getBusinessDayNumber,
  selectDailyReviews,
};
