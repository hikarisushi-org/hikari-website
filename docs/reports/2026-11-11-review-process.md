# Hikari review materials — ready for staff

Use the 5 × 7-inch PNG in `output/review-kit/hikari-google-review-card-5x7.png` at 100% scale (300 DPI). Place it where guests can choose to scan it, such as the checkout or pickup counter. The QR opens `https://hikarisojo.com/review/`, which links to Hikari's Google review form. The destination was obtained from Hikari's authenticated Google Business Profile metadata, not a name-based search.

## Staff wording

“Thank you for visiting Hikari. If you'd like, this QR code lets you share an honest Google review.”

Offer the same opportunity broadly. Do not request five stars, offer a discount or free item, screen guests by satisfaction, or direct only happy guests to Google. Do not pressure anyone to review while staff watch. A Google account is required.

## Reply drafts — personalize before posting

- Positive: “Thank you for visiting Hikari, [first name]. We're glad you enjoyed [dish or detail they actually mentioned]. We look forward to welcoming you again.”
- Mixed: “Thank you for sharing this, [first name]. We're glad [positive detail] worked well, and we appreciate the feedback about [specific issue]. We'll review it with our team.”
- Problem: “Thank you for letting us know, [first name]. We're sorry [brief, accurately stated issue] affected your visit. Please call us at (385) 866-3746 so we can discuss it.”

Do not invent a refund, explanation, investigation or remedy. Keep guest and order details private. Escalate safety, allergy, discrimination or payment complaints to management. These are templates; no reply or customer request has been sent or posted.

## Maintenance

Use the stable `/review/` URL on printed materials so a future review-provider URL can be updated in one place. Keep the page neutral and available to everyone. Regenerate with `scripts/build-review-kit.py` only if the printed design changes; it verifies the QR payload programmatically. A real printed-card phone scan remains a physical acceptance check.

Source read November 11, 2026: [Google review-request and reply guidance](https://support.google.com/business/answer/3474122?hl=en).
