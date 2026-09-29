---
"@jack-henry/jh-elements": patch
---

[icon] bug fix - the `medium` size fallback now applies only when the `size` attribute is absent. An unrecognized `size` value is no longer corrected to `medium` and renders at the SVG's intrinsic size so the error stays visible, per RFC 7 Amendment 1.
