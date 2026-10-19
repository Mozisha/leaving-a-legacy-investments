# Leaving a Legacy Investments

Rebuild of [leavingalegacyinvestments.com](https://leavingalegacyinvestments.com) (originally WordPress) using Next.js.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **React 19**

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── (marketing)/          # Route group for public pages (no URL prefix)
│   │   ├── layout.tsx        # Shared header + footer
│   │   ├── page.tsx          # Home (/)
│   │   ├── about/page.tsx    # /about
│   │   ├── services/page.tsx # /services
│   │   └── contact/page.tsx # /contact
│   ├── layout.tsx            # Root layout (fonts, metadata)
│   └── globals.css           # Tailwind import + theme tokens
├── components/
│   ├── layout/               # Header, Footer, MobileNav
│   └── ui/                   # Reusable UI (Button, Container)
└── lib/
    ├── site.ts               # Site config, navigation, contact details
    └── utils.ts               # Helpers (cn)
```

## Notes

- Update business details, navigation links, and contact info in `src/lib/site.ts`.
- Pages currently contain placeholder content. They will be rebuilt to match the original site's screenshots.
```
