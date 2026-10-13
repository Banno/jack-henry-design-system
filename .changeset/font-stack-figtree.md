---
"@jack-henry/jh-tokens": minor
---

[tokens] `font.family.sans` now leads with Figtree: `Figtree, 'Roboto Flex', Roboto, Helvetica, Arial, sans-serif`. Matches the stack Anvil libraries already ship. Roboto Flex stays as the next fallback, so apps that don't load Figtree render as before. Figtree is added to `assets/fonts` for self-hosting.
