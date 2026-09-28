# Dish detail refinement

Private follow-up to approved checkpoint 719bb1d. The task is presentation polish, preserving the full-screen photo interaction, menu data and list typography.

Palette: porcelain #fcfdfb, jade #145b50, ink #183d36, muted green #587469, divider #dce7df. Retain Hikari colors rather than introducing a new theme.
Typography: existing Hikari Inter for navigation, a stronger 29px/600 dish heading, 24px price and existing readable 19px description. No changes to main menu text sizes.

Layout:
```
                           category
[      original dish photo       ]
Dish name                     $6
Description in a readable measure

             Swipe down to return
```

The category explains location. The large swipe-to-return hint is also a tappable close action; there is no Menu button or X. Align toolbar and copy to 24px margins. Keep the food as the one visual focal point: no invented badges, claims, decorative cards or extra effects. Preserve image contain-fit and intrinsic proportions, filling the full width without a viewport-height cap. Use a full-height surface with modest lower breathing room; on short screens allow natural scrolling.

Review before build: no new all-caps labels, sales copy or generic card styling. The photo is unchanged and the detail language follows the existing Hikari list. The swipe hint serves discoverability, particularly for customers unfamiliar with the gesture.
