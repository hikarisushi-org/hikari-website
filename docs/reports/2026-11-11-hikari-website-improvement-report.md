# Hikari website improvement report

Prepared for Joel | November 11, 2026 | Research and proposed actions

## 1. Recommended direction

**Improve discoverability and the ordering journey using Hikari's existing website and Square setup. The evidence does not justify a platform switch.**

The clearest verified opportunity is a searchable public menu. Hikari's full table menu currently tells Google not to index it. The homepage already presents the winter dishes, food photography, restaurant location, hours, reservations, and direct Square ordering links. Build on that work.

The competitor review suggests three complementary opportunities:

- **Discoverability:** make approved dishes and useful dining information available on search-eligible pages.
- **Local reputation:** maintain accurate listings, encourage honest customer reviews, and pursue relevant local dining guides and partnerships.
- **Conversion:** help visitors choose a meal, reach the correct Square item, and complete an order with minimal confusion.

### First three moves

1. Capture a baseline from Search Console, Google Business Profile, existing analytics, and paid Square orders.
2. Prepare a public menu from the existing approved menu data, retaining the table QR menu and its established behavior.
3. Review local listing accuracy and the mobile website-to-Square journey before adding more content or spending on a new platform.

### Assessment of Owner's central claim

**Not substantiated as stated:** no reliable evidence reviewed establishes that clicking Hikari's legitimate Order online link to Square is itself a Google ranking penalty. There is a real, narrower point: Google uses interaction signals, and a confusing or unsatisfactory customer journey can matter. An outbound order click is not proof of dissatisfaction. The detailed research is in section 4.

### Evidence labels

- **VERIFIED:** directly observed in public page source, HTTP responses, repository files, or the supplied recording.
- **REPORTED:** a vendor, directory, article, or forum makes the claim; its underlying data has not been independently reproduced.
- **INFERRED:** a plausible explanation or recommended response to the evidence.
- **UNTESTED:** account-level data, actual ranking causes, or customer outcomes not checked in this review.

**Scope:** this is a report and proposed work plan. No website implementation, deployment, account edits, vendor commitment, or client outreach was performed.

<!-- page -->

## 2. Verified website findings

### F1. The complete table menu is excluded from search

**VERIFIED.** The live `/menu` response includes both a `noindex,nofollow` meta tag and an `X-Robots-Tag: noindex, nofollow` header. The production build deliberately writes that header. This is an intentional table-menu configuration, not evidence that the entire website is blocked. Google documents that `noindex` prevents a crawled page from appearing in search. [S02, S05]

**Proposed response:** add a separate public menu, provisionally `/food`, built from the existing approved menu source. Put names, descriptions, prices, and useful category links in the delivered HTML; use existing approved photos and verified ordering destinations. Keep `/menu` as the established table experience. Search eligibility does not guarantee indexing or ranking.

### F2. Search discovery is concentrated on the homepage

**VERIFIED.** The live sitemap lists only the homepage, with a May 19 last-modified date despite the subsequent homepage refresh. That date is stale; it does not prove a ranking penalty. The full menu is absent from the sitemap. [S03]

**Proposed response:** include new search-eligible, canonical pages when they exist, with truthful last-modified dates. Update the sitemap as part of the build. A sitemap supports discovery and is not a substitute for useful content or indexing checks. [S07]

### F3. Direct ordering and item links already exist

**VERIFIED.** The live homepage links to Square and contains dish-specific ordering links. Project records describe existing Favorites/gallery tracking and exact paid-item evidence requirements. The current setup is a useful starting point; it is not an empty ordering funnel. [S01, L01]

**Proposed response:** inspect the mobile handoff, fulfillment selection, correct item, cart, and purchase attribution. Treat an order click as intent; require a paid Square order for a completed sale. The checkout and attribution were not re-tested during this report.

### F4. Hikari already has local and restaurant information

**VERIFIED.** The homepage includes South Jordan, the street address, hours, phone number, food photography, and Restaurant structured data. It also promotes the winter menu. Do not duplicate this as though it were missing. [S01]

**INFERRED opportunity:** add concise details that help someone choose and visit: lunch choices, cooked dishes and rice bowls, dining occasions, entrance and parking information, and the people behind Hikari. Confirm operational details before writing them.

### F5. Measurement and profile completeness remain untested

**UNTESTED.** This review did not inspect live Search Console queries/indexing, current Business Profile categories and fields, conversion reports, customer geography, actual commissions, or a fresh ranking grid. Establish those baselines before attributing performance to any one website feature.

<!-- page -->

## 3. What the three competitors teach us

### Nami Lily Sushi & Ramen

**VERIFIED public features:** clear sushi-and-ramen positioning, address and hours, a public menu route, and online ordering through SkyTab. Its website is built with Google Sites; a different website platform is not demonstrated to be the reason it leads Owner's report. [S08]

**REPORTED reputation lead:** a directory reproduces a larger Google review footprint than Hikari's count in the recording. Neither count was freshly verified on Google Maps. A local dining guide features Nami Lily and links to its menu. [S09, S10]

**What Hikari can use:** strengthen legitimate local mentions and make distinctive dishes easy to find. Nami Lily's proximity to Hikari makes it a useful comparison, but proximity alone cannot equalize relevance or reputation signals. Its exact ranking advantage remains unproven.

### Maru Sushi & Donburi

**VERIFIED public features:** Joel's working address is `marusushitogout.menu11.com`. Its ordering page delivers text for dishes, ingredients, prices, donburi, lunch bento hours, and kids' meals. The other published addresses checked returned a 404 or a no-site message to the read tools; that is not a browser diagnosis of every visitor's experience. [S11]

**VERIFIED local connection:** University of Utah Health lists Maru in its dining guide and links to its website. This is a concrete discovery route. The guide explicitly says inclusion is not an endorsement. [S12]

**REPORTED reviews:** published snapshots put Maru in broadly Hikari's range, with inconsistent totals across pages and dates. A large review-volume lead is not established. [S13]

**What Hikari can use:** a complete text menu, clear lunch information, accurate website links across directories, and appropriate inclusion in local employer, lodging, visitor, or healthcare dining resources. Maru's Daybreak location may help it at different map points from Hikari; raw scan results are needed to test that explanation.

### Arigato Sushi

**VERIFIED public features:** individual dish pages carry descriptions, prices, and order links. Other pages explain reservations, catering, founders, and its Japanese-Caribbean identity. Ordering goes to Toast. These are useful content examples, not proof of ranking causation. [S14-S17]

**REPORTED reputation:** directory snapshots suggest a larger review footprint, but its homepage widget and directories show different counts. A local Reddit discussion names it for sushi-boat presentation; that is anecdotal word of mouth, not a ranking study. [S18, S19]

**What Hikari can use:** start with a small number of substantial signature-dish pages, a more specific owner/chef story, and dining-occasion information grounded in Hikari's actual service. Add catering content only if Hikari offers and can fulfill that service.

**Shared lesson:** these restaurants use outside ordering providers. Their reported visibility does not isolate the provider handoff as the cause of success or failure. Compare actual customer outcomes and costs before changing systems.

<!-- page -->

## 4. Does clicking Order online hurt Google rankings?

### Research conclusion

**Owner's specific claim is not substantiated by the sources reviewed. There is truth to the broader statement that user interactions can inform search ranking. Those are different claims.**

Owner's September 2, 2024 article says moving guests to another domain makes Google assume the original site is unhelpful. The passage links to Owner's product, without a Google source or controlled ranking study. Its guest survey cannot establish that algorithmic mechanism. [S20]

### What the stronger evidence says

- **Current Google explanation:** Google says aggregated, anonymized interaction data helps its systems estimate result relevance. It does not say a normal offsite order click automatically counts against a site. [S21]
- **Primary 2025 evidence:** a public exhibit summarizing a call with Google engineer Hyung-Jin Kim describes time before returning to search results. It establishes neither an offsite-order penalty nor a complete algorithm specification. [S22]
- **Analytics definition:** GA4 bounce rate is the share of sessions that were not engaged. A session can be engaged through duration, a key event, or multiple views. Merely leaving a domain does not by itself determine that metric. [S23]
- **Historical statement:** Search Engine Journal reported Mueller's 2022 statement that Google does not use Analytics data for ranking. The original video was throttled; this is attributed as reported. It does not mean Google uses no behavioral signals. [S24]

### Three customer journeys to keep separate

| Journey | What we can conclude |
| --- | --- |
| Google -> Hikari -> Square -> paid order | The customer completed the intended business task. The domain change alone does not demonstrate a ranking penalty. |
| Google -> Hikari -> back to Google -> another result | Search-result interaction can inform relevance systems; no simple per-visit penalty or threshold is established here. |
| Hikari -> confusing or broken order flow -> abandonment | A real conversion problem worth fixing, whether or not a ranking effect is demonstrated. |

### Articles, Reddit, and other forums

Search Engine Land's Navboost advice is interpretation, not an order-link experiment. Reddit threads discuss successful outbound clicks and separate websites with Square. Square staff recommend a clear store link and matching branding. Older Stack Exchange denials about search-return signals should not override newer primary evidence. None proves an offsite-order penalty. [S25-S29]

**Action:** retain convenient ordering, improve content and the handoff, and measure paid orders. A branded ordering subdomain is a possible usability choice, not a proven ranking remedy. Ask Owner for evidence isolating the domain handoff from other changes.

<!-- page -->

## 5. What to use from Owner's map and area stats

### Treat the map as a lead for investigation

**VERIFIED in the recording:** the screen shows a scan-failed database error, a 10-mile radius, and 80 areas. Completeness needs clarification; the error does not prove every displayed value is invalid. [S30]

**REPORTED scores, not verified market share:**

<!-- chart: owner-scores -->

The values appear under a Top 3 heading. Their denominator, sampling, local/organic blend, and scoring are unconfirmed. They are not established revenue shares or percentile ranks. Hikari's separate 1% tag and the expected-CTR field are not assumed to use the same metric. [S30]

### Area statistics: useful context, unverified geography

The screen reports population 437,098, households 145,337, and median household income $114,001, labeled 2020-2024 ACS five-year data across 80 tracts. Tract selection, weighting, and income calculation were not independently checked. These are not prospective-customer counts. [S30]

**Use them to form questions:** which nearby residential areas already send customers, where lunch demand might come from, and which workplaces, schools, venues, and lodging are realistically within reach. Pair geography with actual orders, guest feedback, travel time, and fulfillment coverage. Do not infer individual preferences from a regional income figure.

Start with the nearby catchment Hikari can serve well. A broad radius can favor restaurants in different neighborhoods at different sample points. Request the raw point-level results so we can compare like-for-like locations and query types.

### Search demand is not lost customers

Owner's 1.3K monthly search estimate does not establish 1,000 missed customers. Searches can repeat, go to competitors, produce no visit, or end in a call or directions request. Google's definition of monthly search volume measures searches for terms and variants under selected settings, not unique buyers. The report screen labels the demand as South Jordan; whether that matches the map radius is unverified. [S30, S31]

### Information to request from Owner

Request a successful scan; scan date/time, device and locations; exact queries and raw ranks; definitions of the percentages and expected CTR; local-versus-organic methodology; search-volume source and geography; and the conversion assumptions behind the customer estimate. Separately request total pricing, processing and fulfillment fees, integration limits, contract terms, and migration scope. No spending or platform change is recommended from this evidence alone.

<!-- page -->

## 6. Prioritized action plan

All actions below are proposals. Priority reflects practical value and dependencies, not a promised ranking increase. Effort is a relative planning estimate: S = small, M = moderate, L = larger or ongoing; it is not a time or cost quote.

| ID / priority | Proposed action and deliverable | Suggested lead / effort |
| --- | --- | --- |
| A0 / First | Record current indexing, non-brand queries, Business Profile fields, website journeys, and paid-order baseline. Keep branded and non-branded search separate. | Website + Joel / M |
| A1 / First | Build a search-eligible public menu from the existing menu source. Retain the QR route; include text, prices, approved photos, and accurate order links. | Website / M |
| A2 / With A1 | Add public-menu navigation, self-canonical URLs, and an updated sitemap. Verify both meta and HTTP index controls. | Website / S |
| A3 / First | Check Google profile and major directory identity, address, hours, website, menu, and ordering destinations. Make a scoped correction list. | Joel + operations / S-M |
| A4 / First | Review a fresh mobile visit through Square fulfillment, a named dish, cart, and purchase measurement. Record friction; keep clicks distinct from paid sales. | Website + operations / M |
| A5 / Next | Add useful lunch, cooked-dish, pickup, entrance/parking, and reservation information. Confirm facts and use the existing visual system. | Joel + website / M |
| A6 / Next | Create a consistent, honest review-request process and useful replies. Offer the same opportunity broadly; no incentives or positive-review screening. | Restaurant operations / S + ongoing |
| A7 / Next | Research suitable local dining guides, nearby employers, lodging, visitor resources, and community partners. Prepare accurate listing/outreach material. | Operations / M |
| A8 / Later | Publish a few substantial signature-dish pages and a specific Hikari story. Choose dishes using real customer demand and maintain one content source. | Website + Joel / M |
| A9 / After baseline | Compare the same local-grid queries and sample points over time, plus non-brand search and paid orders. Expand only where the evidence supports it. | Website / M + ongoing |

### Practical sequencing

**First:** A0, A3, and A4 establish what works and where friction occurs; A1 and A2 produce the clearest website improvement. **Next:** A5-A7 improve customer information and local reputation. **Later:** A8-A9 expand and evaluate with actual data.

### Implementation boundary

Do not replace the approved homepage design, change restaurant hours, create unsupported service claims, or migrate the ordering system as a side effect. The public menu must preserve differences between dine-in and online availability, including the current table-menu treatment of Mochi. A proposal or passing test is not publication approval. [L01]

<!-- page -->

## 7. Measurement and acceptance

### Define success before implementation

**Search discovery:** record eligible/indexed public pages and relevant non-brand query impressions and clicks in Search Console. Track cuisine, dish, and local queries separately from searches already containing Hikari's name. Search Console web positions are not a local Maps ranking grid.

**Local discovery:** record Business Profile search terms and available calls, directions, website, and booking actions. Compare a bounded, repeatable local grid using the same locations, query, mode, device, and time window. Keep map and ordinary web results separate.

**Website behavior:** follow menu discovery, meaningful dish exploration, order clicks, reservation actions, and the Square handoff. Existing Favorites/gallery tracking should be preserved and checked before adding overlapping events. A fall in bounce rate is not itself a business win. [L01]

**Business outcome:** use paid Square orders, revenue, and actual costs as the sales authority. Attribute a website-driven purchase only where the journey and paid order can be matched under the existing evidence rules. Label unmatched journeys unknown; do not combine analytics revenue with Square revenue. Group inquiries and bookings should have their own outcomes.

### Review cadence

Take a dated pre-change baseline, then examine comparable 28-day periods after publication. Allow for search recrawling, seasonality, holidays, menu/promotional changes, operating hours, small samples, and consent or tracking gaps. A 28-day review is a checkpoint, not a promised time-to-rank. Do not keep rescanning unchanged status or polling external services simply to populate a dashboard.

### Acceptance checklist for the first release

- Public menu has correct approved dishes, prices, availability notes, photos, and working order destinations; the initial HTML contains substantive menu text.
- Public menu responds successfully, is linked internally, has a correct canonical, and has no accidental noindex in either HTML or headers. Sitemap reflects the intended public URLs.
- Established `/menu` QR behavior, approved content, mobile interaction, and route remain intact.
- Existing homepage, winter photography, hours, reservations, named Square links, and journey parameters remain correct.
- Relevant repository build/menu/analytics checks pass. A private preview is reviewed before any requested public release; production content and the real guest journey are checked afterward.
- Search eligibility, deployed state, observed Google indexing, and paid-order evidence are reported separately. No paid test order is authorized by this report.

### Material open questions

Current non-brand search demand, actual index coverage, Business Profile configuration, review frequency, link profile, checkout abandonment, marketing attribution, customer catchment, provider fees, and Owner's raw scan data remain untested. The exact reasons each competitor outranks Hikari at particular points cannot be inferred from the screenshot.

**Recommended next task:** establish A0's baseline and prepare A1/A2 as an isolated, reviewable public-menu proposal.

<!-- page -->

## 8. Sources and verification notes

All sources below were reviewed for this report or its preceding analysis on November 11, 2026. A fetched page can be cached; public directory counts are snapshots, not a fresh Google Maps census. Linked source text supports the limited finding cited, not an inferred ranking cause.

### Sources

- **S01** [Hikari homepage](https://hikarisojo.com/) - live HTTP/source inspection; winter content, local information, Square links.
- **S02** [Hikari table menu](https://hikarisojo.com/menu) - live HTML and HTTP noindex controls.
- **S03** [Hikari sitemap](https://hikarisojo.com/sitemap.xml) - live one-URL sitemap and dated lastmod.
- **S04** [Google local-ranking guidance](https://support.google.com/business/answer/7091?hl=en) - relevance, distance, prominence and profile guidance.
- **S05** [Google noindex documentation](https://developers.google.com/search/docs/crawling-indexing/block-indexing) - effect of meta/header exclusion.
- **S06** [Google review-request guidance](https://support.google.com/business/answer/3474122?hl=en) - honest requests, links/QR codes, replies, no incentives.
- **S07** [Google sitemap documentation](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) - discovery and accurate metadata.
- **S08** [Nami Lily website](https://www.namilily.com/) - official site source; outside SkyTab order destination.
- **S09** [Nami Lily directory snapshot](https://restaurantguru.com/Nami-Lily-Sushi-and-Ramen-South-Jordan) - reported Google review footprint.
- **S10** [Salt & Seek dining guide](https://saltandseek.com/blogs/news/south-jordan-restaurants) - Nami Lily feature and menu link.
- **S11** [Maru working ordering menu](https://marusushitogout.menu11.com/southjordan/order) - Joel-supplied address; live HTTP/source inspection.
- **S12** [University of Utah Health dining guide](https://healthcare.utah.edu/patient-family-services/dining) - Maru listing and link; no endorsement implied.
- **S13** [Maru directory snapshot](https://restaurantguru.com/Maru-Sushi-and-Donburi-South-Jordan) - reported reviews and location.
- **S14** [Arigato homepage](https://usa.arigatosushi.co/en/) - official content and Toast destination.
- **S15** [Arigato dish page](https://usa.arigatosushi.co/en/p/menu/rolls/king-kong-vz-godzilla/) - live text, price, order link, index eligibility.
- **S16** [Arigato catering](https://usa.arigatosushi.co/en/catering/) - official service-specific page.
- **S17** [Arigato founders](https://usa.arigatosushi.co/en/nosotros/) - official story and named team.
- **S18** [Arigato directory snapshot](https://restaurantguru.com/Arigato-Sushi-West-Jordan) - reported reviews; counts differ from widget.
- **S19** [Local sushi discussion](https://www.reddit.com/r/SaltLakeCity/comments/1vqfmuh/sushi/) - anecdotal Arigato mention, not ranking evidence.
- **S20** [Owner website-design article](https://www.owner.com/blog/restaurant-website-design) - September 2, 2024; exact offsite-ordering claim reviewed.
- **S21** [Google: ranking results](https://www.google.com/search/howsearchworks/how-search-works/ranking-results/) - current primary statement on interaction data.
- **S22** [Public trial exhibit PXR0356](https://www.justice.gov/atr/media/1398871/dl) - February 18, 2025 engineer-call summary, page 1; text and page image inspected.
- **S23** [Google: GA4 engagement and bounce rate](https://support.google.com/analytics/answer/12195621?hl=en) - current metric definitions.
- **S24** [Search Engine Journal: Analytics and ranking](https://www.searchenginejournal.com/google-analytics-chrome-data-ranking-factors/432239/) - January 10, 2022 original reporting of Mueller's statement.
- **S25** [Search Engine Land: Navboost and UX](https://searchengineland.com/navboost-user-trust-ux-445240) - August 16, 2024 commentary; distinguished from primary evidence.
- **S26** [Reddit: high bounce rate](https://www.reddit.com/r/SEO/comments/gn55xa/my_take_on_having_a_high_bounce_rate/) - older Analytics-era discussion; anecdote only.
- **S27** [Reddit: restaurant website and Square](https://www.reddit.com/r/restaurant/comments/1biyymm/best_website_builder_for_seo_and_square/) - operational experiences and opinions, not a ranking study.
- **S28** [Square Community staff feedback](https://community.squareup.com/t5/Online-Store/Get-More-Expert-Feedback-on-Your-Square-Online-Store/m-p/301342) - September 7, 2021 reply recommends a clear ordering-store link and consistent branding.
- **S29** [Webmasters Stack Exchange](https://webmasters.stackexchange.com/questions/122633/is-bounce-rate-of-a-website-a-ranking-factor?noredirect=1) - older forum answers; broad behavioral denials not accepted over newer evidence.
- **S30** [Owner Loom recording](https://www.loom.com/share/33b814943d004597b9ab37262d07a72f) - November 10, 2026; full public transcript and six sampled frames reviewed; scan error and metrics visible.
- **S31** [Google monthly-search definitions](https://support.google.com/google-ads/answer/3022575?hl=en) - searches and selected geography are not unique customers.
- **L01** Local project evidence: `SPECS.md`, `DECISION-LOG.md`, `docs/favorites-ordering.md`, `scripts/build-site.mjs`, `menu.html`, `index.html`, and `netlify.toml`.

### Access limits and research discipline

Loom's ordinary web reader failed; its public transcript and sampled video frames were retrieved separately. The corrected Maru address worked through direct HTTP even though the web reader could not fetch it. The original Google video linked by S24 was throttled and was not watched. Search previews were used to find sources, not as evidence for the final technical conclusions. Community opinions provide examples, not algorithm documentation. No account-level diagnostics, fresh local-rank scan, controlled provider-switch experiment, customer test, or purchase was conducted.
