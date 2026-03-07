# Sharjil's Portfolio — Terminal + Blueprint IDE Theme

A unique developer portfolio built with **Next.js 14**, styled as an IDE workspace with terminal hero, file explorer, tabbed projects, JSON skills view, and a contact form.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Theme**: Blueprint/Cyan dark IDE aesthetic

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Main IDE shell
├── components/
│   ├── TitleBar.tsx     # Window chrome
│   ├── Sidebar.tsx      # File explorer
│   ├── MainPanel.tsx    # Tab bar + content
│   ├── StatusBar.tsx    # Bottom status
│   └── sections/
│       ├── TerminalHero.tsx   # ~/intro
│       ├── About.tsx          # ~/about
│       ├── Projects.tsx       # ~/projects
│       ├── Skills.tsx         # ~/skills
│       └── Contact.tsx        # ~/contact
└── styles/
    └── globals.css      # Blueprint grid + global styles
```

## Customization

- **Personal info**: Update `src/components/sections/About.tsx`
- **Projects**: Edit the `projects` array in `Projects.tsx`
- **Skills**: Edit `skillsData` in `Skills.tsx`
- **Contact form**: Wire up `Contact.tsx` to Formspree/EmailJS/your API

## Deployment

Deploy easily on [Vercel](https://vercel.com):

```bash
npx vercel
```
