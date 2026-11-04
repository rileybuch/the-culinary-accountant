# The Culinary Accountant

Marketing site for The Culinary Accountant, custom cookies, cupcakes and treats in Charlotte, NC.
Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages from `main`.

## Development

```bash
npm ci
npm run dev      # local dev server
npm run build    # production build into dist/
```

## Editing content

All customer-facing content lives in `src/data/site.ts`: business copy, the gallery,
offerings, occasions, ordering steps and contact details. Components only handle layout.

- **Adding a photo:** drop the file in `src/assets/gallery/`, import it at the top of
  `site.ts` and add an entry to `gallery`. Astro resizes and converts it to AVIF/WebP at
  build time, so camera originals can be committed as-is.
- **Adding contact details:** fill in `contact.email`, `contact.phone` or
  `contact.orderFormUrl`. Empty fields are hidden. Setting `orderFormUrl` switches every
  "Message us on Instagram" button to point at the form instead.
