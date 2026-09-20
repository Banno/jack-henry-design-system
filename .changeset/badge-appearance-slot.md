---
"@jack-henry/jh-elements": minor
---

[badge] adds `appearance` (negative | neutral), a default slot that anchors the badge to the top-right of slotted content, `show-zero`, `label` for accessible text, and a `--jh-badge-color-ring` hook. Zero counts no longer render unless `show-zero` is set; non-numeric counts warn and render nothing instead of a dot. `--jh-badge-color-background-enabled` / `-text-enabled` still work and are deprecated in favor of `appearance`.
