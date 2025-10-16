# HQ Kitchen

Static site for the HQ Kitchen home cooking business. Built with Next.js and exported to static HTML for GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production Build (static export)

```bash
npm run build
```

The static site is generated in `out/`.

## GitHub Pages

This project is configured to deploy to GitHub Pages using GitHub Actions. Two scenarios:

- Project pages (recommended): repository like `username/hqkitchen`. The workflow sets `BASE_PATH=/<repo>` automatically.
- User/organization site (`username.github.io`): set `BASE_PATH` to empty.

If you need to override, set `BASE_PATH` in the workflow or locally when building:

```bash
BASE_PATH=/hqkitchen npm run build
```

## Notes

- `next.config.js` uses `output: 'export'` and `images.unoptimized` for compat with GitHub Pages.
- Navigation uses `basePath` so links work correctly under a subpath.

