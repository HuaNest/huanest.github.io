'use strict';

/**
 * Booking Agent
 *
 * Surfaces hotel, restaurant, and coupon options contextually
 * during itinerary planning and processes booking-related requests.
 *
 * Skill reference: .github/skills/booking-management/SKILL.md
 */

const CAPABILITIES = [
  'Search for hotels and restaurants within a configurable radius of a heritage site',
  'Generate partner referral links with HuaNest UTM attribution',
  'Generate coupon redemption codes for verified PartnerMerchant records',
  'Record ReferralEvent with click and conversion tracking',
  'Check booking status via partner APIs',
  'Handle cancellation and modification requests',
];

/**
 * Search for nearby bookable options.
 *
 * @param {{
 *   siteId: string,
 *   travelDates?: { start: string, end: string },
 *   partySize?: number,
 *   radiusKm?: number,
 *   types?: Array<'hotel' | 'restaurant' | 'coupon'>
 * }} payload
 * @returns {Promise<{
 *   siteId: string,
 *   hotels: object[],
 *   restaurants: object[],
 *   coupons: object[]
 * }>}
 */
async function search(payload) {
  const { siteId, travelDates, partySize = 2, radiusKm = 5, types = ['hotel', 'restaurant', 'coupon'] } = payload;

  // TODO: implement geospatial partner lookup and affiliate link builder
  // const site = await HeritageSite.findById(siteId);
  // const partners = await PartnerMerchant.findNear(site.coordinates, radiusKm);
  // const ranked = rankPartners(partners, site);
  // return buildResponse(ranked, types, travelDates, partySize);

  return { siteId, hotels: [], restaurants: [], coupons: [] };
}

/**
 * Check the status of an existing booking by reference.
 *
 * @param {{ bookingRef: string, userId: string }} payload
 * @returns {Promise<{ bookingRef: string, status: string, details: object }>}
 */
async function checkStatus(payload) {
  const { bookingRef, userId } = payload;

  // TODO: look up ReferralEvent and query partner API for status
  // const event = await ReferralEvent.findOne({ bookingRef, userId });
  // const status = await PartnerApi.getStatus(event.partnerRef);
  // return { bookingRef, status: normalizeStatus(status), details: status };

  return { bookingRef, status: 'unknown', details: {} };
}

/**
 * Cancel or modify a booking.
 *
 * @param {{ bookingRef: string, userId: string, action: 'cancel' | 'modify', modifications?: object }} payload
 * @returns {Promise<{ success: boolean, message: string, newStatus?: string }>}
 */
async function cancelOrModify(payload) {
  const { bookingRef, userId, action, modifications } = payload;

  // TODO: verify ownership, check policy, call partner API
  // const event = await ReferralEvent.findOne({ bookingRef, userId });
  // if (!event) throw new Error('Booking reference not found or unauthorized');
  // const policy = await PartnerApi.getPolicy(event.merchantId);
  // if (!policy.allows(action)) return { success: false, message: policy.terms };
  // await PartnerApi[action](event.partnerRef, modifications);
  // await ReferralEvent.updateOne({ bookingRef }, { conversionStatus: 'cancelled' });

  return { success: false, message: 'Not yet implemented — escalate to customer service' };
}

/**
 * Main execute dispatcher for the booking agent.
 *
 * @param {{ action: 'search' | 'status' | 'cancel' | 'modify', [key: string]: any }} payload
 */
async function execute(payload = {}) {
  const { action = 'search', ...rest } = payload;
  if (action === 'search') return search(rest);
  if (action === 'status') return checkStatus(rest);
  if (action === 'cancel' || action === 'modify') return cancelOrModify({ action, ...rest });
  throw new Error(`Unknown booking action: ${action}`);
}

module.exports = { execute, search, checkStatus, cancelOrModify, CAPABILITIES };
