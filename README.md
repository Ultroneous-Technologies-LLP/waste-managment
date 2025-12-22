# Waste Management — Waste Management Landing Page 🚮

**Live demo:** <!-- left empty on purpose -->

A responsive marketing landing page for **Waste Management**, focused on waste management services, recycling programs, and community outreach. Built with the Next.js App Router and TypeScript, the site showcases services, cities covered, impact metrics, and calls-to-action like "Request a pickup".

---

## Features ✅

- Fully responsive marketing landing page for waste-management services
- Sections include: Hero, Services, Cities Covered, Our Process, Impact / Driving Impact (animated numbers), FAQ, Our Achievements and Contact / Request a pickup CTA
- Content-driven pages using JSON under `src/content/` (easy to update copy and lists)
- Reusable, accessible components (buttons, containers, icons, fallback images)
- Optimized images and static assets in `public/assets/`
- SEO-friendly metadata (robots / metadata entries are used in the app)
- Linted and formatted codebase with ESLint, Prettier and Husky

---

## What this project contains 🔎

- A landing site template tailored to waste-management companies (service pages, CTA for pickups, cities list, sustainability messaging)
- Content files: `src/content/home-page-data.json` and `src/content/layout.json` control copy and links used across the site
- Components for building the page: `src/components/home/*` (AboutUs, CitiesWeCovered, DrivingImpact, FAQ, etc.)

---

## Tech Stack 🔧

- Next.js (App Router) + TypeScript
- React 19
- Tailwind CSS
- Turbopack for local dev
- Netlify (configured via `@netlify/plugin-nextjs`) for deployment
- Husky, commitlint, lint-staged, ESLint, Prettier for developer experience

---

## Quick Start — Local Development 🚀

1. Install dependencies:

```bash
npm ci
# or
pnpm install
# or
yarn
```

2. Run the development server:

```bash
npm run dev
# then open http://localhost:3000
```

3. Build for production:

```bash
npm run build
npm run start
```

4. Lint & format:

```bash
npm run lint
npm run format
```

---

## Environment Variables ⚠️

No environment variables are required for the static/public parts of the site.
If you later add server-side features (contact form, email notifications), add a `.env` file with values similar to:

```env
EMAIL_USER=your@example.com
EMAIL_PASS=supersecret
EMAIL_TO=recipient@example.com
```

---

## Deployment

This project is ready to deploy on platforms that support Next.js; Netlify is configured via `netlify.toml` and `NETLIFY.md`.

Manual deploy (Netlify CLI):

```bash
npm ci
npm run build
# (install netlify cli if needed)
npm i -g netlify-cli
netlify deploy --dir=. --prod
```

> Live demo: (Not set yet)

---

## Project Structure ✨

- `src/app/` — App Router pages & route handlers
- `src/components/home/` — Home page components (AboutUs, CitiesWeCovered, DrivingImpact, FAQ, etc.)
- `src/components/common/` — shared UI primitives (Button, Container, Title, FallBackImage)
- `src/content/` — JSON data powering pages
- `public/assets/` — images and static assets
- `src/styles/` — Tailwind + global styles

---

## Contributing

Contributions welcome — small improvements and bug fixes are helpful. Suggested workflow:

1. Fork → create a branch → push changes → open a PR
2. Run `npm run lint` and `npm run format` before committing
3. Use conventional commits (commitlint + Husky enforce this)

I can add a PR template, issue templates, or a CI workflow on request.

---

## License

This repository does not currently include a `LICENSE` file. Add a license if you plan to publish or open-source the project.

---

Extras I can add on request:

- Badges (build / deploy / license)
- A homepage screenshot
- `CONTRIBUTING.md` or GitHub Actions CI for auto-builds and checks

Tell me which of these you want and I will apply the changes (no commits will be made until you ask).
