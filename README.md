# Documentation Site

A static documentation site built with Next.js and MDX, designed to be hosted on GitHub Pages.

## Features

- MDX support for writing documentation with React components
- Automatic navigation generation from MDX frontmatter
- Responsive design with basic styling
- Static export for GitHub Pages deployment

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to see your site.

## Writing Documentation

Place your MDX files in the `docs/` directory. Each MDX file should include frontmatter with:

```md
---
title: Your Page Title
desc: A brief description of the page
order: 1 (optional, for controlling navigation order)
---
```

## Building and Deploying

1. Build the static site:

```bash
npm run export
```

2. The site will be exported to the `out` directory

3. The GitHub Actions workflow will automatically deploy to GitHub Pages when you push to the main branch.

## Configuration

- `next.config.js` - Next.js and MDX configuration
- `lib/docs.ts` - Documentation processing utilities
- `pages/` - Next.js pages including the index and dynamic doc pages

## License

MIT
