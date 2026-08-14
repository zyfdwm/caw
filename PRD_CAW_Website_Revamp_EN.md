# PRD — Chariea Aviya Wellness (CAW) Website Revamp

**Version:** 1.0
**Date:** July 18, 2026
**Author:** Zyf.Space (Faiz)
**Stack:** Next.js + Antigravity (AI-assisted build)
**Content reference:** https://charieaaviyawellness.id/

---

## 1. Background & Objective

Chariea Aviya Wellness (CAW) is a holistic healing brand run by Chariea — a hypnotherapist, kinesiologist, sound therapist, and Family Constellation facilitator based in Perth, also active in Bali (Denpasar) and Bandung. The existing website already has solid content structure (12-Week Transformation, Family Constellation, Sound Healing, Retreat & Workshop), but needs a revamp in terms of:

1. **Navigation** — restructured with dropdowns per service category, so users can easily find the service that fits their needs (Private vs Group, etc).
2. **Visual identity** — updated to a blush/nude tone palette with a new, more elegant "quiet luxury" font combination.
3. **Lead capture flow** — the homepage CTA leads to a short form that auto-generates a WhatsApp message based on the user's input, making the browsing-to-booking conversion faster.

**Main goal:** increase discovery call / booking conversions via WhatsApp, with clearer UX and stronger on-brand visuals.

---

## 2. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | SSG/ISR for service pages, for SEO-friendliness & speed |
| Styling | Tailwind CSS | Custom theme based on design tokens below |
| Font loading | `next/font/google` | EB Garamond, Playfair Display, Montserrat |
| Form handling | Client-side state → generate `wa.me` link | No backend needed initially (see §6) |
| Dev tool | Antigravity (agentic coding) | This PRD is broken down into granular components so it's easy to turn into tasks/prompts for Antigravity |
| Deployment | Vercel (recommended) | Auto preview per branch |
| Analytics | GTM + GA4 (optional, later) | For tracking CTA clicks & form submissions |

---

## 3. Design System

### 3.1 Color Palette
| Token | Hex | Usage |
|---|---|---|
| `--color-nude` / `--color-button` | `#d4b093` | Buttons, accents, borders, hover states |
| `--color-accent` | `#884626` | Dark warm brown for text accents and headings |
| `--color-dark` | `#3D2B1F` | Primary body text |
| `--color-white` | `#FFFFFF` | Card backgrounds, alternating sections |

> ⚠️ Note: Buttons use `#d4b093` for a soft warm tone, while text accents use `#884626` for readable contrast.

### 3.2 Typography
| Font | Role | Example Usage |
|---|---|---|
| **Playfair Display** | Heading (H1–H3), decorative serif | Hero title, section titles, service names |
| **EB Garamond** | Body text, elegant serif | Paragraphs, service descriptions, testimonials |
| **Montserrat** | Sans-serif, UI elements | Navbar, buttons, form labels, badges/tags |

### 3.3 Visual Tone
Soft, warm, feminine, "quiet luxury" — generous whitespace, natural-light photography, rounded corners (rounded-xl and up), smooth scroll transitions (fade/slide on scroll).

---

## 4. Information Architecture / Navigation

```
Navbar
├── Sound Healing
│   ├── Private (One on One)
│   └── Group (Event)
├── Family Constellation
│   ├── Private (One on One)
│   └── Group (Event)
├── 12-Week Transformation Program
├── Retreat & Workshop
└── Event
    ├── Family Constellation
    ├── Sound Bath
    ├── Qigong
    └── Breath Work
```

**Implementation notes:**
- All dropdown items are **placeholder URLs** for now (`#` or `/coming-soon`) — final URLs to follow later, so the Next.js routing structure should be set up first (folder per slug), with content added afterward.
- Suggested folder structure:
```
/app
  /sound-healing/private/page.tsx
  /sound-healing/group/page.tsx
  /family-constellation/private/page.tsx
  /family-constellation/group/page.tsx
  /12-week-program/page.tsx
  /retreat-workshop/page.tsx
  /event/family-constellation/page.tsx
  /event/sound-bath/page.tsx
  /event/qigong/page.tsx
  /event/breath-work/page.tsx
```
- Mobile: dropdowns become an accordion inside the hamburger menu.
- Sticky navbar with cream background + subtle shadow on scroll.

---

## 5. Homepage — Content Structure

Follows the flow of the existing site (charieaaviyawellness.id), adapted to the new tone/branding, plus an added breathwork certification point.

| # | Section | Content (adapted from existing site) |
|---|---|---|
| 1 | **Hero** | Tagline: *"Transform your life with holistic healing, subconscious work, and energy alignment."* + large headline "Beyond the Surface, Nourishing Your Soul" + CTA button "Book Your Free 20 Min Discovery Call Now" → triggers the form (see §6) |
| 2 | **The 12-Week Transformation** | Program description + "What You'll Experience" (bullet list) + "Who Is This For" (bullet list) |
| 3 | **What's Included** | Card grid: tailored healing sessions, self-healing tools, private 1:1, group healing, personalized audio, progress tracking, wellness guidance |
| 4 | **Meet Chariea** | Short bio + photo + approach list (Reprogram limiting beliefs, Heal generational trauma, etc.) |
| 5 | **Certifications** | Existing certification list **+ add Breathwork certification** (need the full program/institution name from you/Chariea) |
| 6 | **Transform From Within** | Chariea's personal journey narrative (mind/body/energy approach — 3-column icon layout) |
| 7 | **Why Work With Me** | Credibility badges: RTT, Member of IICT, 4.9 Google Reviews |
| 8 | **Healing Services** | Card per service (12-Week Program, Family Constellation, Advanced Sound Healing, Retreat & Workshop) — linking to each service page per the IA in §4 |
| 9 | **Client Testimonials** | Carousel/grid of testimonials |
| 10 | **Final CTA** | "Schedule Your Free Call Now" → same form as hero |
| 11 | **Footer** | Logo, Main Clinic (Perth address), Home Clinic (Bali address), social links |

---

## 6. Lead Form → WhatsApp Flow

### 6.1 Form Fields
| Field | Type | Required | Notes |
|---|---|---|---|
| First Name | text | ✅ | |
| Last Name | text | ✅ | |
| Email | email | ✅ | validate email format |
| Service | select/dropdown | ✅ | Options = all services from the navigation (Sound Healing – Private/Group, Family Constellation – Private/Group, 12-Week Program, Retreat & Workshop, Event – Family Constellation/Sound Bath/Qigong/Breath Work) |
| — | button | — | "Send via WhatsApp" |

### 6.2 Logic
1. User fills out the form in a modal/section (triggered from the hero CTA & final CTA).
2. When clicking "Send via WhatsApp", the system **auto-generates a greeting message** based on the input, e.g.:

```
Hello Chariea Aviya Wellness, my name is [First Name] [Last Name].
I'm interested in booking [Service].
My email is: [Email].
Please let me know more, thank you 🙏
```

3. Redirect to `https://wa.me/[WA_NUMBER]?text=[ENCODED_MESSAGE]` (open in new tab).
4. **No backend/database needed** for the first version — everything is processed client-side (React state → build WA link). If lead capture into a Google Sheet/CRM before the WA redirect is needed later, that can be added as a Phase 2 via a Next.js API route + integration (e.g. Google Sheets API or Airtable).
5. Destination WhatsApp number: **needs confirmation** (a single number for all services, or different numbers per location Perth/Bali/Bandung?).

### 6.3 Validation
- Email format check.
- All fields required before the WA button is enabled (disabled state otherwise).
- Visual feedback for empty/invalid fields (soft pink border + microcopy, staying on-brand — avoid harsh red).

---

## 7. Non-Functional Requirements

- **Responsive**: mobile-first, standard Tailwind breakpoints (sm/md/lg/xl).
- **Performance**: use `next/image` for all photos, lazy-load below-the-fold sections.
- **SEO**: unique metadata per service page (title/description), OpenGraph image, structured data (Organization + LocalBusiness for the 2 clinic locations).
- **Accessibility**: re-check color contrast (see §3.1 note), alt text on all images, keyboard-navigable dropdowns.
- **Analytics**: event tracking on CTA clicks, form submissions, WA button clicks (for funnel monitoring via GTM/GA4).

---

## 8. Open Items to Confirm

1. **Final URLs** for each navigation dropdown (to follow, per your info).
2. **Additional dark text color** beyond the 2 colors given, to keep contrast safe.
3. **Breathwork certification details** (program name, institution, duration) to add to the Certifications section.
4. **Destination WhatsApp number** — one global number or per location.
5. **New photo/asset source** — reuse from the old website or is a new shoot planned?
6. Is a **CMS** needed (e.g. Sanity/Notion-as-CMS) so Chariea can update testimonials/content herself, or should everything be hardcoded in the code for now?

---

## 9. Next Steps (Build Plan for Antigravity)

Suggested task breakdown, so it's easy to prompt one by one into Antigravity:

1. Set up Next.js project + Tailwind + font config (design tokens in §3).
2. Build Navbar component + dropdowns (desktop & mobile accordion).
3. Build Homepage section-by-section (§5), using placeholder images where assets aren't ready yet.
4. Build Lead Form component + WA link generator (§6).
5. Set up empty routing (placeholder pages) for all slugs in §4.
6. QA responsive design + accessibility check.
7. Deploy preview to Vercel for review with Chariea.

---

*This document can continue to be updated as decisions are made on the open items in §8.*
