# Image Generation Log — Andi Reiss

**No AI images were generated for this build. Total API cost: $0.00.**

The client (Andi Reiss) is a working documentary photographer with a deep, high-quality image library on his existing site. Per the image-accuracy rules, the right move is to use his real work, not fabricate atmospheric filler. All 25 images in `images/` are his own photographs, harvested from the WordPress CDN, web-optimized locally (sips, max 1600px, q70–82), and renamed descriptively.

## Curation
- ~40 candidates downloaded and reviewed by eye (Claude visual review only — no API QA needed since these are real, already-finished photographs).
- 25 selected and kept; spread across documentary, street, portrait, desert/travelogue, and atmosphere.
- **3 excluded for watermark/attribution reasons** (see `ACCURACY.md`): two carried other photographers' watermarks, one carried a charity's logo.

## Derived assets (sips, no API)
- `og.jpg`, `og-cinematic.jpg`, `og-editorial.jpg`, `og-archive.jpg` — 1200×630 crops from local photos.
- `favicon.png` (256), `favicon-512.png` (512), `apple-touch-icon.png` (180) — "AR" monogram generated with Python PIL (text render, no image API).

## If upgrades are wanted later
Andi could add an aerial/drone reel still or a fresh portrait. If any slot ever needs generation, follow the standard tier order (Grok → Gemini), but for this brand real photography will almost always beat generated filler.
