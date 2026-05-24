---
name: review-summarization
description: "Summarize user travel experience reviews for heritage sites. Use when: aggregating raw user-generated content into structured site enrichment, generating site-level sentiment summaries, extracting practical visitor tips, or running batch review analysis."
argument-hint: "Provide a site ID or 'batch' to process all sites with pending unprocessed reviews."
---

# Review Summarization

## When to Use

- A site has received 3 or more new reviews since the last summarization run.
- Scheduled weekly batch processing of all sites with unprocessed reviews.
- An ad-hoc request to refresh the summary for a specific site.
- Before a new corridor launches, to process any pre-existing review data.

## Input Schema

Read from the `UserExperiencePost` collection filtered by:
- `siteId`: target site
- `moderationState`: `approved`
- `summarizedAt`: null or older than 7 days

## Procedure

### Step 1 — Load reviews
1. Query approved `UserExperiencePost` records for the target site.
2. Include text reviews. Exclude image/video-only posts unless captions are present.
3. If fewer than 3 approved text reviews exist, log as `pending` and skip.

### Step 2 — Extract themes
For each review, identify:
- Overall sentiment (positive / neutral / negative with score 0.0–1.0)
- Key highlights mentioned (architecture, history, atmosphere, accessibility, guides, crowds, etc.)
- Pain points mentioned (wait times, lack of signage, crowds, cost, transport)
- Practical tips (best visiting time, recommended duration, nearby logistics)

### Step 3 — Aggregate across reviews
1. Average the sentiment scores for the site-level `sentimentScore`.
2. Count theme mentions and select the top 3–5 highlights and top 1–3 pain points by frequency.
3. De-duplicate practical tips and keep those mentioned by 2 or more reviewers.

### Step 4 — Generate summary prose
Write a 200–400 word site-level summary that:
1. Opens with the overall visitor sentiment and what makes the site stand out.
2. Covers the most commonly praised qualities.
3. Honestly notes the main pain points without dramatizing.
4. Ends with 2–3 practical tips.
5. Uses second person ("visitors report...", "travelers note...") — never quotes individuals.

### Step 5 — Write output
1. Write the structured output to the HeritageSite `reviewEnrichment` field.
2. Set `reviewEnrichment.lastUpdated` to the current UTC timestamp.
3. Mark processed reviews with `summarizedAt` timestamp.
4. Flag any reviews that contain: hate speech, personal data (names, emails, phone numbers), or promotional content — set `moderationState: flagged` and increment `flaggedForModeration`.

## Quality Checks

- Summary must reference at least 2 distinct themes from the review set.
- `sentimentScore` must not be set to exactly 0.5 unless genuine neutrality is supported by the data.
- Tips must be actionable (avoid vague statements like "plan ahead").
