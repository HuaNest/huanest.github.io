# HuaNest Heritage Product Requirements Document (PRD)

## 1. Document Info
- Product: HuaNest Heritage
- Version: v0.1
- Date: 2026-05-10
- Builder: Fang Zhang

## 2. Product Vision
Slogan: Explore our world, journey with HuaNest.

HuaNest Heritage is a companion app for people visiting world cultural heritage sites, helping travelers discover destinations, plan practical multi-stop itineraries, and receive contextual support during trips.

## 3. Product Mission
The product starts as a companion-first consumer web app with a fast 2D map, route planning, and in-trip guidance, keeps core traveler features free to maximize adoption and content contribution, uses Auth0 for flexible user authentication, stores operational entities in MongoDB, builds recommendation quality through RAG-backed user-interest retrieval, and monetizes through partner commerce (hotels, restaurants, and coupons) and usage-based fees for power users.

## 3. Problem Statement
Most travel apps focus on logistics and general information for popular tourist destinations, but they lack depth and practical planning tools for cultural heritage sites, especially they can't provide companion support that enriches the on-site experience with historical and cultural context. So, travelers need a dedicated solution that helps them discover heritage sites, plan meaningful routes, and receive engaging guidance during their visits. Additionally, there is an opportunity to build a community of heritage travelers who can share routes, insights and experiences, creating a richer ecosystem around cultural exploration.
### 3.1 Key Solutions
1. **Discovery and Planning:** An interactive map and search tools to find heritage sites.
2. **Companion Experience:** Real-time guidance and storytelling during visits.
3. **Community Sharing:** A platform for travelers to share routes and experiences.

## 4. Goals and Non-Goals
### 4.1 Goals (Phase 1 MVP)
1. Enable users to discover UNESCO heritage sites through an interactive map and search/filter tools.
2. Provide rich site detail pages with history/culture/significance context.
3. Allow users to create and save 10 routes per month, and each additional route: $0.50.
4. Ship a responsive web experience that works on desktop and mobile browsers.
5. Establish foundational telemetry and performance targets.
6. Support multilingual UI and localized core heritage content for initial launch locales.

### 4.2 Goals (Phase 2)
1. Add recommendation features for nearby attractions, restaurants, accommodations, and nearby shop coupons.
2. Add post-trip traveler contribution flow for text, image, and video experiences.
3.  Launch a unified API platform for first-party web and future mobile clients.
4. Launch an AI travel companion that supports real-time guidance, storytelling, and philosophy-inspired reflection during trips.
5. Launch a user center experience with profile background, badges, points, saved sites/routes, and wallet top-up.
6. Launch an admin operations platform to maintain site info, AI agent parameters, and customer accounts.
7. Launch a dedicated user issue feedback center that supports text, image, and video submissions.

### 4.3 Non-Goals (MVP)
1. Native iOS/Android apps.

## 5. Personas
### 5.1 Primary Persona: Individual Traveler
- Wants to explore heritage destinations and build a feasible trip plan quickly.
- Needs a companion bot (Alice) that provides engaging narratives and practical tips during visits.
- Can share each stop's experience under each site detail page, and those posts can be linked to the personal iterary route. Customers can decide if share the interary route in the public "Moments" section, where other users can view and upvote the shared route and its linked posts.

### 5.2 Secondary Persona: Platform Administrator (Phase 2)
- Needs console access for user support, content moderation, and customer account handling.
- Needs clear visibility into billing, usage, and escalations.
- Needs to post the themed route templates and maintain site information accuracy.

## 6. User Stories
### 6.1 Discovery
1. As a traveler, I want to browse a global map of heritage sites (based on UNESCO World Heritage Sites) so I can discover destinations.
2. As a traveler, I want to find out the pre-defined routes based on different themes, such as "Iconic Historical Route (2 weeks): Ancient Roots to Renaissance Art" and "Hidden Gems: Rare Heritage Paths for Advanced Travelers", so I can quickly start planning from a meaningful template.
3. As a traveler, I want to chat with an AI agent to get personalized site recommendations based on my interests and prior engagement so I can discover relevant destinations.

### 6.2 Site Understanding
1. As a traveler, I want detailed site information so I can decide if it fits my interests. There should be iconic images, a summary, significance, and key logistics metadata (when available).
2. As a traveler, I want to save favorite sites so I can build routes later.
3. As a traveler, I want to switch app language so I can explore and plan in my preferred language.
4. As a traveler, I want accurate ticket requirement and pricing info so I can avoid outdated planning details.
5. As a traveler, I want to view my profile background, badges, points, saved sites, and planned routes in one dashboard.
6. As a traveler, I want to top up wallet balance before exceeding free quotas so usage-based billing is smooth.
7. As a traveler, I want to view nearby hotel, restaurant, and coupon recommendations on site detail pages so I can make practical plans.

### 6.3 Route Planning
1. As a traveler, I want to select multiple sites and generate an optimized route so I can plan efficiently.
2. As a traveler, I want to reorder or edit route stops so I keep control.
3. As a traveler, I want saved routes in my account so I can revisit plans.
4. As a traveler, I want recommendations to reflect my saved interests and prior engagement so the itinerary feels more relevant.
5. As a traveler, I want pre-made historical route templates so I can start quickly from a meaningful theme.
6. As a traveler, I want a companion mode while I am traveling so I can receive contextual guidance at each stop.
7. As a traveler, I want to build a long-term multi-year route plan so I can complete a large heritage journey over time.

### 6.4 Community and Discussion
1. As a traveler, I want to view and contribute to heritage site-specific discussions so I can share opinions and tips with other visitors.
2. As a traveler, I want to post photos and text commentary about heritage sites so I can document and share my ideal positions and discoveries.
3. As a traveler, I want to set post visibility to public (shared in discussion area), private (me only), or friends-only so I can control who sees my contributions.
4. As a traveler, I want to upvote and flag helpful/unhelpful discussion posts so the community can surface the best insights.
5. As a traveler, I want to start a discussion from a heritage site detail page or from the dedicated discussion section directly.

### 6.5 Post-Trip Sharing
1. As a traveler, I want to leave text, image, and video travel experiences after visiting so others can learn from real trips.

### 6.6 Companion Experience (Phase 2)
1. As a traveler, I want a narrative guide that explains site stories in an engaging, culturally respectful way.
2. As a traveler, I want optional philosophy-inspired reflections linked to the site's historical context.
3. As a traveler, I want practical on-trip prompts (timing, crowd tips, and nearby highlights) while following my route.

### 6.7 Commerce (Phase 2)
1. As a traveler, I want nearby hotel, restaurant, and coupon recommendations while planning so I can make practical choices.
2. As an operator, I want a management console so I can review users, content, and support cases in one place.
3. As an administrator, I want to edit site metadata and logistics from an internal tool so published information stays accurate.
4. As an administrator, I want to adjust AI agent parameters (prompt templates, safety thresholds, routing rules) so agent behavior is controllable.
5. As an administrator, I want customer account management tools (search, billing status, limits, support actions) so operations can scale.
6. As an administrator, I want the financial matrix of this product to be visible. Such visibility should include MRR, ARR, revenue, costs, and profitability metrics.

### 6.8 Issue Feedback and Support (Phase 2)
1. As a traveler, I want one dedicated place to report issues so I do not need to search across multiple pages.
2. As a traveler, I want to submit issue details using text, images, and video so I can explain the problem clearly.
3. As a traveler, I want to see issue status updates so I know whether my report is received, in review, or resolved.
4. As an operator, I want a triage queue for user issue reports with attachments so support response is efficient.
5. As an operator, I want to use sentry.io integration for triage and debugging of technical issues.

## 7. Functional Requirements
### 7.1 MVP Features
1. Map exploration (2D):
- Clustered markers for heritage sites.
- Search bar by site name and country/region.

2. Site detail page:
- Site name, geolocation, UNESCO designation, summary, significance. The data is pulled from UNESCO/public datasets with attribution, or verified third-party sources/MCP where available.
- Key logistics metadata (when available).
- Ticket metadata for ticket-required sites (ticket required flag, price/range when available, official ticket URL, last verified timestamp).
- Save/favorite action.

3. Route builder:
- Route generation using saved sites or search-selected sites with weighted optimization for distance and travel time.
- Route output includes order, total distance, estimated travel duration.
- Pre-made themed route templates (for example: Iconic Historical Route (2 weeks): Ancient Roots to Renaissance Art; Hidden Gems: Rare Heritage Paths for Advanced Travelers).
- Template customization flow: users can add, remove, or reorder stops before saving as a personal route.

4. Accounts:
- User sign-up/sign-in via Auth0.
- Support email, social account, and SMS login.
- Support multi-factor authentication for higher-risk operations.
- Saved sites and saved routes dashboard.
- Personal center profile page with configurable background/header.
- Badge and points overview with activity history.
- Wallet balance panel and top-up flow for usage-based billing.

5. Basic observability:
- Route request success/failure telemetry.
- Map load and route generation performance tracking.

6. Localization and language support:
- Provide a language selector in app navigation and account settings.
- Localize core UI strings for supported locales (minimum launch locales to be decided).
- Localize key site fields where translation is available (name, summary, significance).
- Fallback to default language when translation is unavailable.

### 7.2 Phase 2 Features
1. API platform:
- Versioned site and route-planning endpoints for first-party clients.
- Authenticated access model for web, future mobile, and approved third-party agent workflows.
- Stability controls (request validation, rate limiting, and standardized error responses).

2. Recommendation layer:
- Nearby points of interest by route/site context.
- Hotel and restaurant recommendation modules.
- Nearby coupon offers and redemption tracking hooks.
- RAG-backed retrieval of user interest points, saved behavior, and relevant heritage context for recommendation ranking.

3. Traveler contribution flow:
- Heritage site discussion threads with text and image posts.
- There is a dedicated discussion section "Moments" for sharing interary routes and related posts. Each post can be linked to a specific stop on the user's itinerary route, and users can choose to share the route publicly in the "Moments" section where other users can view and upvote the shared route and its linked posts.
- Post visibility controls: public (community feed), private (me only), friends-only (selected connections).

4. Issue feedback center:
- Dedicated in-app feedback entry point under user account.
- Issue report form supports text, image, and video attachments.
- Ticket status lifecycle for users (submitted, in-review, resolved, closed).
- Operator triage queue with severity tags and assignment metadata.

5. Console platform:
- Backend operations dashboard.
- User management and moderation tools.
- API operations and health monitoring tools.
- Site information maintenance tools (content, logistics, ticket metadata override with audit trail).
- AI agent parameter control panel (prompts, safety thresholds, routing weights, feature flags).
- Customer operations tools (account status, wallet, usage limits, manual support adjustments).

6. AI agent support:
- Agent-friendly planning and booking-support endpoints.
- Mastra.ai framework for agent orchestration (manager routing, tool execution, and workflow sequencing).
- Delegated execution model for third-party travel agents.
- Auditable agent action logs.

7. Data freshness automation:
- AI-driven weekly refresh job for ticket-required site logistics.
- Source validation and field-level diffing for ticket metadata updates.
- Legacy/invalid ticket records flagged for manual review queue.

8. AI companion mode:
- Real-time companion chat tied to active itinerary stop and user language preference.
- Guide mode for practical visit support (arrival context, what to see first, time allocation suggestions).
- Storyteller mode for historical and cultural narratives grounded in verified site data.
- Philosophy mode for optional reflective prompts and thematic comparisons across route stops.
- Safety and trust controls: source attribution, confidence hints, and escalation path to standard site info when uncertain.

9. Long-term journey planning:
- Multi-year route plans that can include many sites beyond a short single-trip itinerary.
- Route segmentation into planned travel windows across selected dates (for example by quarter, season, or year).
- Editable milestones so users can pause and resume journeys based on life, work, study, budget, and available time.
- Re-optimization workflow when constraints change (new budget, new availability window, added/removed sites).

## 8. Non-Functional Requirements
1. Performance:
- Initial map interaction readiness target: <= 3 seconds on broadband desktop.
- Route generation p95 target: <= 5 seconds for 2-8 stops.

2. Availability:
- MVP service target: 99.5% monthly availability.
- Phase 2 API target: 99.9% monthly availability.

3. Security:
- Authenticated operations for saved items and user data.
- Auth0-based authentication with MFA support.
- Encrypted transport (TLS) and secure credential handling.
- Basic abuse protections (rate limit and anomaly monitoring).

4. Privacy:
- Consent capture for personal data processing.
- Data export and deletion workflow defined before scale.
- Clear separation of public heritage data and user-generated data.
- Clear consent and governance boundary between operational data and any dataset product derived for AI training.

5. Internationalization:
- All core user flows (explore, site detail, route creation, account) must support configured locales.
- Locale-aware formatting for dates, time, distances, and currencies where applicable.
- Translation completeness target for MVP locales: >= 95% of user-facing UI strings.

6. Data freshness:
- Ticket metadata freshness target for ticket-required sites: <= 7 days since last verification.
- Any failed weekly refresh must be alerted and retried according to incident runbook.

## 9. How page looks like
1. Explore (Map + Search + Filters) page, which also the home page for unauthenticated users.
3. Site Details for each heritage point on the map
   - Site information (name, location, UNESCO designation, summary, significance).
   - Support user saving/favoriting the site.
   - Sharing information from other travelers (text, image, video).
4. Create Route button on the upper right corner of the map page, which leads to the route builder page.
    - Route builder page with two options: "Start from saved sites" and "Start from search-selected sites". 
    - Name the route
    - Optimized route generation based on the selected sites with weighted optimization for distance and travel time.
    - Support the nearby hotel, restaurant, and coupon recommendations on the route builder page.
    - Support saving the generated route to the user's account. And can generate a sumarized interary table for printing or sharing.
5. My Account
   - Saved Sites
   - Saved Routes
   - Interest Profile
   - Language Preferences
   - My Posts (all visibility levels: public, private, friends-only)
   - My Friends
   - Badges and Points
   - Wallet and Top-Up
   - Issue Feedback Center (text, image, video)
6. Console
   - User Management
   - Content Moderation
   - Sharing Moderation
   - Billing and Dataset Operations
   - Site Information Maintenance
   - AI Agent Parameter Control
   - Customer Management

## 10. Data and Integration Overview
### 10.1 Core Entities
1. HeritageSite
2. User
3. SavedSite
4. RoutePlan
5. RouteSegment
6. UserInterestProfile
7. UserBadge
8. UserPointLedger
9. UserWallet
10. WalletTopUpTransaction
11. UserConnection (Phase 2)
12. DiscussionThread (Phase 2)
13. DiscussionPost (Phase 2)
14. DiscussionComment (Phase 2)
15. UserExperiencePost (Phase 2)
16. AgentParameterConfig (Phase 2)
17. DatasetAccessContract (Post-PMF)
18. LongHorizonRoutePlan (Phase 2)
19. RouteMilestone (Phase 2)
20. IssueFeedback (Phase 2)
21. IssueFeedbackAttachment (Phase 2)

### 10.2 External Dependencies
1. UNESCO/public heritage references with attribution.
2. Mapping/geolocation provider for map and distance matrix support.
3. Auth0 for authentication and MFA.
4. Stripe for wallet top-up and billing operations.
5. Optional POI provider for recommendations (Phase 2+).
6. Vector retrieval infrastructure for RAG-backed recommendation enrichment.
7. Mastra.ai framework for AI agent runtime orchestration.

## 11. Monetization Strategy
1. **No paywalls block core features:** All users can explore, plan routes, discuss, and use the companion bot from day one. 
2. **Free tier is genuinely useful:** 10 routes/month + 5 GB storage supports lightweight exploration and planning.
3. **Usage-based overages align with value:** Heavy users (multi-month planners, media uploaders, and companion users) pay proportionally to their usage.
4. **Friction-free growth:** No signup friction or credit card requirements; users start free and organically migrate to paid usage.
5. **Partner commerce revenue is primary early monetization:** Referral commissions from hotels/restaurants fund operations before usage revenue scales.

### 11.1 Usage-Based Overage Pricing
When users exceed free quotas, they are charged on a usage basis:

| Feature | Free Quota | Overage Rate | Notes |
|---------|-----------|--------------|-------|
| Route Plans | 10/month | $0.50 per additional route | Encourages planning without friction |
| Discussion Storage | 5 GB/month | $0.10 per GB | Drives premium storage adoption for media-heavy users |
| Alice AI Companion | TBD tokens/month | $0.002 per token | Monetizes AI-powered travel guidance; users control interaction depth |

## 12 Stripe Integration
1. **Subscription Management:**
   - Stripe Billing for subscription creation, renewal, and lifecycle management.
   - Automated invoice generation and email delivery.
   - Support for monthly and annual billing cycles.
   - Proration handling for plan changes and mid-cycle upgrades/downgrades.

2. **Payment Processing:**
   - Stripe Payment Methods for card, bank account, and wallet support.
   - PCI compliance handled by Stripe; HuaNest stores only payment method tokens.
   - Retry logic for failed payments with configurable grace periods.

3. **Usage Metering (For Pay-as-You-Go Premium Tier):**
   - Stripe Billing Meters for tracking Premium feature usage: companion bot interactions and media storage beyond quota.
   - Stripe Billing Meters for tracking media storage overage (e.g., $0.10/GB overage).
   - Real-time usage reporting from application services, storage layer, and companion bot service.
   - Automated overage billing at defined per-interaction and per-GB rates.

4. **Reporting and Analytics:**
   - Stripe reporting dashboard for revenue, churn, and customer metrics.
   - Internal analytics pipeline ingests Stripe events (subscription.created, invoice.paid, etc.) for BI.

## 13. Success Metrics
### 13.1 Product Metrics (MVP)
1. Route creation rate (users creating at least one route per period).
2. Save rate (saved site/route actions).
3. Activation rate (discover site plus create route in one session).

### 13.2 Technical Metrics
1. Map readiness latency.
2. Route generation latency (p50/p95).
3. API error rate.
4. Authentication success and MFA challenge completion rate.
5. Recommendation retrieval latency for RAG-backed personalization.

### 13.3 Business Metrics (Phase 2)
1. Partner-commerce revenue (hotel/restaurant referral plus coupon redemptions).
2. Partner conversion rate from itinerary recommendation clicks.
3. Number of active AI dataset customers (post-PMF).
4. Dataset/AI monthly recurring revenue (post-PMF).
5. Companion engagement rate (share of active itinerary sessions using companion mode).
6. Companion session quality score (thumbs-up rate or satisfaction score).

## 14. Release Plan
### 14.1 Release 1 (MVP)
- Discovery map, site details, route builder, accounts, telemetry baseline, and multilingual UI support for launch locales.

### 14.2 Release 2
- API platform beta for first-party web and future mobile clients, recommendation and coupon modules, post-trip sharing flow, Auth0-backed account hardening, console beta, Stripe billing, and usage pricing.

### 14.3 Release 3+
- Sharing/community expansions, deeper personalization, mobile readiness, and standardized dataset products.

## 15. Risks and Mitigations
1. Performance risk from dense map rendering.
- Mitigation: marker clustering, incremental loading, performance budgets.

2. Route quality mismatch versus user expectations.
- Mitigation: transparent scoring, manual reorder, feedback capture.

3. Scope creep from future ideas.
- Mitigation: strict MVP boundary and release gates.

4. Data compliance risk for future dataset products.
- Mitigation: defer dataset business until governance controls are operational.

5. Third-party dependency risk from Auth0 and Stripe.
- Mitigation: isolate integrations behind internal services and define fallback operational procedures.

6. Recommendation quality risk from poor or sparse interest signals.
- Mitigation: combine explicit saves, route behavior, and retrieval quality evaluation before increasing personalization weight.

## 16. Acceptance Criteria (MVP Exit)
1. User can discover sites from map and open detail pages.
2. User can generate, edit, and save a route (2-8 stops).
3. Authenticated user can view saved routes/sites.
4. Performance targets are met under agreed test conditions.
5. Core telemetry dashboards are available.
6. User authentication supports Auth0 login flows and secured saved-content access.
7. User can switch language, and core workflows render correctly in all supported launch locales.
8. User can start from at least one curated historical route template and save a customized version.

## 17. Open Decisions
1. Final map provider selection.
2. Exact MVP country/site coverage for launch.
3. API authentication and access policy for first-party mobile clients and approved third-party agents.
4. Exact dataset packaging boundaries for post-PMF AI monetization.

## 18. Technical Architecture

### 1. Purpose
This appendix defines a Google Cloud-first technical architecture that matches this PRD.

Scope covers:
1. MVP architecture for discovery and route planning.
2. Phase 2 architecture for partner commerce, public APIs, and B2B monetization.
3. Security, privacy, observability, and scalability requirements.
4. Auth, billing, retrieval, console, and agent-integration foundations.

### 2. Architecture Principles
1. Build for MVP speed first, without blocking scale.
2. Use managed Google Cloud services where possible.
3. Keep route-planning logic modular and testable.
4. Separate public heritage reference data from user-generated data.
5. Enforce security and privacy by default.
6. Design first-party and third-party API surfaces from a shared contract model.

### 3. High-Level System Design
#### 3.1 Logical Components
1. Web frontend (React): map exploration, site details, route builder, account pages.
2. Admin console frontend: backend operations, user management, API management, billing support.
3. API backend (Node.js): user, site, route, save/favorite, account, console, and agent operations.
4. Route planning engine: weighted route optimization for 2-8 stops in MVP.
5. Recommendation retrieval layer: RAG-backed retrieval of user interests and relevant heritage context.
6. Data layer: MongoDB for operational entities and retrieval index metadata.
7. Integration layer: UNESCO/public data ingestion, Auth0, Stripe, partner APIs, and map/geolocation APIs.
8. Observability layer: logs, metrics, traces, and alerting.

#### 3.2 Google Cloud Deployment Topology
1. Cloud Run:
- API service(s) for web and API clients.
- Stateless route-planning service for MVP loads.

2. Cloud Load Balancing:
- Global HTTPS entry point.
- Routes traffic to Cloud Run services.

3. Cloud CDN:
- Caches static web assets.

4. Cloud Armor:
- WAF and basic DDoS protection.

5. Secret Manager:
- Stores API keys, DB credentials, and service tokens.

6. Cloud Storage:
- Stores static files, export artifacts, and optional media.

7. Auth0:
- External identity provider for email, social, SMS, and MFA login.

8. Stripe:
- Billing platform for API marketplace subscriptions and dataset access.

9. Cloud Monitoring and Cloud Logging:
- Metrics, traces, logs, SLO dashboards, and alerts.

10. Optional future scale path:
- GKE for compute-heavy route workloads if Cloud Run is insufficient.

### 4. Service Architecture
#### 4.1 MVP Services
1. Web app service:
- React UI.
- Hosted via static asset pipeline and CDN.

2. API service:
- REST endpoints for sites, routes, users, saved objects.
- Auth and authorization checks.

3. Auth integration module:
- Validates Auth0-issued tokens.
- Maps external identity records to internal user profiles.

4. Route planner module:
- Weighted distance/time scoring.
- Manual route edit support after generation.

5. Data ingestion job:
- Pulls and normalizes heritage data.
- Applies attribution and schema validation.

#### 4.2 Phase 2 Services
1. Public API gateway behavior (same API service or split service):
- API key authentication.
- Rate limiting and quota enforcement.
- Usage metering for billing.
- Entitlement checks for Stripe-backed paid plans.

2. Recommendation service:
- Nearby points of interest by site/route context.
- Hotel and restaurant recommendation ranking.
- Nearby shop coupon offer selection.
- Retrieval of user-interest points and prior interactions using RAG patterns.

3. Commerce integration service:
- Referral link generation and click tracking.
- Coupon redemption event capture.
- Partner settlement and reconciliation exports.

4. User contribution service:
- Post-trip text, image, and video submissions.
- Moderation queue and abuse reporting workflow.

5. Billing and marketplace service:
- Stripe subscription lifecycle, invoices, and entitlement sync.
- Dataset order and contract tracking.

6. Console platform service:
- Internal backend tools for user management, moderation, API operations, and support.

7. Dataset standardization pipeline:
- Converts approved heritage and eligible usage data into governed dataset packages.
- Produces standardized export schemas and lineage metadata.

8. CLI support surface:
- Reuses public API contracts with developer keys.

9. Agent dispatch service:
- Receives planning and booking-support actions from AI agents.
- Enforces permissions, audit logs, and delegated execution policies.

### 5. Data Architecture
#### 5.1 Core Entities
1. HeritageSite:
- Canonical site id, name, location, category, significance, references.

2. User:
- Identity, profile fields, preferences, consent flags.

3. UserInterestProfile:
- User interests, interaction-derived embeddings or retrieval metadata, and recommendation context.

4. SavedSite:
- User-to-site saved relation.

5. RoutePlan:
- Route stops, generated order, totals, metadata, ownership.

6. RouteSegment:
- Distance/time values between site pairs for route calculations.

7. PartnerMerchant (Phase 2):
- Hotel, restaurant, and shop partner metadata and contract terms.

8. CouponOffer (Phase 2):
- Offer metadata, eligibility rules, validity windows, and redemption constraints.

9. ReferralEvent (Phase 2):
- Recommendation click, destination, attribution tags, and conversion status.

10. CouponRedemption (Phase 2):
- Redemption event details, user/session attribution, and settlement state.

11. UserExperiencePost (Phase 2):
- User-generated text, image, and video travel experiences with moderation state.

12. ShareArticle (Phase 2):
- Public or semi-public user sharing article derived from itinerary or post-trip content.

13. ApiKey (Phase 2):
- Key metadata, status, plan tier, quotas.

14. UsageRecord (Phase 2):
- Request counts, endpoint usage, billing window counters.

15. BillingAccount (Phase 2):
- Stripe customer linkage, plan state, invoice status, and entitlements.

16. DatasetExport (Post-PMF):
- Standardized dataset package metadata, lineage, consent scope, and license state.

#### 5.2 Data Separation Rules
1. Public/reference data:
- UNESCO/public heritage datasets with attribution.

2. User data:
- Accounts, preferences, saved items, generated routes.

3. Retrieval data:
- Interest profiles, retrieval metadata, embeddings or vector references, and recommendation features.

4. Commerce data:
- Partner catalogs, referrals, conversions, coupons, and settlements.

5. User contribution data:
- Post-trip text/image/video content and moderation metadata.

6. Shared article data:
- Published itineraries and shareable editorialized trip content.

7. Billing data:
- Stripe customers, subscriptions, invoices, entitlements, and payout state.

8. Business telemetry:
- Aggregated operational and product metrics.

#### 5.3 Storage Decisions
1. MongoDB:
- Primary operational datastore for application entities.
- MongoDB collections also store user profiles, sharing articles, and retrieval metadata.

2. Vector retrieval index:
- MongoDB Atlas Vector Search or equivalent retrieval layer for user-interest and heritage-context search.

3. Cloud Storage:
- Batch imports, exports, archived snapshots, media.

4. Optional cache (Phase 2+):
- Memorystore Redis for hot route query acceleration.

### 6. API Architecture
#### 6.1 Internal and Public API Style
1. Versioned REST endpoints under /v1.
2. JSON request/response contracts.
3. Standardized error envelope.

#### 6.2 Initial Endpoints (Phase 2 public exposure)
1. GET /v1/sites
2. GET /v1/sites/{id}
3. POST /v1/routes/plan
4. POST /v1/agent/dispatch
5. GET /v1/recommendations
6. POST /v1/console/support/escalations

#### 6.3 API Controls
1. Validation: schema checks and semantic checks.
2. Security: API keys for partner access, Auth0-authenticated user sessions for app flows, delegated tokens for approved agents.
3. Quotas: per-key usage budgets.
4. Rate limits: endpoint-level and key-level throttles.
5. Billing gates: Stripe entitlement checks for paid API and dataset actions.

### 7. Route Planning Design
#### 7.1 MVP Algorithm
1. Build candidate stop graph from selected sites.
2. Use weighted score combining distance and travel time.
3. Generate route order optimized for total score.
4. Return order, total distance, estimated duration.
5. Support manual reorder in UI and recompute summary.

#### 7.2 Performance Targets
1. p95 route generation <= 5 seconds for 2-8 stops.
2. Deterministic output for identical inputs in baseline mode.

#### 7.3 Future Enhancements
1. User preference weighting profiles.
2. Seasonal/time-window constraints.
3. Multi-objective optimization extensions.

### 8. Security Architecture
1. TLS for all external traffic.
2. Secure secret handling with Secret Manager.
3. IAM least-privilege for services and deployment identities.
4. Access control enforcement for user-owned data.
5. Abuse controls: rate limits, anomaly monitoring, alerting.
6. MFA-ready auth posture via Auth0 for console and higher-risk account actions.

### 9. Privacy and Compliance Baseline
1. Consent capture for personal data processing.
2. Data export and account deletion process before scale-up.
3. Governance for user-generated text/image/video contributions:
- Clear content ownership and usage terms.
- Moderation policy, abuse handling, and takedown workflow.
4. Clear governance for future dataset monetization:
- No dataset product in MVP.
- Post-PMF only.
- Aggregated/anonymized outputs only until legal approval gates are passed.
5. Retrieval governance:
- User-interest retrieval data must follow consent scope and deletion requirements.
- No training export includes personal or attributable user data without explicit opt-in.

### 10. Observability and Reliability
#### 10.1 Metrics
1. Map readiness latency.
2. Route generation p50/p95 latency.
3. API success/error rate by endpoint.
4. Request volume and saturation trends.
5. Recommendation click-through rate.
6. Referral conversion rate and coupon redemption rate.
7. User contribution rate and moderation turnaround time.
8. Auth0 login success rate and MFA completion rate.
9. Recommendation retrieval hit rate and latency.
10. Stripe billing success rate and entitlement sync lag.

#### 10.2 Logging and Tracing
1. Structured logs with request correlation ids.
2. Trace propagation across API and route modules.
3. Alert rules for latency, errors, and availability drops.

#### 10.3 SLO Targets
1. MVP availability target: 99.5% monthly.
2. Phase 2 public API target: 99.9% monthly.
3. Console availability target: 99.9% monthly during staffed support hours.

### 11. CI/CD and Environment Strategy
1. Environments:
- dev, staging, production.

2. CI pipeline:
- Lint, unit tests, API contract checks, security/dependency scans.

3. CD pipeline:
- Build container images.
- Deploy to Cloud Run.
- Run post-deploy smoke checks.
 - Verify Auth0, Stripe, and MongoDB connectivity in environment smoke tests.

4. Release strategy:
- Progressive rollout with rollback policy.

### 12. Cost and Scalability Strategy
1. Start with Cloud Run autoscaling for MVP simplicity.
2. Introduce caching before moving to more complex compute platforms.
3. Use metrics-driven capacity planning based on route request peaks.
4. Move route-heavy workloads to GKE only when justified by latency/cost evidence.

### 13. Risks and Mitigations
1. Map performance risk:
- Mitigation: clustering, lazy loading, asset optimization.

2. Route result quality risk:
- Mitigation: transparent scoring, manual edits, user feedback loops.

3. Scope creep risk:
- Mitigation: enforce PRD non-goals and milestone gates.

4. Third-party auth or billing outage risk:
- Mitigation: graceful degradation, operational fallbacks, and webhook replay workflows.

5. Retrieval quality or drift risk:
- Mitigation: offline evaluation set, retrieval metrics, and human review of recommendation outputs.

6. Dataset governance breach risk:
- Mitigation: dataset export approvals, lineage tracking, consent audits, and legal release gates.

4. API abuse risk:
- Mitigation: key lifecycle controls, quota limits, automated detection.

5. Partner attribution and settlement accuracy risk:
- Mitigation: deterministic tracking ids, reconciliation jobs, and monthly audit checks.

6. UGC moderation and safety risk:
- Mitigation: moderation queue, reporting tools, policy enforcement, and escalation playbooks.

### 14. Delivery Roadmap Alignment
1. Release 1 (MVP): map, site details, route builder, accounts, observability baseline.
2. Release 2: recommendation and coupon modules, post-trip sharing, public API beta, keys/quotas, usage pricing.
3. Release 3+: partner-commerce optimization, AI dataset monetization readiness, and sharing/personalization expansions.

### 15. Open Technical Decisions
1. Final map provider and geospatial pricing model.
2. MongoDB hosting model (self-managed vs Atlas on GCP).
3. API gateway/rate-limiting implementation detail.
4. Exact CI/CD tooling choices for Google Cloud deployment.
