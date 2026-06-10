# PROJECT NOTES — Naim Massoumian Coaching Website

## Status
FIRST VERSION COMPLETE — Ready for local preview and feedback.

## What Was Built
Full personal coaching website from scratch, bilingual (Spanish / English).

## Files
- `index.html` — Main page with all sections and bilingual data attributes
- `css/styles.css` — Full responsive stylesheet (mobile, tablet, desktop)
- `js/main.js` — Language toggle (ES/EN), mobile menu, nav scroll effect
- `images/` — Empty folder, ready for photo

## Sections
1. **Hero** — Name, tagline, CTA button, subtle background glow
2. **About** — Bio based on LinkedIn (COO 10+ years), placeholder for photo, stats
3. **Services** — 3 cards: individual coaching, team coaching, leadership transitions
4. **Approach** — Methodology + quote panel
5. **Contact** — Email + LinkedIn buttons
6. **Footer** — Name, subtitle, copyright

## Design Choices
- Colors: deep navy (#1a2332) + warm gold (#c9a96e) + off-white backgrounds
- Typography: Playfair Display (serif, elegant) + Inter (clean sans-serif)
- Bilingual toggle: saves preference in localStorage, switches all text on the page
- Mobile: hamburger menu, stacked layout, touch-friendly

## Pending / Next Steps
- [ ] Add professional photo to `images/` folder and update `index.html`
- [ ] Add photo path: change `about__photo-placeholder` to use `<img src="images/profile.jpg" alt="Naim Massoumian">`
- [ ] Review all Spanish and English texts — adjust if needed
- [ ] Add testimonials section (optional, when you have 2-3)
- [ ] Set up GitHub repository for GitHub Pages deployment
- [ ] Add favicon
- [ ] Consider adding a calendar booking link (Calendly etc.)

## Contact Info Used
- Email: naim.mg@evvohome.com
- LinkedIn: https://www.linkedin.com/in/naimmassoumian/

## Notes
- Photo placeholder shows "NM" initials — replace when photo is ready
- Language preference persists across browser sessions via localStorage
- All paths are relative — compatible with GitHub Pages
