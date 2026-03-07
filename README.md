# ~/sharjil/portfolio

> A personal portfolio that looks like a VS Code window — because why not?

![Next.js](https://img.shields.io/badge/Next.js_14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/status-live-4ade80?style=flat-square)

---

I got tired of the same bootstrap-style portfolio everyone has. Wanted something that actually feels like *me* — someone who spends most of their day inside a terminal or IDE. So I built the portfolio itself as one.

It's got a file explorer sidebar, tab navigation, a live terminal animation on the hero, syntax-highlighted code blocks throughout, and a blueprint grid background. Every section is a "file" you open.

---

## what's inside

```
sharjil@portfolio: ~/src $ ls -la
```

| File | What it is |
|---|---|
| `Terminal.sh` | Hero page — typewriter terminal with binary rain animation |
| `About.tsx` | Who I am, what I do, with a live `developer.ts` code block |
| `Projects.ts` | Card grid with click-to-open split-pane detail view |
| `Skills.json` | Interactive JSON tree + animated skill bars |
| `Education.tsx` | Degree info, CGPA bar, certifications with code previews |
| `Contact.tsx` | Form that updates a live code preview as you type |

---

## stack

- **Next.js 14** — App Router, server components where it makes sense
- **TypeScript** — strict mode, no `any` crimes
- **Tailwind CSS** — with some custom CSS for the blueprint grid and scanlines
- **Canvas API** — the binary rain animation on the hero is a raw canvas loop

No UI libraries. No component kits. Just hand-rolled components.

---

## running it locally

```bash
git clone https://github.com/MRGDFK/mrgdfk-dev-portfolio.git
cd mrgdfk-dev-portfolio
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000). The terminal animation kicks in on load.

For a production build:

```bash
npm run build
npm start
```

---

## project structure

```
src/
├── app/
│   ├── layout.tsx          # root layout, fonts, metadata
│   └── page.tsx            # the IDE shell — sidebar + panel + statusbar
├── components/
│   ├── TitleBar.tsx        # top window chrome with traffic lights
│   ├── Sidebar.tsx         # file explorer + source control panel
│   ├── MainPanel.tsx       # tab bar + renders active section
│   ├── StatusBar.tsx       # bottom bar with line count, branch, etc.
│   └── sections/
│       ├── TerminalHero.tsx
│       ├── About.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Education.tsx
│       └── Contact.tsx
└── styles/
    └── globals.css         # blueprint grid, scanlines, blink keyframe
```

---

## if you want to fork this

Feel free. A few things you'd want to change:

- **Your info** lives in each section file as a `const` at the top — name, bio, links, etc.
- **Projects** → edit the `projects` array in `Projects.tsx`
- **Skills** → edit `skillsData` in `Skills.tsx`
- **Profile photo** → drop a `profile.jpg` in `/public`
- **Project thumbnails** → drop `{id}.png` files in `/public/projects/`
- **Contact form** → the `handleSubmit` in `Contact.tsx` is wired for [Formspree](https://formspree.io) — just swap in your endpoint

---

## deploying

I use Vercel — it just works with Next.js.

```bash
npx vercel
```

Or connect the repo on [vercel.com](https://vercel.com) and it auto-deploys on every push to `main`.

---

## license

MIT — do whatever you want with it, just don't copy my personal info 😄

---

<div align="center">
  <sub>built with too much coffee and a love for dark themes — <a href="https://linkedin.com/in/sharjilskhan">@sharjilskhan</a></sub>
</div>
