# Megabros Enterprise Website

A responsive, conversion-focused gadget storefront for Megabros Enterprise in Computer Village, Ikeja.

## What the site includes

- A verified iPhone photo catalog built from the repository's real product images
- Generation filters, model search and paginated product loading
- Product photo galleries with keyboard-accessible modal controls
- Pre-filled WhatsApp enquiries for every product
- A gadget finder for Android phones, laptops, tablets and accessories
- Shop address, call, directions and delivery information
- Local-business structured data, social sharing metadata and responsive layouts

## Business details used

- **Address:** 11 Pepple Street, Computer Village, Ikeja, Lagos
- **Phone / WhatsApp:** +234 703 899 5759

Update these details consistently in `index.html` and `script.js` if they change.

## Editing the product catalog

Products are stored in the `products` array near the top of `script.js`. Each item has:

- `id`: unique URL-safe identifier
- `name`: customer-facing model name
- `generation`: filter group
- `label`: short product badge
- `description`: one-sentence summary
- `images`: paths to real product photos in the `images` folder

Prices are deliberately confirmed on WhatsApp because gadget prices and inventory can change.

## Run locally

No build step is required. Start any static web server from the repository root, for example:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment

The repository can be deployed directly to Netlify, GitHub Pages, Cloudflare Pages or any static host. Use the repository root as the publish directory; there is no build command.
