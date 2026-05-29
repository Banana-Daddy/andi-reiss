# Andi Reiss — Design Brief

**Mode:** PRO-MAX (ui-ux-pro-max skill drove design decisions; 21st.dev for inspiration + patterns)
**Source:** https://andireiss.wordpress.com/ (+ /touch, /multidisciplinary-media-practice/photography)
**Directions built:** 3 (Cinematic / Editorial / Archive) + selector
**GitHub:** Banana-Daddy/andi-reiss · Live: https://banana-daddy.github.io/andi-reiss/

---

## Brand Synopsis

Andi Reiss is a genuine multi-hyphenate creative — a trans-media producer and documentary filmmaker whose practice also spans photography, FAA-certified drone cinematography, screenwriting, post-production and sound, illustration, and university-level teaching. His feature drama *Cargo* premiered at Cannes (2004) and opened the Taormina Film Festival; his work has travelled the festival circuit for two decades. He now runs a one-person production ecosystem out of Palm Springs, California, with a six-film documentary slate in development and a forthcoming 600-page travelogue, *Somewhere, America*, drawn from a five-month US road trip.

The brand voice is best captured by his own tagline — *"Proof that untreated curiosity can become a career"* — and the Guardian's read on his work: a "raw and honest approach... emphasising truth over artifice." He is witty, self-aware, and allergic to gloss. The existing WordPress site buries an extraordinary career under a stock theme and a deep dropdown menu; the redesign's job is to give that career a point of view.

**The strategic problem each direction solves:** the breadth reads as "unfocused" on the current site. Each direction picks a different organizing principle so the breadth becomes the *story*, not the noise.

---

## Design Decisions

### Direction 1: REEL (Cinematic / Dark) — `direction-cinematic.html`
- **Mood:** A filmmaker's title sequence — the hush before the lights come up.
- **Fonts:** Archivo (display, 800/900) + Space Grotesk (body/labels). *(skill recommendation)*
- **Colors:** `#0A0A0A` ink (bg) · `#F5F0E6` bone (text) · `#E0531F` ember (accent) · `#8A857C` ash (muted). *We replaced the skill's default blue CTA with a warm ember — justified by the filmmaker + desert-light context.*
- **Layout:** Full-bleed letterboxed cinematic hero → disciplines ticker → "Selected Frames" with a sprocket-holed filmstrip → split *Cargo* feature → 6-card production slate → *Somewhere, America* feature → practice grid → director's statement → end-credits contact.
- **Signature element:** Letterbox bars that animate in on load + a continuous **filmstrip marquee** of B&W documentary stills with sprocket-hole framing, plus a live film **timecode** in the hero.
- **Sells:** The documentary filmmaker.

### Direction 2: DISPATCH (Editorial / Print) — `direction-editorial.html`
- **Mood:** A Sunday broadsheet feature on a curious man — newsprint, datelines, bylines.
- **Fonts:** Libre Bodoni (display serif) + Public Sans (body) + Space Mono (metadata/kickers). *(skill recommendation)*
- **Colors:** `#F7F3EA` paper (bg) · `#16130F` ink · `#B23A1E` journalistic red (accent) · `#6E665A` warm gray.
- **Layout:** Masthead nameplate + dateline + headline ticker → two-column lead article with drop cap + lead photo → giant Bodoni pull-quote (Guardian) → "The Slate" 3-col → dark "Photo Essay" masonry → "Somewhere, America" feature → credentials row → "Write to the editor" contact.
- **Signature element:** Full **newspaper masthead** ("PALM SPRINGS, CALIF. · EST. 1992 · VOL. XXXII") with the Guardian quote set as an oversized italic pull-quote; drop caps + column rules.
- **Sells:** The author / journalist / photographer.

### Direction 3: INDEX (Brutalist / Archive) — `direction-archive.html`
- **Mood:** A field catalog of a restless mind — terminal-raw, every discipline logged like a manifest.
- **Fonts:** Space Mono (structure/body) + Public Sans (display headlines). *(skill recommendation; sans added for large-headline legibility)*
- **Colors:** `#EAE8E1` off-white (bg) · `#111110` ink · `#FF4D00` hazard orange (accent — an FAA/drone/aviation nod) · `#6f6c64` muted.
- **Layout:** Top marquee ticker of all 14 hyphenates → header bar with live PST clock + GPS coords → "manifest" hero with a dossier sidebar (SUBJECT/ROLE/BASE/CERT/STATUS) → §01 expandable Disciplines index table → §02 Slate grid → §03 dark Dossier band → §04 "Open a Line" clickable-row contact.
- **Signature element:** The whole site is a **clickable manifest** — index rows expand on click to reveal detail + a thumbnail; live local clock; GPS coordinates (33.83°N 116.54°W); FAA Part 107 cert displayed like a document number.
- **Sells:** The breadth + the curiosity (the multi-hyphenate).
- **Logos used (Logo Search):** none required — no third-party brand logos in these layouts.

### 21st.dev Component Provenance

| Mockup section | 21st.dev component | Search query | Source file | What we borrowed |
|---|---|---|---|---|
| Cinematic hero | Hero with bg video (DarkProjectHero) | cinematic fullscreen hero | 21st-sources/hero-cinematic-bgvideo.tsx | Full-bleed media + dark scrim, bottom-anchored oversized headline, animated entrance |
| Cinematic filmstrip | Image Gallery (expanding panels) | masonry gallery hover | 21st-sources/gallery-expanding-panels.tsx | Hover grayscale→colour reveal; horizontal panel rhythm → translated to sprocket filmstrip |
| Editorial photo essay | Masonry Grid | masonry gallery hover | 21st-sources/masonry-grid.tsx | `columns-*` + `break-inside-avoid` masonry; reveal stagger → CSS IntersectionObserver |
| Editorial/Archive type scale | Hero 04 / Hero 03 (oversized type) | editorial magazine hero / brutalist list index | (reference only) | Oversized tracking-tight display scale, kicker labels, side metadata, index-style nav |

---

## Content Inventory
- **Images:** 25 of Andi's own photographs, harvested from the WordPress CDN, web-optimized (max 1600px, q70–82) and stored locally in `images/` for a self-contained, fast build. Curated by eye from ~40 candidates; documentary/street/portrait/desert work. **Three candidates were excluded** because they carried *other photographers'* watermarks (Dawn Rothoff, Ryan Montgomery) or a charity's logo (Project Pearls) — never misattribute.
- **Key copy:** Tagline "Proof that untreated curiosity can become a career"; "Manager of the quiet tension between art and commerce"; Guardian quote "truth over artifice."
- **Links preserved:** andi@andireiss.com · +1 (760) 902 0497 · +44 (0) 777 571 3363 · linkedin.com/in/andi-reiss-285086173 · imdb.com/name/nm1633061.

## Share Preview
- **OG images:** real photography, cropped 1200×630 locally — `og.jpg` (Palm Springs sunset, selector) · `og-cinematic.jpg` (the dramatic car) · `og-editorial.jpg` (moonrise on the road) · `og-archive.jpg` (child at a microscope = "curiosity").
- **OG titles:** "Andi Reiss — Trans-Media Producer & Filmmaker" (selector/cinematic); "Andi Reiss — Documentarian, Author & Photographer" (editorial); "ANDI REISS / INDEX — A Manifest of Untreated Curiosity" (archive).
- **Favicon:** generated "AR" monogram (bone on ink with an ember bar) at 256/512 + 180 apple-touch.
- **Theme colors:** `#0A0A0A` (cinematic/selector) · `#F7F3EA` (editorial) · `#EAE8E1` (archive).
- **Sub-pages with their own OG:** all three directions.

## Image Generation Prompts
None generated — the client has a strong existing photo library, so no AI image generation was needed or appropriate (per image-accuracy rules, we use his real work, never fabricate the business). See `IMAGE_LOG.md`.

## Suggested Next Mockups
- **Full Photography gallery** — a filterable archive (portrait / street / documentary / desert / aerial) drawing on the 130+ images on his current site.
- **Film detail page** — a per-project template (synopsis, stills, festival laurels, trailer embed) for *Cargo* and the documentary slate.
- **"Somewhere, America" book microsite** — a pre-launch landing page for the travelogue with sample essays, a map of the route, and an email capture.
- **Teaching / courses page** — surfacing the online media courses + university work as a distinct offer.
- **Drone/aerial reel** — a dedicated showcase for the FAA Part 107 commercial work + SAR support angle.

## Production Notes
Build with Claude Code (Opus, high effort). Recommended stack: **Astro** or **Next.js** for a fast, content-driven portfolio with an image-heavy gallery — pull the real components back from `21st-sources/` (see HANDOFF MODE). A light CMS (Sanity/Astro content collections) would let Andi add films, photo sets, and book updates himself. Image pipeline should generate responsive `srcset` + WebP from his originals (his source files are large — several multi-MB). Consider a real video background on the cinematic hero (showreel) and lazy-loaded gallery pagination given the library size.

## Build Timing (approx.)
| Phase | Duration |
|---|---|
| Step 1: READ (site + sub-pages, image harvest) | ~4m |
| Step 2: DIRECTION (skill design systems + 21st.dev inspiration) | ~3m |
| Image curation (download, eyeball ~40, optimize 25, OG + favicon) | ~6m |
| Step 3: BUILD (3 directions + selector) | ~12m |
| Step 4: VERIFY (preview, mobile, interactions) | ~5m |
| Step 5–6: BRIEF + PUBLISH | ~3m |
