# VideoMDM Project Page

Live at: **https://videomdm.github.io**

Academic project page for _VideoMDM: Towards 3D Human Motion Generation From 2D Supervision_  
(Amir Mann, Gal Harari, Merav Keidar, Or Litany — Technion / NVIDIA)

---

## Repository structure

```
(root)
├── index.html                  — main project page
├── VideoMDM.pdf                — paper PDF (update when revised)
├── favicon.svg                 — purple "V" favicon
├── static/
│   ├── css/style.css           — all main-page styles
│   └── js/main.js              — lazy-load logic for comparison table videos
├── supplementary/
│   └── index.html              — supplementary viewer (self-contained, dark→light theme)
├── figures/
│   ├── method.png              — full-width training pipeline figure
│   └── overparameterized_loss.png — ray-projection illustration (65% width, centered)
└── videos/
    ├── Fit3D/
    │   ├── ours/               — VideoMDM generations (20 samples)
    │   ├── ours_pnp/           — VideoMDM + PnP camera (20 samples)
    │   ├── wham_lift/          — WHAM lifter baseline (20 samples)
    │   ├── fit3d_mdm_on_wham/  — MDM trained on WHAM lifts (20 samples)
    │   ├── fit3d_mdm_on_mvlift/— MDM trained on MVLift (20 samples)
    │   └── mvlift/             — MVLift baseline (20 samples)
    ├── HumanML/
    │   ├── ours_mvlift/        — VideoMDM (MVLift teacher, 20 samples)
    │   ├── ours_mvlift_PNP/    — VideoMDM + PnP (20 samples)
    │   ├── mdm_on_mvlift/      — MDM on MVLift (20 samples)
    │   └── mdm_on_motionbert/  — MDM on MotionBERT (20 samples)
    └── NBA/
        ├── videomdm/           — VideoMDM (10 samples, result_0..9.mp4)
        └── mas/                — MAS baseline (10 samples)
```

---

## Page sections

| Section | Notes |
|---|---|
| Header | Title, authors, affiliation, nav buttons |
| Hero | 2×2 autoplay grid — Fit3D sample01/19, HumanML sample03/06 |
| Abstract | Verbatim from paper |
| Stat cards | FID 0.88 · 2× MPJPE · 64% preference |
| Method | One paragraph + `method.png` + `overparameterized_loss.png` (65% centered) |
| HumanML results | Comparison table: MDM on MVLift vs VideoMDM — samples 03, 06 |
| Fit3D results | Comparison table: WHAM Lift · MDM on WHAM · VideoMDM — samples 07, 16, 06 |
| Supplementary link | CTA → `supplementary/index.html` |
| BibTeX | Plain `@article` block, no journal field until arXiv is up |
| Footer | © line + last-updated date |

---

## How to update content

### When the arXiv preprint goes live
In `index.html`, find the arXiv button and:
1. Change `class="btn disabled"` → `class="btn"`
2. Remove `aria-disabled="true" tabindex="-1"`
3. Add `href="https://arxiv.org/abs/XXXX.XXXXX" target="_blank"`
4. Do the same in `supplementary/index.html`
5. Update the BibTeX block — add `journal = {arXiv preprint arXiv:XXXX.XXXXX},`

### When the code repo is released
Same steps as above for the Code button, pointing to the GitHub repo URL.

### When the paper is accepted
Add a venue badge below the title in `index.html` (e.g. `<span class="venue-badge">NeurIPS 2026</span>`).  
**Do not add this before official acceptance notification.**

### Updating author personal page links
In `index.html`, find the `<p class="authors">` block. Replace `href="#"` with the correct URL for each author.

### Updating the paper PDF
Replace `VideoMDM.pdf` in the repo root. No HTML changes needed.

### Updating the last-modified date
In `index.html`, find the footer line containing `Last updated:` and update the date string.

---

## Supplementary viewer

`supplementary/index.html` is a self-contained single-file viewer. It uses the same light theme, Inter font, and accent color as the main page.

**Tabs:** Fit3D (default) · HumanML · NBA  
**Features:** sample navigation (← →), direct index input, sync-play (starts active on load), keyboard arrow keys  
**Method order:** Ours always listed first, then Ours (PnP), then baselines  

Video paths are relative: `../videos/<Dataset>/<method>/sampleNN.mp4` for Fit3D/HumanML, and `../videos/NBA/<method>/result_N.mp4` for NBA.

---

## Technical notes

- **Hero videos** use `autoplay muted loop playsinline` directly on `<video>` — no lazy-loading needed since they are in the initial viewport.
- **Comparison table videos** use `data-src` lazy-loading via `IntersectionObserver` (`static/js/main.js`) with a 200px root margin. They only load when scrolled near.
- **Figures** are PNG (converted from PDF source files). `method.png` is full-width; `overparameterized_loss.png` is 65% width, centered, with a full-width caption.
- **Responsive breakpoints:** hero/stat grids collapse to 1-column at 640px; comparison tables become horizontally scrollable.
- **No build step** — pure HTML/CSS/JS, served directly by GitHub Pages from the `main` branch root.

---

## Deployment

Hosted via GitHub Pages on the `videomdm` organization: https://github.com/videomdm/videomdm.github.io  
Source: `main` branch, root folder.  
Changes go live within ~1 minute of pushing to `main`.
