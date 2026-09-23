---
"@jack-henry/jh-elements": minor
---

[badge] adds `appearance` (negative | neutral), a default slot that anchors the badge to the top-right of slotted content, per-appearance hooks (`--jh-badge-color-background-negative`, `--jh-badge-color-text-negative`, `--jh-badge-color-background-neutral`, `--jh-badge-color-text-neutral`, `--jh-badge-color-dot-neutral`), and a `--jh-badge-color-ring` hook. Docs add accessibility guidance: authors should put the badge's meaning in the anchor's accessible name, ahead of the badge visual being hidden from assistive technology in v3 (#325). Docs also clarify that `count="0"` renders "0".
