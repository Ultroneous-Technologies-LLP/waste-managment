# Netlify deployment notes

This project is configured to run on Netlify using the official Next.js Runtime (Netlify plugin).

## What I changed

- Added `netlify.toml` with the Next.js plugin configuration.
- Pinned `@netlify/plugin-nextjs` in `devDependencies` for reproducible builds.

## How to deploy (without linking the Git repo)

1. Install dependencies: `npm ci`
2. Build the project: `npm run build`
3. Install Netlify CLI (if not installed): `npm i -g netlify-cli`
4. Run a manual deploy with Netlify CLI:
   - `netlify deploy --dir=. --prod` (you may need to follow prompts and choose the site or create a new one)

Notes:

- Netlify handles Next.js builds using the runtime plugin; the build command (`npm run build`) will be executed and the plugin will create necessary runtime assets.
- If you prefer, you can compress the built repo and upload via Netlify's API/drag-and-drop, but using `netlify deploy` is recommended for full compatibility.
- If you want me to also add a CI workflow or a zip script for packaging, tell me and I can add it.
