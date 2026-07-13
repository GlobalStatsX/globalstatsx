// Shared OG-card element tree (Satori format: { type, props }). Used by BOTH the
// Edge function (api/og.tsx via @vercel/og) and the local render test, so what we
// preview is exactly what ships. No JSX/React — plain objects.

// Icon path `d` strings — identical to the hero (viewBox 0 0 24 24).
export const ICON_PATHS = {
  x: 'M17.53 3H20.5l-6.48 7.4L21.75 21h-5.97l-4.67-6.1L5.74 21H2.77l6.93-7.92L2.25 3h6.12l4.22 5.58L17.53 3zm-1.05 16.2h1.65L7.6 4.7H5.83l10.65 14.5z',
  instagram: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.36 2.67.94 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.3 1.46-.72 2.12-1.38.66-.66 1.08-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.3-.79-.72-1.46-1.38-2.12-.66-.66-1.33-1.08-2.12-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0M12 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8M18.41 4.15a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88',
  facebook: 'M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.3-.04-1.3-.13-2.46-.13-2.43 0-4.1 1.48-4.1 4.21v2.32H7.7V13h2.74v8h3.06z',
  threads: 'M16.93 11.13c-.09-.04-.18-.08-.27-.12-.16-2.93-1.76-4.6-4.45-4.62h-.04c-1.6 0-2.94.69-3.76 1.94l1.48 1.02c.61-.93 1.57-1.13 2.28-1.13h.03c.88.01 1.55.27 1.98.77.31.36.52.86.63 1.49a13.5 13.5 0 0 0-2.6-.13c-2.62.15-4.3 1.68-4.19 3.8.06 1.08.59 2 1.51 2.6.78.5 1.78.74 2.82.69 1.37-.08 2.45-.6 3.2-1.56.57-.72.93-1.66 1.09-2.84.66.4 1.15.92 1.42 1.55.46 1.07.49 2.82-.94 4.24-1.25 1.25-2.76 1.79-5.04 1.81-2.53-.02-4.45-.83-5.69-2.42C5.7 15.95 5.1 13.9 5.08 12c.02-1.9.62-3.95 1.82-5.49C8.14 4.92 10.06 4.1 12.6 4.09c2.55.02 4.4.85 5.49 2.46.54.79.94 1.79 1.21 2.95l1.74-.46c-.32-1.4-.82-2.62-1.51-3.62C18.62 3.3 16.3 2.18 12.61 2.16h-.02C8.9 2.18 6.6 3.3 5.16 5.47 3.88 7.4 3.22 10.08 3.2 11.99v.02c.02 1.91.68 4.59 1.96 6.52C6.6 20.7 8.9 21.82 12.59 21.84h.02c3.28-.02 5.59-.88 7.49-2.79 2.49-2.49 2.41-5.61 1.59-7.53-.59-1.38-1.71-2.5-3.24-3.24-.31-.15-.34-.16-.52-.15zm-4.59 4.92c-1.15.07-2.35-.45-2.4-1.53-.04-.8.57-1.7 2.47-1.81.22-.01.43-.02.64-.02.69 0 1.33.07 1.92.2-.22 2.74-1.51 2.9-2.63 2.96z',
  tiktok: 'M21 8.5a6.3 6.3 0 0 1-3.77-1.26v6.94A5.7 5.7 0 1 1 11.6 8.55v2.94a2.8 2.8 0 1 0 1.96 2.67V2h2.95a3.4 3.4 0 0 0 .05.62 3.4 3.4 0 0 0 1.5 2.24A3.4 3.4 0 0 0 21 5.6V8.5z',
};

// Short-count formatting — MUST match the hero's compact() (33K / 33.1K / 1K …).
export function short(n) {
  if (n < 1000) return String(Math.round(n));
  const r = Math.round((n / 1000) * 10) / 10;
  return (Number.isInteger(r) ? r : r.toFixed(1)) + 'K';
}
// Total grouping — matches the hero's withComma() (105,800).
export function withComma(n) {
  return Math.round(n).toLocaleString('en-US');
}

// tiny hyperscript for Satori objects
const h = (type, props = {}, children) => ({ type, props: children === undefined ? props : { ...props, children } });
const icon = (key, size) => h('svg', { width: size, height: size, viewBox: '0 0 24 24' },
  h('path', { d: ICON_PATHS[key], fill: '#ffffff' }));

/** Build the full 1200x630 card element tree. */
export function buildCard(platforms) {
  const total = platforms.reduce((s, p) => s + (p.count || 0), 0);

  const platformCell = (p) => h('div', {
    style: { display: 'flex', flexDirection: 'column', alignItems: 'center', width: 190 },
  }, [
    h('div', { style: { display: 'flex', width: 62, height: 62, borderRadius: 31, alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.16)' } }, icon(p.key, 30)),
    h('div', { style: { display: 'flex', marginTop: 16, fontSize: 40, fontWeight: 800, color: '#ffffff' } }, short(p.count)),
    h('div', { style: { display: 'flex', marginTop: 6, fontSize: 17, fontWeight: 600, letterSpacing: 2, color: 'rgba(255,255,255,0.5)' } }, p.label.toUpperCase()),
  ]);

  return h('div', {
    style: {
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
      width: 1200, height: 630, padding: '56px 60px',
      backgroundColor: '#0d0812', color: '#ffffff', fontFamily: 'Poppins', position: 'relative',
      backgroundImage: 'linear-gradient(180deg, #0d0812 0%, #190d1f 30%, #34172e 55%, #6a2d37 76%, #b0512f 100%)',
    },
  }, [
    // horizon glow near the lower portion (like the hero)
    h('div', { style: { position: 'absolute', bottom: -70, left: 150, width: 900, height: 320, background: 'radial-gradient(50% 100% at 50% 100%, rgba(248,168,96,0.55) 0%, rgba(216,112,63,0.22) 42%, rgba(216,112,63,0) 72%)' } }),
    // a few star specks (upper area)
    h('div', { style: { position: 'absolute', top: 60, left: 210, width: 3, height: 3, borderRadius: 2, background: '#fff', opacity: 0.7 } }),
    h('div', { style: { position: 'absolute', top: 92, left: 940, width: 2, height: 2, borderRadius: 2, background: '#fff', opacity: 0.6 } }),
    h('div', { style: { position: 'absolute', top: 130, left: 120, width: 2, height: 2, borderRadius: 2, background: '#fff', opacity: 0.5 } }),
    h('div', { style: { position: 'absolute', top: 78, left: 1020, width: 3, height: 3, borderRadius: 2, background: '#fff', opacity: 0.55 } }),
    h('div', { style: { position: 'absolute', top: 150, left: 700, width: 2, height: 2, borderRadius: 2, background: '#fff', opacity: 0.5 } }),

    // wordmark
    h('div', { style: { display: 'flex', fontSize: 30, fontWeight: 600, letterSpacing: 14, color: 'rgba(255,255,255,0.86)' } }, 'GLOBALSTATSX'),

    // platform row
    h('div', { style: { display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 44 } }, platforms.map(platformCell)),

    // focal: label + big total
    h('div', { style: { display: 'flex', marginTop: 40, fontSize: 22, fontWeight: 600, letterSpacing: 6, color: 'rgba(255,255,255,0.55)' } }, 'FOLLOWERS ACROSS PLATFORMS'),
    h('div', {
      style: {
        display: 'flex', marginTop: 6, fontSize: 168, fontWeight: 800, letterSpacing: -2, lineHeight: 1,
        backgroundImage: 'linear-gradient(180deg, #ffe6c2 0%, #f6a95f 52%, #d8703f 100%)',
        backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent',
      },
    }, withComma(total)),
  ]);
}
