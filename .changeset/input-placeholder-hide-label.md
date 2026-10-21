---
"@jack-henry/jh-elements": patch
---

[input] adds `placeholder` and `hide-label` properties, and a `--jh-input-placeholder-color-text` styling hook. Both are opt-in; existing inputs are unchanged.

Placeholder was deprecated in v1 and removed in v2 on accessibility grounds. Dense layouts (filter bars, table toolbars, inline editing) have no room for a visible label and teams were patching the attribute back in downstream. `hide-label` keeps `label` required and in the accessibility tree while hiding it visually, so the field stays named for assistive technology and `helper-text` and indicators keep working. `placeholder` carries the field name for sighted users in that case, and is otherwise a hint only. Guidance is in the Storybook docs under "Placeholder and Hidden Labels".
