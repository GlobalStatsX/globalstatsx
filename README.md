# GlobalStatsX — Coming Soon

A lightweight, single-page **"Coming Soon"** placeholder for **globalstatsx.com**.

- Pure static **HTML + CSS** — no build step, no JS, no backend, no tracking.
- The space / Earth-from-orbit backdrop is **rendered entirely in CSS** (gradients +
  a CSS starfield), so there are **no third-party image assets and no copyright/licensing
  concerns**.
- Blinking cursor is a CSS animation; respects `prefers-reduced-motion`.
- Fully responsive (mobile → desktop), loads instantly.

## Structure
- `index.html` — the entire page (inline CSS + inline SVG social icons + favicon data-URI).

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .      # or: python -m http.server
```

## Social links
Set on the icons in `index.html`:

| Network | URL |
|---|---|
| X (Twitter) | https://x.com/GlobalStatsX |
| Instagram | https://www.instagram.com/globalstatsx/ |
| Facebook | https://www.facebook.com/GlobalstatsX/ |
| YouTube | https://www.youtube.com/@GlobalStatsX  *(verify — best-guess handle)* |
| TikTok | https://www.tiktok.com/@globalstatsx |

> The X / Instagram / Facebook / TikTok URLs reuse GlobalStatsX's known handles from the
> sister sites. **Confirm the YouTube channel URL** — it's a best guess; update it in
> `index.html` if different.

## Deploy (later — not done yet)
1. Import this repo into **Vercel** (framework preset: *Other* / static — Vercel serves
   `index.html` directly; no config needed).
2. Add **globalstatsx.com** as a domain in the Vercel project.
3. Point the domain via **Namecheap nameservers** to Vercel (moving it off Cloudflare),
   per Vercel's domain instructions.
