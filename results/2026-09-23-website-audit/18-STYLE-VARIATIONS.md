# Two styling alternatives

September 24: Joel requested two additional styling variations. Original overnight direction remains the default. Same content, images and actions make comparison fair; no production changes.

## Plan and critique

- Warm linen: linen #FFFCF5, peach #F8E9DE, olive #485538, cocoa #393C30, muted #676857, line #DDDCCE. Playfair headlines and Inter controls. Desktop food photograph on the left, soft arch crop; left-aligned serif headline on the right. Existing plate and sun colors motivate the palette. Avoid terracotta buttons and decorative flourishes; olive keeps it grounded and different from the original.
- Porcelain blue: white #FFFFFF, mist #EEF5FA, blue #164C72, ink #183447, muted #516574, line #D7E3EC. Inter throughout, bolder section titles, round ordering controls, wide image-dominant hero, tighter gallery. Inspired by Japanese tableware rather than a dark fine-dining aesthetic. Avoid ornamental grids, neon and excessive blue surfaces: photographs supply the color.

```text
Original:        text | square food          celadon / cranberry
Warm linen:     arch food | serif text       linen / olive
Porcelain blue: text | wider food            white / blue
```

On phones all variants retain heading and ordering before the photo. Scoped CSS, query-param selection and a small comparison navigation keep original accessible without replacing content. No additional image/font libraries or network dependencies. Verify each style at desktop and mobile, menu/ordering behavior, image loading, overflow and QR isolation; inspect screenshots before delivery.

## Verification

Both variations passed completed isolated browser runs at1440px and390px: images loaded, no overflow, valid anchors, no QR-menu links, mobile navigation/focus and sticky ordering passed, diagnostic events classified and header handed off to Square. Desktop full-page and phone hero screenshots visually inspected. Proof saved separately under `style-proof/linen` and `style-proof/blue`.

Earlier larger test batches encountered the known private-server socket failures at1024/320; no claim of full five-width passes for these variants. Final targeted runs passed without resource failures. No fresh Lighthouse scores claimed. JavaScript-disabled navigation/ordering works in the default style; query-selected styling requires JavaScript. CSS changes did not add remote dependencies. Production remains unchanged.
