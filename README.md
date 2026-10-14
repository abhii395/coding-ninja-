# Coding Ninjas — React + Tailwind CSS Clone

A responsive recreation of [codingninjas.com](https://www.codingninjas.com/) built with **React 19**, **Vite 8**, and **Tailwind CSS 3.4**.

> **Learning project only.** This reproduces the public site's layout, section structure, and
> design language for educational purposes. It is not affiliated with Coding Ninjas, and the
> brand name, logo, and imagery remain the property of Sunrise Mentors Pvt. Ltd. — do not deploy
> this commercially.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script          | What it does                                            |
| --------------- | ------------------------------------------------------- |
| `npm run dev`   | Dev server with HMR, bound to `0.0.0.0:5173`            |
| `npm run build` | Production build to `dist/`                             |
| `npm run preview` | Serve the production build                            |
| `npm run lint`  | oxlint over `src/`                                      |
| `npm run smoke` | Server-renders `<App />` and asserts 30 content checks  |

---

## Page sections (top → bottom)

| # | Component | Section |
| - | --------- | ------- |
| 1 | `Navbar` | Sticky header, utility strip, mega-menu dropdown, mobile drawer |
| 2 | `Hero` | Headline, CTA pair, AI-tools logo marquee, wave divider |
| 3 | `CourseFinder` | Validated form → loading → recommended course |
| 4 | `ExploreCourses` | Audience tabs, category pills, scrollable course rail |
| 5 | `ProjectsMarquee` | Infinite project-card marquee |
| 6 | `AIInfused` | Curriculum features + image |
| 7 | `NextGenLearning` | Doubt support / interview prep cards |
| 8 | `NineYears` | Founder quote, pillars, career support |
| 9 | `Testimonials` | Featured quote with thumbnail switcher |
| 10 | `TenXClub` | Community perks + speaker marquee |
| 11 | `CareerCTA` | Conversion band with stat tiles |
| 12 | `InTheNews` | Feature card + press list |
| 13 | `TrustedBy` | Ratings, accreditations, partner chips |
| 14 | `Footer` | Contact, link columns, accordion, payments, socials |
| — | `FloatingBar` | Sticky course/call/back-to-top actions |

---

## Responsive strategy

Breakpoints follow Tailwind's defaults: **base (mobile) → `sm` 640px → `md` 768px → `lg` 1024px**.
Mobile-first throughout — base styles are the phone layout, and each breakpoint layers on top.

| Area | Mobile (< 640px) | Desktop (≥ 1024px) |
| --- | --- | --- |
| Nav | Hamburger → slide-in drawer, scroll-locked body | Mega-menu dropdown, inline links |
| Hero | Stacked, full-width CTAs, 34px headline | Centered column, side-by-side CTAs, 62px |
| Course finder | Single column, result panel below form | 1.15fr / 0.85fr split with live result panel |
| Course rail | Horizontal swipe with snap points | Arrow-button rail navigation |
| Content grids | 1 column | 2–4 columns |

Other responsive details:

- **`cn-shell`** container caps width at 1240px with fluid padding (`px-4 → px-6 → px-8`).
- **Scroll-lock** on the body while the mobile drawer is open.
- **`no-scrollbar`** hides scrollbars on horizontal rails; `thin-scrollbar` styles them where visible.
- **`mask-fade-x`** fades marquee edges instead of hard-clipping.
- **`prefers-reduced-motion`** disables marquee animation entirely.
- Marquees use a 3× copy of the track translating `-33.3333%`, so the loop is seamless at any width.
- Body overflow is locked only while the drawer is mounted, and cleaned up on unmount.

---

## Structure

```
src/
├── App.jsx                 # section composition order
├── smoke.jsx               # SSR content assertions (npm run smoke)
├── data/content.js         # all copy, courses, links, image URLs
└── components/
    ├── Icons.jsx           # Logo + hand-rolled brand SVGs
    ├── Marquee.jsx         # reusable infinite-scroll wrapper
    └── ...13 sections
```

Design tokens (brand orange `ninja`, neutral `ink`, radial backgrounds, shadows, keyframes) live in
`tailwind.config.js`; shared component classes (`cn-btn-primary`, `cn-card`, `cn-field`, …) live in
`src/index.css` under `@layer components`.

Images are hotlinked from the live `files.codingninjas.in` CDN, so they need network access to load.
