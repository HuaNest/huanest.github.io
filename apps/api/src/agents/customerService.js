'use strict';

/**
 * Customer Service Agent
 *
 * Handles user questions, complaints, booking issues, content reports,
 * and escalations with empathy and accuracy.
 *
 * Skill reference: .github/skills/customer-support/SKILL.md
 */

const CAPABILITIES = [
  'Answer heritage site information queries from the HeritageSite collection',
  'Resolve booking issues by delegating to the Booking Agent',
  'Acknowledge and queue content accuracy complaints for the Heritage Updater',
  'Flag inappropriate user-generated content for moderation',
  'Create structured escalation records for human operators',
];

const ISSUE_CATEGORIES = {
  SITE_INFO:           'heritage-site-information',
  FEATURE_QUESTION:    'itinerary-or-feature',
  BOOKING_MISSING:     'booking-confirmation-missing',
  COUPON_ISSUE:        'coupon-redemption',
  REFUND_CANCEL:       'refund-or-cancellation',
  CONTENT_ACCURACY:    'content-accuracy-complaint',
  INAPPROPRIATE_UGC:   'inappropriate-content-report',
  ESCALATION:          'escalation-required',
};

/**
 * Execute a customer service interaction.
 *
 * @param {{
 *   userId: string,
 *   category: string,
 *   message: string,
 *   context?: object   // e.g. { bookingRef, siteId, postId }
 * }} payload
 * @returns {Promise<{
 *   status: 'resolved' | 'escalated' | 'pending',
 *   responseMessage: string,
 *   caseRef?: string,
 *   escalation?: object
 * }>}
 */
async function execute(payload = {}) {
  const { userId, category, message, context = {} } = payload;

  // Route to the appropriate handler based on category
  switch (category) {
    case ISSUE_CATEGORIES.SITE_INFO:
    case ISSUE_CATEGORIES.FEATURE_QUESTION:
      return handleInformationQuery(userId, message, context);

    case ISSUE_CATEGORIES.BOOKING_MISSING:
    case ISSUE_CATEGORIES.COUPON_ISSUE:
      return handleBookingIssue(userId, message, context);

    case ISSUE_CATEGORIES.REFUND_CANCEL:
      return handleRefundRequest(userId, message, context);

    case ISSUE_CATEGORIES.CONTENT_ACCURACY:
      return handleContentAccuracy(userId, message, context);

    case ISSUE_CATEGORIES.INAPPROPRIATE_UGC:
      return handleUGCReport(userId, message, context);

    default:
      return escalate(userId, category, message, context, 'medium');
  }
}

async function handleInformationQuery(userId, message, context) {
  // TODO: search HeritageSite collection and generate answer via LLM
  // const site = await HeritageSite.findById(context.siteId);
  // const answer = await generateAnswer(message, site);
  // return { status: 'resolved', responseMessage: answer };
  return { status: 'pending', responseMessage: 'Information lookup not yet implemented.' };
}

async function handleBookingIssue(userId, message, context) {
  // TODO: delegate to booking agent, relay result
  // const booking = require('./booking');
  // const result = await booking.checkStatus({ bookingRef: context.bookingRef, userId });
  // return { status: 'resolved', responseMessage: formatBookingStatus(result) };
  return { status: 'pending', responseMessage: 'Booking status lookup not yet implemented.' };
}

async function handleRefundRequest(userId, message, context) {
  // TODO: check policy and delegate to booking agent or escalate
  return escalate(userId, ISSUE_CATEGORIES.REFUND_CANCEL, message, context, 'high');
}

async function handleContentAccuracy(userId, message, context) {
  // TODO: flag HeritageSite field for Heritage Updater review queue
  // await HeritageSite.findByIdAndUpdate(context.siteId, { $push: { reviewQueue: { reportedBy: userId, field: context.field, note: message } } });
  return {
    status: 'resolved',
    responseMessage:
      'Thank you for reporting this. Our team will review the heritage site information within 7 days and update it if needed.',
  };
}

async function handleUGCReport(userId, message, context) {
  // TODO: set post moderationState to 'under-review'
  // await UserExperiencePost.findByIdAndUpdate(context.postId, { moderationState: 'under-review' });
  return {
    status: 'resolved',
    responseMessage:
      'Thank you for your report. We have flagged this content for review by our moderation team.',
  };
}

async function escalate(userId, category, message, context, priority = 'medium') {
  const caseRef = `CS-${Date.now()}-${userId}`;
  const escalation = {
    caseRef,
    userId,
    issueCategory: category,
    conversationSummary: message.slice(0, 500),
    context,
    priority,
    createdAt: new Date().toISOString(),
  };

  // TODO: persist escalation record and notify human operator
  // await Escalation.create(escalation);
  // await notifyOperator(escalation);

  return {
    status: 'escalated',
    caseRef,
    escalation,
    responseMessage: `Your case has been escalated to our support team. Your reference number is ${caseRef}. We will follow up with you shortly.`,
  };
}

module.exports = { execute, escalate, ISSUE_CATEGORIES, CAPABILITIES };
