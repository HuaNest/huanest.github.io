'use strict';

/**
 * Heritage Updater Agent
 *
 * Responsible for keeping heritage site data accurate and fresh.
 * Runs on a weekly schedule or on demand for specific sites.
 *
 * Skill reference: .github/skills/heritage-data-refresh/SKILL.md
 */

const CAPABILITIES = [
  'Fetch latest heritage site information from UNESCO WHC and authoritative sources',
  'Compare incoming data with stored records and apply validated updates',
  'Flag status changes (endangered, delisted) for human review',
  'Produce a structured update log of every field changed',
];

/**
 * Execute a heritage data refresh.
 *
 * @param {{
 *   siteIds?: string[],
 *   region?: string,
 *   mode?: 'all' | 'targeted'
 * }} payload
 * @returns {Promise<{
 *   checked: number,
 *   updated: number,
 *   flagged: number,
 *   errors: string[]
 * }>}
 */
async function execute(payload = {}) {
  const { siteIds = [], region, mode = 'targeted' } = payload;

  // TODO: replace with real heritage data client
  // const sites = mode === 'all'
  //   ? await HeritageSite.find({})
  //   : await HeritageSite.find({ _id: { $in: siteIds } });

  const summary = {
    checked: 0,
    updated: 0,
    flagged: 0,
    errors: [],
  };

  // Placeholder: iterate target sites, fetch from source, diff and write
  // for (const site of sites) {
  //   try {
  //     const fresh = await fetchFromUNESCO(site.unescoId);
  //     const changes = diffSiteRecord(site, fresh);
  //     if (changes.length > 0) {
  //       await applyUpdates(site._id, changes);
  //       summary.updated++;
  //     }
  //     if (fresh.statusChanged) {
  //       await flagForHumanReview(site._id, 'status-change');
  //       summary.flagged++;
  //     }
  //     summary.checked++;
  //   } catch (err) {
  //     summary.errors.push(`${site._id}: ${err.message}`);
  //   }
  // }

  return summary;
}

module.exports = { execute, CAPABILITIES };
