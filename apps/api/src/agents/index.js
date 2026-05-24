'use strict';

const heritageUpdater = require('./heritageUpdater');
const reviewSummarizer = require('./reviewSummarizer');
const bookingAgent = require('./booking');
const customerService = require('./customerService');

const AGENTS = {
  'heritage-updater': heritageUpdater,
  'review-summarizer': reviewSummarizer,
  'booking-agent': bookingAgent,
  'customer-service': customerService,
};

/**
 * Manager agent — routes a task to the correct sub-agent based on taskType.
 *
 * @param {{ taskType: string, payload: object }} task
 * @returns {Promise<{ agentInvoked: string, result: object }>}
 */
async function dispatch(task) {
  const { taskType, payload } = task;

  const ROUTING_MAP = {
    'heritage.refresh':   'heritage-updater',
    'heritage.update':    'heritage-updater',
    'reviews.summarize':  'review-summarizer',
    'booking.search':     'booking-agent',
    'booking.status':     'booking-agent',
    'booking.cancel':     'booking-agent',
    'support.query':      'customer-service',
    'support.complaint':  'customer-service',
    'support.escalate':   'customer-service',
  };

  const agentName = ROUTING_MAP[taskType];
  if (!agentName) {
    throw new Error(`No agent registered for task type: ${taskType}`);
  }

  const agent = AGENTS[agentName];
  if (!agent) {
    throw new Error(`Agent not found in registry: ${agentName}`);
  }

  const result = await agent.execute(payload);
  return { agentInvoked: agentName, taskType, result };
}

/**
 * Dispatch multiple tasks in sequence.
 * Used for composite workflows (e.g. refresh then summarize).
 *
 * @param {Array<{ taskType: string, payload: object }>} tasks
 * @returns {Promise<Array<{ agentInvoked: string, result: object }>>}
 */
async function dispatchSequence(tasks) {
  const results = [];
  for (const task of tasks) {
    results.push(await dispatch(task));
  }
  return results;
}

module.exports = { dispatch, dispatchSequence, AGENTS };
