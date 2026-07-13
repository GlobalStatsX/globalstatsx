// Deploy build step (Vercel `buildCommand`). Single source of truth =
// data/followers.json. This:
//   1. computes OG_VER = sha256(followers.json)[:8]  -> auto cache-bust
//   2. injects the follower COUNTS into the hero's SOCIALS array
//   3. injects OG_VER into the og:image / twitter:image meta URLs
//   4. writes the static site to dist/ (served by Vercel; /api/* stays functions)
// When Bora edits a count, the hash changes -> og:image URL changes -> social
// platforms re-fetch. Bora never touches a version string.
import fs from 'node:fs';
import crypto from 'node:crypto';

const raw = fs.readFileSync('data/followers.json');
const OG_VER = crypto.createHash('sha256').update(raw).digest('hex').slice(0, 8);
const data = JSON.parse(raw.toString());

// URLs live with the hero (they never change); counts come from followers.json.
const URLS = {
  x: 'https://x.com/GlobalStatsX',
  instagram: 'https://instagram.com/GlobalStatsX',
  facebook: 'https://facebook.com/GlobalStatsX',
  threads: 'https://threads.net/@GlobalStatsX',
  tiktok: 'https://tiktok.com/@GlobalStatsX',
};
const SOCIALS = data.platforms.map((p) => ({ key: p.key, name: p.label, url: URLS[p.key], followers: p.count }));

let html = fs.readFileSync('index.html', 'utf8');
html = html.split('__OG_VER__').join(OG_VER);
html = html.replace(
  /const SOCIALS = \[[\s\S]*?\]; \/\/__SOCIALS_END__/,
  'const SOCIALS = ' + JSON.stringify(SOCIALS, null, 2).replace(/\n/g, '\n    ') + ';',
);

fs.rmSync('dist', { recursive: true, force: true });
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', html);
for (const f of ['assets', 'favicon.ico', 'robots.txt', 'sitemap.xml', 'site.webmanifest']) {
  if (fs.existsSync(f)) fs.cpSync(f, 'dist/' + f, { recursive: true });
}

const total = data.platforms.reduce((s, p) => s + (p.count || 0), 0);
console.log(`[build] OG_VER=${OG_VER} total=${total.toLocaleString('en-US')} -> dist/ built`);
