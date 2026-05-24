'use strict';

/**
 * Review Summarizer Agent
 *
 * Reads approved user-generated travel experiences and produces
 * structured, privacy-safe summaries written back to heritage site records.
 *
 * Skill reference: .github/skills/review-summarization/SKILL.md
 */

const CAPABILITIES = [
  'Aggregate traveler reviews into a 200–400 word site-level summary',
  'Extract sentiment score, highlights, pain points, and practical tips',
  'Flag reviews containing PII or inappropriate content for moderation',
  'Skip sites with fewer than 3 approved reviews (log as pending)',
];

/**
 * Execute review summarization for one site or a batch.
 *
 * @param {{
 *   siteId?: string,
 *   mode?: 'single' | 'batch'
 * }} payload
 * @returns {Promise<Array<{
 *   siteId: string,
 *   reviewCount: number,
 *   sentimentScore: number,
 *   summary: string,
 *   highlights: string[],
 *   painPoints: string[],
 *   practicalTips: string[],
 *   lastUpdated: string,
 *   flaggedForModeration: number
 * }>>}
 */
async function execute(payload = {}) {
  const { siteId, mode = 'single' } = payload;

  // TODO: replace with real DB queries and LLM summarization call

  // const sites = mode === 'batch'
  //   ? await HeritageSite.find({ 'reviewEnrichment.pendingReview': true })
  //   : [await HeritageSite.findById(siteId)];

  const results = [];

  // for (const site of sites) {
  //   const reviews = await UserExperiencePost.find({
  //     siteId: site._id,
  //     moderationState: 'approved',
  //     $or: [{ summarizedAt: null }, { summarizedAt: { $lt: sevenDaysAgo() } }],
  //   });

  //   if (reviews.length < 3) {
  //     continue; // skip — not enough data
  //   }

  //   const enrichment = await summarizeWithLLM(reviews);
  //   await HeritageSite.findByIdAndUpdate(site._id, { reviewEnrichment: enrichment });
  //   results.push({ siteId: site._id, ...enrichment });
  // }

  return results;
}

module.exports = { execute, CAPABILITIES };
