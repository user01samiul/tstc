# Pre Construction Planning — Refactor Notes

Date: 2026-05-05

## What the client asked

Collapse two columns of the Services mega menu ("Traffic Engineering & Planning" and "Permit Applications") into a single new entry called **Pre Construction Planning**. Old per-page links removed from nav, but the underlying pages stay (client may reuse later). The new entry leads to one long-form page where 14 services live as anchored sections that "speak to each other."

## What changed

### Created
- `lib/preConstructionSections.ts` — shared `PRE_CON_SECTIONS` array (id + label + optional navLabel). Single source of truth for navbar and the page so anchor ids stay in sync.
- `app/services/pre-construction-planning/page.tsx` — long-form client page with:
  - Hero (background `/DSC02286.webp`, h1, subhead, two CTAs)
  - Mobile sticky `<details>` "Jump to section" accordion
  - Desktop sticky left-rail TOC with `IntersectionObserver`-driven active-section highlighting
  - 14 anchored sections (see status table below)
  - Cross-link "See also" footers between thematically related sections
  - Final CTA block (mirrors `permit-application` pattern)

### Edited
- `components/Navbar.tsx`
  - Imported `PRE_CON_SECTIONS`
  - Desktop mega menu: deleted columns 1 (Traffic Engineering & Planning) and 2 (Permit Applications). Inserted one consolidated "Pre Construction Planning" column with `col-span-2` containing an internal `grid-cols-2` list of all 14 anchor links + the existing "View All Services" pill. Panel widened from `w-[1050px] grid-cols-5` → `w-[1180px] grid-cols-6`.
  - Mobile drawer: removed the two old nested submenus, inserted one "Pre Construction Planning" accordion iterating `PRE_CON_SECTIONS`.

### Untouched (preserved per client instruction)
- `app/services/traffic-plans/`
- `app/services/traffic-management-plans/`
- `app/services/swept-path/`
- `app/services/event-management-plans/`
- `app/services/permit-application/`

These pages still resolve at their original URLs but are no longer linked from the navbar.

## 14 sections — content status

| # | Section | id (anchor) | Status | Source |
|---|---|---|---|---|
| 1 | Traffic & Pedestrian Guidance Scheme (TGS) | `#tgs` | Populated | `traffic-plans/page.tsx` |
| 2 | ROL Applications | `#rol-applications` | Populated | `permit-application/page.tsx` |
| 3 | Council Applications | `#council-applications` | Populated | `permit-application/page.tsx` |
| 4 | Pre Construction Planning and Staging | `#staging` | Populated | `construction-plans/page.tsx` |
| 5 | Traffic Management Plans (TMPs) | `#tmp` | Populated | `traffic-management-plans/page.tsx` |
| 6 | Traffic Staging Plans – Design (CAD) | `#traffic-staging-cad` | Populated (thin) | derived from `traffic-plans` Multi-Stage Layouts |
| 7 | Traffic Modelling (CAD) | `#traffic-modelling-cad` | **BLANK — title only** | **No source content found** |
| 8 | SIDRA Traffic Modelling / Analysis | `#sidra` | **BLANK — title only** | **No source content found** |
| 9 | Risk Assessment | `#risk-assessment` | Populated | `site-risk-assessments/page.tsx` |
| 10 | Dilapidation Report | `#dilapidation` | **BLANK — title only** | **No source content found** |
| 11 | Temporary Barrier Design Statements | `#temporary-barriers` | **BLANK — title only** | **No source content found** |
| 12 | Swept Path Analysis | `#swept-path` | Populated | `swept-path/page.tsx` |
| 13 | TfNSW and Council Application Management | `#application-management` | Populated | `permit-application/page.tsx` |
| 14 | Bus and Police Approvals | `#bus-police-approvals` | Populated | `permit-application/page.tsx` |

**Action item for client:** Provide copy for the 4 BLANK sections (#7 Traffic Modelling CAD, #8 SIDRA, #10 Dilapidation, #11 Temporary Barriers) before launch.

## Bug fixes after initial implementation

- **Sticky left-rail TOC was scrolling with the page** — caused by `overflow-x-hidden` on the page's outer wrapper, which creates a scroll container that breaks `position: sticky` on descendants. Fixed by removing `overflow-x-hidden` from this page's root `<div>` only.

## Verification

- `npm run build` — passes cleanly (32/32 static pages generated). New route `/services/pre-construction-planning` shows in the route table; all 5 orphaned service pages still build.
- Manual checks to do in `npm run dev`:
  1. Hover Services in the navbar → confirm only Pre Construction Planning, Traffic Controllers, Gallery, Signage Installation columns visible
  2. Click each of the 14 sub-links → confirm scroll to matching section, heading not hidden under fixed navbar
  3. Open mobile drawer → confirm only one "Pre Construction Planning" accordion in place of the two old ones
  4. Scroll the new page → confirm desktop sticky TOC stays fixed, active-section highlight tracks scroll
  5. Direct-URL test old pages — `/services/traffic-plans`, `/services/traffic-management-plans`, `/services/swept-path`, `/services/event-management-plans`, `/services/permit-application` must all still load

## Decisions taken without asking

- Mega menu widened from 1050px to 1180px (needed to fit 2-col internal list).
- Sticky desktop TOC + mobile accordion implemented (14 sections without one would be unusable).
- No redirects from old pages — they remain reachable by direct URL only.
- No sitemap edits — this project has no `sitemap.ts`.
- BLANK sections render heading only, no "coming soon" copy (strict client instruction).
