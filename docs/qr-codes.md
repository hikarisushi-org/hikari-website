# Printed QR codes

Every printed Hikari QR code opens an address on hikarisojo.com. Codes that may need a new destination later open a forwarding address, set in `scripts/build-site.mjs` (`qrForwards`) and written to the published `_redirects` file. To change where a printed code goes, change the destination there and release the site. The printed code stays the same.

Rules:

- Never remove or rename an address once its code has been printed. Bags, flyers and signs stay in circulation long after printing.
- One address per printed item, so scans can be told apart.
- Do not print a new code until its address is live and a scan of the final artwork has been checked.
- Forwards use status 302 so browsers do not remember an old destination.

| Code | Opens | Currently goes to | Printed on | QR files |
|---|---|---|---|---|
| Menu | `https://hikarisojo.com/menu` | The menu page itself (not a forward) | Table menus and placards | `hikari-ops/menu-qr/` |
| Review | See `docs/reports/2026-11-11-review-process.md` | The review page | Table review placards | See that report |
| To-go bags | `https://hikarisojo.com/order` | `https://hikarisushi-online.square.site/?utm_source=togo-bag&utm_medium=qr&utm_campaign=togo-bag` | Not printed yet | `hikari-visual-design/brand/qr/hikari-order-qr.*` |
| Promos | `https://hikarisojo.com/promo` | `/?utm_source=promo&utm_medium=qr&utm_campaign=promo-default` (homepage while no promo runs) | Not printed yet | `hikari-visual-design/brand/qr/hikari-promo-qr.*` |

## Counting scans

The forwards add standard campaign labels (`utm_source`, `utm_medium=qr`, `utm_campaign`). Both hikarisojo.com and the Square ordering site load the same GA4 property, so a scan appears there as a session with medium `qr`. This counts sessions that loaded the destination, not raw scans, and consent choices and blockers leave gaps. When a promo starts, change the `/promo` destination and give `utm_campaign` the promo's name.

The forwards do not set `hikari_entry`. That marker belongs to the website's own order links and the dashboard that reads it; see `docs/discovery-measurement.md`.
