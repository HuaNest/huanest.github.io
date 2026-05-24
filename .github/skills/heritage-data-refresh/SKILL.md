---
name: heritage-data-refresh
description: "Weekly heritage site data refresh. Use when: running the scheduled heritage data update pipeline, validating site records against UNESCO sources, identifying stale or missing information, or performing a targeted refresh of specific sites or regions."
argument-hint: "Specify site IDs, a region, or 'all' to refresh everything."
---

# Heritage Data Refresh

## When to Use

- Scheduled weekly pipeline run.
- Ad-hoc refresh after a UNESCO update or new site designation.
- Targeted refresh for a specific site or country corridor.
- Validation pass before a new corridor launch.

## Data Sources

| Source | Priority | Use |
|---|---|---|
| UNESCO WHC official site (whc.unesco.org) | Primary | Canonical site listings, categories, and descriptions |
| UNESCO open data API | Primary | Structured records and coordinates |
| Official national heritage body sites | Secondary | Country-specific context and visiting information |
| Curated open datasets (Wikidata, OpenStreetMap) | Supplementary | Geolocation, logistics, and cross-reference IDs |

## Procedure

### Step 1 — Build the target site list
1. If a specific site list is provided, use it.
2. If `all` is specified, load the full HeritageSite collection from the database.
3. If a region is provided, filter the collection by country or UNESCO region code.

### Step 2 — Fetch from primary source
1. For each site, construct the UNESCO WHC URL using the site's `unescoId`.
2. Fetch the page or API response.
3. Extract: official name, category, inscription year, brief description, geolocation, and any status changes.

### Step 3 — Compare and validate
1. Diff the fetched data against the stored record field by field.
2. Flag any status changes (for example, endangered, delisted) immediately for human review.
3. Skip records with only whitespace or formatting differences.

### Step 4 — Write validated updates
1. Apply updates to the HeritageSite schema.
2. Set `lastRefreshed` to the current UTC timestamp.
3. Append an entry to the update log: `{ siteId, field, oldValue, newValue, source, timestamp }`.

### Step 5 — Report
1. Return the summary object: `{ checked, updated, flagged, errors }`.
2. Write any flagged sites to the human-review queue.

## Error Handling

- If a source fetch fails, log the error and continue with the next site.
- If more than 10% of fetches fail in a run, abort and alert immediately.
- Retry failed fetches once after a 60-second wait before logging as an error.

## Validation Rules

- `unescoId` must match the official WHC reference number.
- `coordinates` must be within the bounds of the stated country.
- `category` must be one of: Cultural, Natural, Mixed.
- `inscriptionYear` must be a 4-digit year between 1978 and the current year.
