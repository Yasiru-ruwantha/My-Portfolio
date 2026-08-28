# Portfolio

Personal portfolio site for Yasiru Premarathna, a BSc (Hons) Information Technology undergraduate at the University of Moratuwa, Sri Lanka.

Built with [Next.js](https://nextjs.org), [Tailwind CSS v4](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Contact form

The Contact section sends messages via [Web3Forms](https://web3forms.com). To enable it:

1. Copy `.env.local.example` to `.env.local`
2. Get a free access key at [web3forms.com](https://web3forms.com) and set it as `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

## Project structure

- `app/` — pages, layout, and global styles (Next.js App Router)
- `components/` — one component per section (navbar, hero, about, education, skills, projects, contact, footer)
- `lib/` — shared utilities
- `public/images/` — site images; `public/images/projects/` — project screenshots
