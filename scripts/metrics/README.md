<!--
SPDX-FileCopyrightText: 2026 Jack Henry

SPDX-License-Identifier: Apache-2.0
-->

# Forge metrics

Monthly collector that writes four design-system metrics to the Notion **Metrics** database (Forge Design System teamspace). Runs on the first Monday of each month via `.github/workflows/metrics.yaml`, or on demand from the Actions tab.

## What it measures

| Notion metric | How |
|---|---|
| Adoption by product | Counts `<jh-*>` tag usages (tags from `packages/jh-elements/custom-elements.json`) in each product's source. |
| Overrides & hard-coded values | Counts raw hex colors in product source, plus `--jh-*` redefinitions in the theming override file where one is configured. |
| Time to adopt a release | Compares each product's pinned `@jack-henry/jh-elements` version to the latest on npm; reports the worst lag in days. |
| Contributions from other teams | Merged PRs to this repo in the last 90 days by authors outside `teamLogins`. |

Each run sets **Latest value** and **Last measured**, prepends a line to **History**, and flips Status to Active the first time a reading lands.

## Setup (once)

1. **Notion** — the "Forge metrics" internal connection exists and is connected to the Metrics database. Add its secret as the repo secret `NOTION_TOKEN`.
2. **GitHub** — create a fine-grained PAT with *Contents: read* on `Banno/platform-ux` and `Banno/digital-ux` (and *Pull requests: read* on this repo). Add it as `METRICS_GH_TOKEN`.
3. **Config** — check `scripts/metrics/config.json`: product paths, the overrides file path, and `teamLogins` (GitHub handles of the Forge team, so their PRs don't count as contributions).

## Run it locally

```sh
NOTION_TOKEN=… METRICS_GH_TOKEN=… node scripts/metrics/collect.mjs --dry-run
```

`--dry-run` prints the numbers and writes nothing.

## Adding a metric

Add an async function that returns `{ value, note }`, map its Notion title in `config.json` under `metrics`, and push it onto `jobs` at the bottom of `collect.mjs`. The Notion row must already exist with that exact title.
