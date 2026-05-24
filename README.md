# HuaNest Heritage

HuaNest Heritage is a companion app for people visiting world cultural heritage sites. It helps travelers discover UNESCO heritage places, plan practical multi-stop routes, and receive in-trip guidance. All core features are free for travelers. The platform supports a multilingual user experience, uses Auth0 for flexible authentication, MongoDB for core operational data, RAG-backed retrieval for better recommendations, Stripe for wallet and usage billing, and a unified API surface for web, future mobile, and AI-agent integrations.

## Product Direction

Full details are in [product/PRD.md](product/PRD.md) and tracked in [product/Todo.md](product/Todo.md).

Key decisions:
1. Primary persona: individual travelers — all planning features are free.
2. Product focus: companion-first experience before broad platform expansion.
3. MVP map strategy: 2D-first for speed and delivery risk control.
4. Monetization: partner commerce in phase 2, AI dataset access thereafter.
5. Cloud platform: Google Cloud.
6. Identity platform: Auth0.
7. Core operational datastore: MongoDB.

## MVP Scope

In scope:
1. Interactive map exploration with search and filters.
2. Heritage site detail pages with cultural context, significance, and AI-generated 3D visual interpretation.
3. Route builder for custom routes and pre-made historical route templates.
4. User accounts with Auth0 login, saved sites, saved routes, and interest profiles.
5. Baseline observability for performance and reliability.
6. Multilingual UI with language selector and localized core content.

Out of MVP:
1. Native mobile apps.

## Planned Stack

1. Frontend: React (web, responsive).
2. Backend: Node.js API services.
3. Identity: Auth0 with email, social, SMS, and MFA support.
4. Agents: Mastra.ai-based agent layer with LLM-backed execution (phase 2+).
5. Data: MongoDB for core entities, sharing articles, and retrieval metadata.
6. Retrieval: RAG-backed user-interest and heritage-context retrieval for recommendations.
7. Billing: Stripe for wallet top-up and usage-based billing.
8. Mapping and geospatial: map provider plus distance matrix support.
9. Cloud: Google Cloud managed services.
10. Localization: i18n framework for language switching, translation bundles, and locale formatting.
11. Dev Container: Docker-based development environment for consistency and cloud compatibility.

## Platform Capabilities

1. Authentication: Auth0 supports email login, social account login, SMS login, and two-factor authentication.
2. Core data storage: MongoDB stores users, routes, saved items, user-generated travel posts, and sharing articles.
3. Recommendation quality: RAG-backed retrieval stores and retrieves user interest points to improve recommendation relevance.
4. Unified API platform: the API layer supports the web app, future mobile apps, internal console workflows, and approved third-party agent integrations.
5. Billing: Stripe backs usage-based billing and future dataset licensing.
6. Console platform: internal tools support backend operations, user management, API operations, moderation, and support.
7. Dataset product path: heritage data and approved usage data can be standardized into governed datasets for LLM training and RAG use cases.
8. Agent-friendly design: third-party agents such as OpenClaw can use HuaNest APIs to plan trips and trigger supported booking flows.
9. Multilingual experience: users can switch app language, and core UI/content is localized per supported locale.
10. Ticket data freshness: an AI agent refreshes ticket-required site logistics weekly and flags stale or invalid records for review.
11. Companion mode: a personal AI companion can guide travelers during trips with practical tips, storytelling, and optional philosophy-inspired reflections.
12. Long-term journey mode: users can plan and complete multi-year heritage journeys with editable milestones and phased travel windows.
13. Community discussions: heritage-focused mini-social network where travelers share opinions, photos, travel tips, and ideal viewpoints for each site. Posts can be public (shared in discussion area), private (me only), or friends-only (selected connections). Discussions can be started from site detail pages or the dedicated discussion section.
14. User center dashboard: each user has a personal profile background page to view profile, badges, points, saved sites, planned routes, and wallet balance with top-up support.
15. Admin operations console: administrators can maintain heritage site information, tune AI agent parameters, and manage customers from one internal platform.

## AI Agent Architecture

HuaNest uses a Mastra.ai manager-plus-subagent pattern for operational automation. The manager routes tasks; each sub-agent owns one domain.

### Agent Overview

| Agent | Definition | Skill | Runtime |
|---|---|---|---|
| Heritage Manager | [.github/agents/heritage-manager.agent.md](.github/agents/heritage-manager.agent.md) | — | Routes tasks to sub-agents |
| Heritage Updater | [.github/agents/heritage-updater.agent.md](.github/agents/heritage-updater.agent.md) | [heritage-data-refresh](.github/skills/heritage-data-refresh/SKILL.md) | Weekly scheduled + on-demand |
| Review Summarizer | [.github/agents/review-summarizer.agent.md](.github/agents/review-summarizer.agent.md) | [review-summarization](.github/skills/review-summarization/SKILL.md) | Weekly batch + on-demand |
| Booking Agent | [.github/agents/booking-agent.agent.md](.github/agents/booking-agent.agent.md) | [booking-management](.github/skills/booking-management/SKILL.md) | Real-time during itinerary planning |
| Customer Service | [.github/agents/customer-service.agent.md](.github/agents/customer-service.agent.md) | [customer-support](.github/skills/customer-support/SKILL.md) | Real-time on user request |
| Travel Companion | Planned: `.github/agents/travel-companion.agent.md` | Planned companion skill | Real-time during active travel |

### Agent Responsibilities

**Heritage Manager** (`heritage-manager.agent.md`)
- Receives all incoming operational tasks.
- Identifies the correct sub-agent from a routing map and dispatches with context.
- Sequences multi-agent pipelines (for example: refresh site data, then re-summarize reviews).
- Returns a consolidated result to the caller.

**Heritage Updater** (`heritage-updater.agent.md`)
- Fetches official UNESCO WHC data weekly for all active sites.
- Diffs incoming data against stored records and applies validated field-level updates.
- Flags status changes (endangered, delisted) for human review.
- Refreshes ticket-required site metadata weekly (ticket needed, latest price/rules when available, official purchase link, last-verified timestamp).
- Flags legacy or invalid ticketing records for human review and correction.
- Produces a structured update log: `{ siteId, field, oldValue, newValue, source, timestamp }`.

**Review Summarizer** (`review-summarizer.agent.md`)
- Reads approved `UserExperiencePost` records for each heritage site.
- Generates a 200–400 word site-level summary with sentiment score, highlights, pain points, and practical tips.
- Flags reviews containing PII or inappropriate content for the moderation queue.
- Skips sites with fewer than 3 approved reviews.

**Booking Agent** (`booking-agent.agent.md`)
- Searches active `PartnerMerchant` records near a heritage site (default radius 5 km).
- Generates partner referral links with HuaNest UTM attribution.
- Generates coupon redemption codes for verified merchants.
- Records `ReferralEvent` for click tracking and conversion webhooks.
- Handles booking status checks and cancellation forwarding.
- Provides agent-friendly planning and partner-action support for external travel agents.

**Customer Service** (`customer-service.agent.md`)
- Answers heritage site and itinerary questions from the product database.
- Delegates booking issues to the Booking Agent.
- Flags content accuracy complaints and inappropriate UGC for the review queues.
- Creates structured escalation records when a case needs a human operator.

**Travel Companion** (planned `travel-companion.agent.md`)
- Provides stop-aware guidance while users are actively traveling on a saved route.
- Delivers storyteller narratives grounded in verified heritage data.
- Offers optional philosophy-inspired reflections linked to site themes and user interests.
- Suggests practical on-trip actions (time allocation, nearby highlights, and transition tips between stops).
- Respects language preference and safety boundaries, falling back to standard site content when uncertain.

### Mastra Agent Runtime (Node.js)

The Mastra agent layer lives in `apps/api/src/agents/`:

```
apps/api/src/agents/
    index.js            <- Manager dispatch entrypoint (to be backed by Mastra flows)
    heritageUpdater.js  <- Heritage Updater implementation
    reviewSummarizer.js <- Review Summarizer implementation
    booking.js          <- Booking Agent implementation
    customerService.js  <- Customer Service implementation
```

The manager's `dispatch()` function accepts `{ taskType, payload }` and routes by task type. This router is the current compatibility layer while each task is migrated into Mastra agents, tools, and workflows:

```javascript
const { dispatch, dispatchSequence } = require('./agents');

// Single task
await dispatch({ taskType: 'heritage.refresh', payload: { mode: 'all' } });

// Multi-step pipeline
await dispatchSequence([
  { taskType: 'heritage.refresh', payload: { siteIds: ['site-001'] } },
  { taskType: 'reviews.summarize', payload: { siteId: 'site-001' } },
]);
```

Task type routing:

| taskType | Agent |
|---|---|
| `heritage.refresh` | heritage-updater |
| `heritage.update` | heritage-updater |
| `heritage.ticket.refresh` | heritage-updater |
| `reviews.summarize` | review-summarizer |
| `booking.search` | booking-agent |
| `booking.status` | booking-agent |
| `booking.cancel` | booking-agent |
| `support.query` | customer-service |
| `support.complaint` | customer-service |
| `support.escalate` | customer-service |
| `companion.start` | travel-companion |
| `companion.guide` | travel-companion |
| `companion.story` | travel-companion |
| `companion.reflect` | travel-companion |

## Development Container

This repository includes a VS Code Dev Container configuration in `.devcontainer/devcontainer.json`.

### Run In Dev Container

1. Open this repository in VS Code.
2. Run command: `Dev Containers: Reopen in Container`.
3. Wait for the container build and dependency install (`npm install --prefix apps/api`).
4. Start the API:

```bash
npm --prefix apps/api start
```

The API is available on port `8080` (auto-forwarded by VS Code).

## Monetization Model

| Stream | Who pays | When active |
|---|---|---|
| Partner commerce (hotel/restaurant referral + coupons) | Commerce partners | Phase 2 |
| AI agent dataset access | LLM builders and AI systems | Post product-market fit |

All traveler-facing features remain free.

Stripe is the planned billing layer for usage-based traveler billing and governed dataset purchases.

## User Workflow (Traveler Journey)

HuaNest Heritage is designed to support a straightforward traveler workflow from discovery to itinerary creation.

### Core User Steps

1. **Sign Up / Log In**
   - Create a free account via Auth0 (email, social login, or SMS).
   - No credit card required for free access.
   - Enable optional MFA for account security.
    - Select preferred language from supported locales.

2. **Explore and Discover**
   - Home page: Browse the interactive 2D map with clustered heritage site markers (based on UNESCO data, users' contributions, and AI-generated insights). Support zoom and pan to explore different regions, and click markers for quick site info popups. Also can save (favorite) any interesting sites as you discover them.
   - Left sidebar: Search by site name, country, or region.
   - Left sidebar: Recommendations based on user interest profile and popular sites. Plus the thematic route templates (examples: Iconic Historical Route (2 weeks): Ancient Roots to Renaissance Art, Hidden Germs: Rare Heritage Paths for Advanced Travelers).
   - Sharing page: Generate a read-only sharing link for your route to send to friends.
   - View site counts and geographic distribution.

3. **View Site Details and Save**
   - Click a marker or search result to open the site detail page.
   - Read site name, UNESCO designation, historical significance, and cultural context.
    - Review practical logistics metadata (access hours, entry fees, ticket requirement, and official ticket link if required).
    - See a last-verified timestamp for ticket information (weekly refresh target).
   - View other user contributions and reviews.
   - Click the **Favorite** button to add the site to your personal saved collection.
   - Return to the map and continue exploring other regions and sites.
   - Build up a collection of saved sites over time.

4. **Create a Route Plan from Saved Sites**
   - Open your account dashboard and view all saved sites or saved routes.
    - Optionally start with a pre-made themed route template (examples: Iconic Historical Route (2 weeks): Ancient Roots to Renaissance Art, Hidden Germs: Rare Heritage Paths for Advanced Travelers).
   - Select any number of saved sites you want to visit in one trip.
    - Or customize a template by adding, removing, and reordering stops.
    - Optionally switch to long-term journey mode for multi-year goals.
    - Divide the full journey into selected date windows across years (for example holiday blocks or seasonal windows).
    - Re-edit and re-optimize milestones later when budget and time availability change.
    - View estimated total distance and travel duration for the route.
    - See nearby hotel and restaurant recommendations for each stop, with referral links and coupon codes where available.
   - Submit them to the route planner.
    - Receive an optimized route with order, total distance, and estimated travel duration.
    - Manually reorder stops if needed.
    - Save the route to your account dashboard.

5. **Visit Personal Center**
    - Open profile background/dashboard to review public profile details.
    - See earned badges and current points balance.
    - Check saved sites and planned routes in one place.
    - Top up wallet balance for usage-based charges before exceeding free quotas.

6. **View Recommendations**
   - See nearby hotel, restaurant, and coupon recommendations for each stop.
   - Click referral links to browse partner accommodations and dining.
   - Generate and redeem coupon codes at partner merchants.
   - Track booking confirmations and referral conversions.

7. **Use Companion Mode (Phase 2)**
    - Start companion mode while traveling your saved route.
    - Ask for practical guidance at each stop (what to prioritize, suggested timing, and nearby highlights).
    - Switch to storyteller mode for historical narratives.
    - Ask the question by taking a photo of your surroundings or a specific site feature for on-the-spot insights.
    - Ask Alice for sharing a moment of wonder or a philosophical reflection inspired by the site themes and your interests in the site's info page.
    - Use philosophy mode for optional reflective prompts and deeper inspiration.

8. **Contribute (Phase 2)**
   - After visiting a site, submit post-trip travel experiences (text, images, video).
   - Help other travelers by sharing practical tips and insights.
   - Moderation ensures content quality and prevents inappropriate submissions.

9. **Share and Revisit**
   - Generate a read-only sharing link for your route to send to friends.
   - Return to saved routes anytime to view or modify.
   - Review all saved sites and routes in the account dashboard.
   - Shortcut to sharing routes, pictures, videos to instagram, facebook, and twitter.

### Engagement Incentives

HuaNest Heritage encourages user contributions and platform engagement through a rewards system:

**Contribution Rewards (Phase 2)**
- Earn points for submitting post-trip travel experiences (text, images, video).
- Points scale by content quality: text posts (10 pts), image submissions (15 pts), video contributions (25 pts).
- Accumulated points unlock badges and cosmetic rewards (featured contributor badge, travel storyteller badge).

**Sharing Incentives**
- Earn bonus points when friends click your shared route links.
- Additional points if friends sign up via your referral and create their own routes.
- Unlock "Travel Ambassador" status at defined sharing thresholds.

**Engagement Recognition**
- Display contributor stats on public profiles (total reviews, sites visited, routes shared).
- Featured contributor spotlights on the discover page for high-quality, helpful content.
- Monthly recognition email highlighting top contributors and their destinations.

**Early Access & Exclusive Benefits**
- High-engagement contributors earn early access to new features.
- Exclusive coupon codes for high-engagement users (contributors + frequent sharers).
- Partner commerce priority deals based on your interests and contribution history.

## Pricing Model

HuaNest Heritage offers a single unified service with generous free quotas and transparent usage-based pricing for overages. No paywalls block core features.

### Free Quotas (Included for All Users)
- Unlimited site discovery and exploration.
- Up to **10 route plans per month** (each additional route: $0.50).
- Up to **5 GB/month discussion storage** for images and videos (overage: $0.10/GB).
- **Alice AI Companion:** Generous monthly token quota for in-trip guidance, storytelling, and philosophy-inspired reflection, with a wonderland-style guidance experience (overage: $0.002/token).
- No credit card required to start; only email or social login via Auth0.

### Usage-Based Overages
When you exceed free quotas, you're charged transparently:
- **Create an 11th route:** $0.50 per additional route that month.
- **Upload 6 GB of images/videos:** $0.10 per GB beyond your 5 GB monthly allowance.
- **Use Alice extensively:** $0.002 per token beyond your monthly quota.

All users see a real-time usage dashboard showing current month's charges and cost forecast before they occur.

### Getting Started

- Start free with no credit card.
- Add a card when you're ready to exceed free quotas (e.g., planning your 11th route, using Alice heavily, or uploading lots of photos).
- See cost estimate before charges are applied.
- Pause charges anytime by reverting to free quota usage.

## Google Cloud Architecture

Detailed design is in [product/Architecture.md](product/Architecture.md).

Target platform components:
1. Compute: Cloud Run (API and agent services), optional GKE for heavier workloads.
2. Identity: Auth0 for user authentication and MFA.
3. Data: MongoDB Atlas (or managed equivalent), including retrieval metadata and vector-search support where needed.
4. Billing: Stripe for subscriptions, invoices, and dataset sales.
5. Scheduling: Cloud Scheduler for weekly heritage refresh and review summarization jobs.
6. Networking and edge: Cloud Load Balancing, Cloud CDN, Cloud Armor.
7. Secrets and security: Secret Manager, IAM least privilege, TLS.
8. Observability: Cloud Monitoring, Cloud Logging, Cloud Trace.
9. AI agents: Mastra.ai framework running on Cloud Run, with LLM calls to OpenAI or other providers.

## Container-First Development

This repository is structured for Microsoft Dev Container and Docker-based deployment.

### Dev Container Quick Start

Prerequisites:
1. Docker Desktop running.
2. VS Code extension: Dev Containers.

Steps:
1. Open command palette in VS Code.
2. Run: `Dev Containers: Reopen in Container`.
3. Wait for container build and post-create setup.

Test local API after container starts:
~~~bash
npm --prefix apps/api start
~~~

Health check:
~~~bash
curl http://localhost:8080/health
~~~

Expected response:
~~~json
{"status":"ok","service":"huanest-heritage-api"}
~~~

### Build Local Docker Image

~~~bash
docker build -t huanest-heritage-api:local .
docker run --rm -p 8080:8080 huanest-heritage-api:local
~~~

## Build and Push to Google Cloud

Target registry format:
~~~text
REGION-docker.pkg.dev/PROJECT_ID/REPOSITORY/IMAGE:TAG
~~~

### One-Time Setup

~~~bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
gcloud services enable artifactregistry.googleapis.com
gcloud artifacts repositories create huanest-heritage \
  --repository-format=docker \
  --location=us-central1 \
  --description="Docker images for HuaNest Heritage"
~~~

### Push (Bash)

~~~bash
./scripts/build-and-push.sh YOUR_PROJECT_ID us-central1 huanest-heritage huanest-heritage-api v0.1.0
~~~

### Push (PowerShell)

~~~powershell
./scripts/build-and-push.ps1 -ProjectId YOUR_PROJECT_ID -Region us-central1 -Repository huanest-heritage -ImageName huanest-heritage-api -Tag v0.1.0
~~~

### Manual Push

~~~bash
gcloud auth configure-docker us-central1-docker.pkg.dev --quiet
docker build -t us-central1-docker.pkg.dev/YOUR_PROJECT_ID/huanest-heritage/huanest-heritage-api:v0.1.0 .
docker push us-central1-docker.pkg.dev/YOUR_PROJECT_ID/huanest-heritage/huanest-heritage-api:v0.1.0
~~~

### Deploy to Cloud Run

~~~bash
gcloud run deploy huanest-heritage-api \
  --image us-central1-docker.pkg.dev/YOUR_PROJECT_ID/huanest-heritage/huanest-heritage-api:v0.1.0 \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
~~~

## Repository Documents

| Document | Purpose |
|---|---|
| [product/PRD.md](product/PRD.md) | Product requirements |
| [product/Todo.md](product/Todo.md) | Implementation checklist |
| [product/Architecture.md](product/Architecture.md) | Technical architecture |
| [product/Marketing.md](product/Marketing.md) | Market analysis and GTM strategy |
| [product/ideas.md](product/ideas.md) | Raw ideation |

## Repository Structure

```text
/.devcontainer
    devcontainer.json
    Dockerfile
/.github
    /agents
        heritage-manager.agent.md   <- Manager agent (routes tasks)
        heritage-updater.agent.md   <- Weekly site data refresh
        review-summarizer.agent.md  <- User review summarization
        booking-agent.agent.md      <- Hotel/restaurant/coupon bookings
        customer-service.agent.md   <- User support and escalation
    /skills
        /heritage-data-refresh
            SKILL.md                <- Data fetch, diff, and update procedure
        /review-summarization
            SKILL.md                <- Review aggregation and summary procedure
        /booking-management
            SKILL.md                <- Partner search, referral, and settlement
        /customer-support
            SKILL.md                <- Issue classification and resolution
/apps
    /api
        package.json
        /src
            index.js                <- Express API entry point
            /agents
                index.js            <- Manager dispatch router
                heritageUpdater.js  <- Heritage Updater runtime
                reviewSummarizer.js <- Review Summarizer runtime
                booking.js          <- Booking Agent runtime
                customerService.js  <- Customer Service runtime
/product
    Architecture.md
    ideas.md
    Marketing.md
    PRD.md
    Todo.md
/scripts
    build-and-push.ps1
    build-and-push.sh
Dockerfile
README.md
```

## Development Workflow

1. Reopen in Dev Container.
2. Implement feature changes in app code.
3. Run local checks and container test.
4. Build and push a versioned image to Artifact Registry.
5. Deploy promoted image to Cloud Run staging or production.

## Quality Targets

1. Map interaction readiness: <= 3 seconds (broadband desktop).
2. Route generation p95: <= 5 seconds for 2-8 stops.
3. API availability target: 99.5% monthly (MVP), 99.9% (phase 2 public API).

## Ownership

1. Builder: Fang Zhang