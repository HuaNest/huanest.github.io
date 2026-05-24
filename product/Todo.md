# HuaNest Heritage Implementation Todo

## Status Legend
- [ ] Not started
- [~] In progress
- [x] Done

## Phase 0: Product and Delivery Alignment (Week 1)
- [ ] Review PRD and convert scope into prioritized backlog (P0, P1, P2).
- [ ] Lock MVP scope and explicitly freeze non-goals (native mobile apps).
- [ ] Confirm launch geography, UNESCO coverage baseline, and first language set.
- [ ] Define acceptance criteria checklist for MVP release gate.
- [ ] Create ADR template and publish ADR-001 (core architecture baseline).

## Phase 1: Platform Foundation (Week 1-3)
### Data and Domain Modeling
- [ ] Finalize canonical data models: HeritageSite, User, SavedSite, RoutePlan, RouteSegment, UserInterestProfile.
- [ ] Extend phase-2 models: DiscussionThread, DiscussionPost, DiscussionComment, UserExperiencePost, ShareArticle.
- [ ] Add issue feedback models: IssueFeedback and IssueFeedbackAttachment.
- [ ] Add long-horizon planning models: LongHorizonRoutePlan and RouteMilestone.
- [ ] Define data ownership and retention policy per entity.

### Identity, Security, and Compliance
- [ ] Integrate Auth0 (email, social, SMS login).
- [ ] Enable MFA for higher-risk operations and admin accounts.
- [ ] Implement baseline RBAC for user and platform-admin personas.
- [ ] Define consent, data export, and account deletion workflows.
- [ ] Implement secure secret handling and TLS-only service access.

### Infra and DevOps
- [ ] Set up environments (dev, staging, prod) with environment config strategy.
- [ ] Provision MongoDB and baseline collections/indexes.
- [ ] Stand up Cloud Run baseline service and routing.
- [ ] Implement CI pipeline: lint, tests, security scan, API contract checks.
- [ ] Implement CD pipeline: build, deploy, smoke checks, rollback policy.

## Phase 2: MVP Product Experience (Week 3-8)
### Explore and Discovery
- [ ] Build 2D map with marker clustering.
- [ ] Implement search by site name and country/region.
- [ ] Add fast filters and map/list sync behavior.
- [ ] Track explore funnel telemetry (search, filter, open-site).

### Site Detail Experience
- [ ] Build site detail page with summary, significance, and logistics.
- [ ] Show UNESCO designation and source attribution.
- [ ] Add ticket metadata panel (required flag, range, URL, last verified).
- [ ] Implement save/favorite action with optimistic UI updates.
- [ ] Add nearby hotel/restaurant/coupon recommendation modules on detail page.

### Route Planning
- [ ] Implement route generation with weighted distance/time optimization.
- [ ] Support route creation from saved sites and search-selected sites.
- [ ] Show route summary (stop order, duration, distance).
- [ ] Implement stop reorder/edit and recalculation.
- [ ] Add themed template library and template customization flow.
- [ ] Support route naming and save-to-account.
- [ ] Generate itinerary summary view for print/share.
- [ ] Enforce monthly route quota (10 free, then per-route overage).

### Account and Profile
- [ ] Implement account dashboard for saved sites/routes.
- [ ] Build profile background page and personal settings.
- [ ] Implement badges and points module.
- [ ] Implement wallet balance and top-up flow.
- [ ] Add language preference setting and persistence.

### MVP Quality Gates
- [ ] Validate route generation p95 <= 5 seconds for target workload.
- [ ] Validate map readiness <= 3 seconds on broadband desktop.
- [ ] Add localization QA for supported locales.
- [ ] Add baseline observability dashboards and alerts.

## Phase 3: API Platform for First-Party Clients (Week 6-10)
### Core API Delivery
- [ ] Define versioned API contracts for site discovery, site detail, route planning, and account data.
- [ ] Implement first-party auth model for web and future mobile clients.
- [ ] Add request validation and standardized error model.
- [ ] Implement endpoint and identity-based rate limits.
- [ ] Publish internal API docs and client integration guide.

### Reliability and Operations
- [ ] Add endpoint-level health checks and API error dashboards.
- [ ] Add correlation IDs and distributed tracing for API requests.
- [ ] Implement API incident runbook and SLO alerting.

## Phase 4: Phase-2 Product Features (Week 8-14)
### Companion and Intelligence
- [ ] Implement companion modes: guide, storyteller, philosophy reflection.
- [ ] Add active-stop context injection for companion responses.
- [ ] Add confidence and safety fallback behavior in uncertain scenarios.
- [ ] Track companion engagement and quality feedback metrics.

### Community and Moments
- [ ] Build dedicated Moments section for itinerary and linked-stop sharing.
- [ ] Allow users to attach stop-level posts to itinerary routes.
- [ ] Implement post visibility controls (public/private/friends-only).
- [ ] Implement upvote and moderation signals.
- [ ] Add media handling for text/image/video submissions.

### Issue Feedback Center
- [ ] Add Issue Feedback Center entry under My Account.
- [ ] Build issue report form supporting text, image, and video.
- [ ] Implement ticket lifecycle states (submitted, in-review, resolved, closed).
- [ ] Build user-facing issue history and status tracking.
- [ ] Build operator triage queue with severity and assignment.
- [ ] Integrate sentry.io for technical issue triage and debugging workflows.

### Recommendations and Commerce
- [ ] Implement recommendation ranking pipeline (RAG + behavior signals).
- [ ] Integrate hotel and restaurant referral flows.
- [ ] Integrate coupon recommendation and redemption tracking.
- [ ] Implement partner attribution tracking and settlement export pipeline.

## Phase 5: Admin Console and Business Operations (Week 10-16)
### Console Capabilities
- [ ] Build admin authentication and role model.
- [ ] Implement user management and support tooling.
- [ ] Implement content moderation and sharing moderation panels.
- [ ] Build site information maintenance tooling with audit trail.
- [ ] Build AI parameter control panel (prompt/safety/routing configs).
- [ ] Build API operations and health monitoring panel.

### Finance Visibility
- [ ] Build product finance dashboard showing MRR, ARR, revenue, costs, and profitability.
- [ ] Add drill-down views by plan, feature usage, and partner-commerce stream.
- [ ] Add billing anomaly alerts and monthly financial export.

## Phase 6: Agent Platform (Mastra.ai) (Week 12-18)
### Foundation
- [ ] Integrate Mastra.ai runtime conventions for agents, tools, and workflows.
- [ ] Implement manager routing workflow for task dispatch.
- [ ] Add authz and rate limits to agent dispatch entrypoints.
- [ ] Add auditable action logs for all agent operations.

### Domain Agents
- [ ] Implement Heritage Updater agent workflows for weekly refresh and diffing.
- [ ] Implement Review Summarizer agent workflows with moderation checks.
- [ ] Implement Booking agent workflows for partner search and coupon generation.
- [ ] Implement Customer Service agent workflows for support and escalation.
- [ ] Implement Alice companion workflows with safety and telemetry hooks.

## Phase 7: Governance, Metrics, and Readiness (Week 16+)
- [ ] Finalize data governance for user-contributed content and consent scopes.
- [ ] Define dataset export readiness process and approval workflow.
- [ ] Add product KPI dashboards: activation, route creation, saves, retention.
- [ ] Add issue feedback analytics: submission volume, SLA, resolution rate.
- [ ] Complete production readiness checklist and launch runbook.

## Immediate Next 10 Tasks
1. [ ] Finalize canonical data model draft from PRD entities.
2. [ ] Implement Auth0 login and profile bootstrap.
3. [ ] Build map prototype with clustering and search.
4. [ ] Implement site detail page skeleton and save action.
5. [ ] Implement route planning endpoint and weighted optimizer.
6. [ ] Hook route builder UI to route planning API.
7. [ ] Build account dashboard baseline (saved sites/routes).
8. [ ] Add Issue Feedback Center navigation and empty-state page.
9. [ ] Add telemetry for activation and route success events.
10. [ ] Create admin console shell with user/support tabs.

## Exit Criteria by Milestone
### MVP Exit
- [ ] Users can discover sites, generate/edit routes, and save routes.
- [ ] Route and map performance targets are met.
- [ ] Auth, localization baseline, and observability are live.

### Phase-2 Feature Exit
- [ ] Companion modes, Moments sharing, and Issue Feedback Center are live.
- [ ] Recommendation and commerce integrations are validated.
- [ ] Admin console supports operations, moderation, and finance visibility.

### Platform and Agent Exit
- [ ] API platform supports web and future mobile integration contracts.
- [ ] Mastra agent workflows run with auditability and safety controls.
- [ ] Support, incident, and runbook workflows are validated.
