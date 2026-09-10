---
title: Badge
description: A badge is a visual indicator that represents numeric values, such as counters.
---

# Badge

A badge is a small visual indicator that represents a numeric value, like an unread message count or a number of pending items. It can also appear as a simple dot when a precise count isn't needed. Badges are typically paired with another element, such as an icon or a tab label, to call attention to updates without interrupting someone's flow.

## Anatomy and style

A badge is a compact, pill-shaped element. When it's showing a count, its width grows to fit the text; when it's showing a dot, it holds a fixed, perfectly circular size. Its background and text colors are built to meet contrast requirements out of the box, so you shouldn't need to adjust them for accessibility reasons.

| Style hook | What it controls | Default value |
| --- | --- | --- |
| `badge.border.radius` | The roundness of the badge's corners | `border.radius.pill` |
| `badge.color.background.enabled` | The badge's background color | `color.content.negative.enabled` |
| `badge.color.text.enabled` | The color of the count text | `color.content.on.negative.enabled` |

A badge doesn't have any built-in logic that decides when it should appear. It's always visible once it's placed on the page — it's up to you to determine when and where it should show up, based on the experience you're building.

## Variants

### Count

The `count` property sets the number displayed inside the badge. As the number grows, the badge expands to fit it, so you never have to worry about text getting clipped.

If you don't set a `count`, or you set the property without providing a number, the badge renders as a dot with no visible value. Reach for the dot-only version when space is tight, like in a condensed layout, or when showing the exact number isn't essential to what someone's trying to do — for example, indicating that new activity exists without needing to say exactly how much.

No matter how small the count, the badge never shrinks smaller than a perfect circle. This keeps single-digit counts, like "1" or "5," looking balanced rather than cramped.

### Max count

Sometimes a count can grow large enough that displaying the exact number isn't useful — think of a notification badge that could otherwise show "482." That's where `max-count` comes in. Set a ceiling, and once the count passes it, the badge displays the max count with a "+" appended right after it, with no space in between (for example, `99+`).

A few things worth knowing:

- If you don't set `max-count`, the badge always shows the full count as entered.
- The default `max-count` is `99`.
- A `max-count` of `0` behaves like any other number — it renders `0+` once the count exceeds it.
- The "+" is added automatically; you can't customize it to another shorthand, like "k" for thousand, in this release. We may add that flexibility down the road.

Because a truncated count like `99+` can be trickier for assistive technology to interpret than the exact number, take a moment to think through how that value will be announced when you're placing a badge in your experience.

## Usage

- Let the badge do one job: representing a count or presence indicator. If you need to convey a status or a non-numeric label, reach for the [tag component](/docs/components-tag--docs) instead.
- Don't rely on the badge's color alone to communicate meaning. Make sure the same information is also available in text through the element the badge is attached to — for example, "3 unread messages" somewhere a screen reader can find it, not just a red badge with a "3" in it.
- Choose the dot-only variant when an exact count would add noise rather than clarity, and the count variant when the specific number matters to the person using it.
- When a badge reflects a live change on the page, like a new chat message arriving, pair it with an appropriate live region so screen reader users are notified too.

## Accessibility

Badge is designed to meet [WCAG 2.2](https://www.w3.org/TR/WCAG22/) AA success criteria, with a few things worth keeping in mind as you use it:

- **Use of color:** Don't use the badge's color as the only way to convey information. The meaning behind a badge should always be available in text somewhere in the originating element.
- **Contrast:** The badge's text and background colors are built to meet a minimum 4.5:1 contrast ratio. If you customize badge colors, double-check that this contrast holds.
- **Resizing:** Badge can be resized up to 200 percent without losing content or functionality, so it holds up well for people who need larger text.

## Feedback

Have an idea that would make Badge better, or found something that isn't working as expected? Let us know by opening an issue on [GitHub](https://github.com/Banno/jack-henry-design-system/issues), or join the conversation on our [GitHub discussion board](https://github.com/Banno/jack-henry-design-system/discussions).
