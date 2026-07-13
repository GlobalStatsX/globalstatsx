// Dynamic OG/social-share image (1200x630), Edge runtime, via @vercel/og.
// Reads the SAME data/followers.json the hero is built from, so they never
// disagree. The element tree lives in lib/ogCard.js (shared with the local
// render test). Cache-busting is handled by the ?v=<hash> in the page meta,
// so this image itself is served with a long immutable cache.
import { ImageResponse } from '@vercel/og';
import { buildCard } from '../lib/ogCard.js';
import followers from '../data/followers.json';

export const config = { runtime: 'edge' };

// Bundled brand fonts (Vercel includes assets referenced via new URL(import.meta.url)).
const semibold = fetch(new URL('../assets/fonts/Poppins-SemiBold.ttf', import.meta.url)).then((r) => r.arrayBuffer());
const extrabold = fetch(new URL('../assets/fonts/Poppins-ExtraBold.ttf', import.meta.url)).then((r) => r.arrayBuffer());

export default async function handler(): Promise<Response> {
  const [sb, eb] = await Promise.all([semibold, extrabold]);
  return new ImageResponse(buildCard((followers as any).platforms) as any, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Poppins', data: sb, weight: 600, style: 'normal' },
      { name: 'Poppins', data: eb, weight: 800, style: 'normal' },
    ],
    headers: {
      'content-type': 'image/png',
      'cache-control': 'public, immutable, no-transform, max-age=31536000',
    },
  });
}
