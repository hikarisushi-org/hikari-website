"""Fetch all 5-star reviews from Google Business Profile and save as static JSON.

Reads GBP OAuth credentials from environment variables or hikari-gbp/.env.
Outputs data/reviews.json for the Netlify function to serve.

Usage:
    python scripts/sync-reviews.py
"""

import json
import os
from pathlib import Path

# Load from hikari-gbp/.env locally; in CI, env vars are set as secrets
GBP_ENV = Path.home() / "projects" / "hikari-gbp" / ".env"
if GBP_ENV.exists():
    from dotenv import load_dotenv
    load_dotenv(GBP_ENV)

CLIENT_ID = os.getenv("GBP_CLIENT_ID", "")
CLIENT_SECRET = os.getenv("GBP_CLIENT_SECRET", "")
REFRESH_TOKEN = os.getenv("GBP_REFRESH_TOKEN", "")
LOCATION_ID = os.getenv("GBP_LOCATION_ID", "")
ACCOUNT_ID = os.getenv("GBP_ACCOUNT_ID", "116206139293610495781")

import requests
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials


def get_token():
    creds = Credentials(
        token=None,
        refresh_token=REFRESH_TOKEN,
        token_uri="https://oauth2.googleapis.com/token",
        client_id=CLIENT_ID,
        client_secret=CLIENT_SECRET,
        scopes=["https://www.googleapis.com/auth/business.manage"],
    )
    creds.refresh(Request())
    return creds.token


def fetch_all_reviews(token):
    parent = f"accounts/{ACCOUNT_ID}/locations/{LOCATION_ID}"
    all_reviews = []
    page_token = None
    avg_rating = None
    total_count = None

    while True:
        url = f"https://mybusiness.googleapis.com/v4/{parent}/reviews?pageSize=50"
        if page_token:
            url += f"&pageToken={page_token}"
        resp = requests.get(url, headers={"Authorization": f"Bearer {token}"})
        resp.raise_for_status()
        data = resp.json()

        all_reviews.extend(data.get("reviews", []))
        avg_rating = data.get("averageRating", avg_rating)
        total_count = data.get("totalReviewCount", total_count)

        page_token = data.get("nextPageToken")
        if not page_token:
            break

    return all_reviews, avg_rating, total_count


def normalize(review):
    return {
        "author": review.get("reviewer", {}).get("displayName", "Guest"),
        "profilePhoto": review.get("reviewer", {}).get("profilePhotoUrl", ""),
        "rating": 5,
        "text": review.get("comment", ""),
        "relativeTime": "",
        "publishTime": review.get("createTime", ""),
    }


def main():
    token = get_token()
    reviews, avg_rating, total_count = fetch_all_reviews(token)

    # Keep only 5-star reviews with text
    five_star = [
        normalize(r)
        for r in reviews
        if r.get("starRating") == "FIVE" and r.get("comment", "").strip()
    ]

    output = {
        "reviews": five_star,
        "rating": avg_rating,
        "totalReviews": total_count,
    }

    out_dir = Path(__file__).resolve().parent.parent / "data"
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / "reviews.json"
    out_path.write_text(json.dumps(output, indent=2))

    print(f"Saved {len(five_star)} five-star reviews to {out_path}")


if __name__ == "__main__":
    main()
