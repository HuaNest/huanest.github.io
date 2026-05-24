---
name: customer-support
description: "Handle HuaNest Heritage customer service interactions. Use when: answering user questions about heritage sites, resolving booking issues, handling complaints or refund requests, explaining product features, flagging content moderation issues, or escalating complex cases to a human operator."
argument-hint: "Describe the user's question or issue. Include a booking reference, site name, or user ID if applicable."
---

# Customer Support

## When to Use

- Any inbound user question, complaint, or help request.
- Booking status queries that the Booking Agent cannot resolve automatically.
- Content accuracy complaints about heritage site information.
- Reports of inappropriate user-generated content.
- Any situation requiring escalation to a human operator.

## Issue Classification and First Response Target

| Category | First response target | Auto-resolvable? |
|---|---|---|
| Heritage site information query | Immediate | Yes |
| Itinerary or feature question | Immediate | Yes |
| Booking confirmation missing | < 2 minutes | Usually |
| Coupon redemption issue | < 2 minutes | Usually |
| Refund or cancellation request | < 5 minutes | Depends on policy |
| Complaint about content accuracy | < 5 minutes | Partial (flag + acknowledge) |
| Inappropriate content report | < 1 minute | Partial (flag + acknowledge) |
| Escalation required | < 2 minutes to create case | No |

## Procedure

### Step 1 — Acknowledge and classify
1. Read the user's message in full.
2. Identify the category from the table above.
3. Open with an acknowledgment sentence that restates the issue in the user's own terms.

### Step 2 — Attempt resolution
**For information queries:**
1. Search the `HeritageSite` collection for relevant content.
2. Return the answer with the official UNESCO site name and attribution.

**For booking issues:**
1. Invoke the Booking Agent via `#agent:booking-agent` with the booking reference and issue type.
2. Relay the result to the user in plain language.

**For content accuracy complaints:**
1. Acknowledge the complaint and thank the user.
2. Flag the site and the specific field for the Heritage Updater queue.
3. Confirm to the user that the team will review within 7 days.

**For inappropriate content reports:**
1. Acknowledge the report immediately.
2. Set `UserExperiencePost.moderationState` to `under-review` for the reported content.
3. Confirm to the user that the report has been received.

**For refund or cancellation requests:**
1. Look up the booking reference.
2. Check partner cancellation policy via the Booking Agent.
3. If automatically resolvable: proceed and confirm.
4. If not: proceed to escalation.

### Step 3 — Escalate if needed
Create an escalation record with:
```
{
  userId: string,
  issueCategory: string,
  conversationSummary: string,    // 3-5 sentence summary
  attemptedResolutions: string[], // what was tried
  recommendedNextAction: string,
  priority: "low" | "medium" | "high" | "urgent"
}
```

Priority guide:
- `urgent`: user safety concern, payment dispute > $200, data privacy complaint
- `high`: unresolvable booking issue, repeated complaint, influencer or press contact
- `medium`: policy complaint, feature request with context
- `low`: general feedback, minor question not found in documentation

### Step 4 — Close
1. Summarize what was done for the user.
2. Ask if anything else is needed.
3. For resolved cases: set interaction status to `resolved`.
4. For escalated cases: set interaction status to `escalated` and give the user a case reference number.

## Communication Tone

- Warm, knowledgeable, and culturally respectful.
- Use the official UNESCO designation when naming heritage sites.
- Do not use jargon, abbreviations, or internal system names with users.
- If unsure: say so clearly and offer to find out rather than guessing.
