# Wesley Kenyon Site

A responsive, dependency-free personal site for Wesley Kenyon built with plain HTML, CSS, and a small amount of vanilla JavaScript.

## Overview

The site is a single-page static overview designed to feel restrained, clear, and professional:

- simple introductory hero
- technologies and areas of experience
- selected project summaries
- a short note on working style and approach
- clear contact links
- auto dark/light support with a manual toggle

## Files

- `index.html` contains the semantic page structure and content.
- `styles.css` contains the full responsive design system and layout rules.
- `script.js` adds theme persistence and the current year.

## Local preview

Because this is a plain static site, any simple file server works.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

This site can be deployed to any static host:

- GitHub Pages
- Netlify
- Vercel static hosting
- CloudFront + S3

No build step is required. Deploy the repository contents as-is.

## Design notes

- No framework or package dependencies.
- Responsive layout for mobile, tablet, and desktop.
- Accessible contrast in both light and dark themes.
- Minimal, understated visual treatment.
- Clean semantic sections for straightforward maintenance.

## Suggested checks

For a plain static site, the practical checks are:

```bash
python3 -m http.server 8000
curl -I http://localhost:8000/
```

If `tidy` is available in your environment, you can also run:

```bash
tidy -qe index.html
```

## License

This repository does not currently define a license.
