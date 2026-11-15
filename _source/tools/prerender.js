/* Pre-render every page of the VVIP site into static HTML.
   Serves src/ with an SPA fallback, opens each route in headless Chrome,
   strips runtime-only bits and writes <out>/<route>/index.html. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { chromium } = require('/opt/npm-tools/node_modules/playwright');

const SRC = path.resolve(__dirname, '../src');
const OUT = path.resolve(process.argv[2] || path.join(__dirname, '../out'));
const BASE = 'https://vvip-five.vercel.app';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.json': 'application/json', '.txt': 'text/plain', '.xml': 'application/xml' };

const server = http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(SRC, u);
  if (!f.startsWith(SRC) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) f = path.join(SRC, 'index.html');
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
});

const SCEN = ['business', 'celebrity', 'high-value', 'events', 'cross-border', 'airport-transfers', 'city-alphard', 'charter', 'private-jet'];
const CITY = ['bodyguard-kuala-lumpur', 'bodyguard-johor-bahru', 'bodyguard-batu-pahat', 'bodyguard-penang', 'bodyguard-thailand'];
const ROUTES = ['/', '/services/', '/scenarios/', '/contact/', ...SCEN.map((s) => `/scenarios/${s}/`), ...CITY.map((c) => `/${c}/`)];

(async () => {
  await new Promise((r) => server.listen(8799, r));
  const browser = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  /* Third-party font CSS is not needed to capture markup */
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  const errors = [];
  const pages = [];
  for (const lang of ['en', 'zh']) {
    for (const r of [...ROUTES, '/__404__/']) {
      if (r === '/__404__/' && lang === 'zh') continue;
      const url = `http://localhost:8799${lang === 'zh' ? '/zh' : ''}${r}`;
      const p = await ctx.newPage();
      p.on('pageerror', (e) => errors.push(`${lang}${r}: ${e.message}`));
      await p.goto(url, { waitUntil: 'load' });
      await p.waitForTimeout(400);
      const html = await p.evaluate(() => {
        const d = document;
        /* keep only the page being shown */
        d.querySelectorAll('[data-page][hidden]').forEach((el) => el.remove());
        /* runtime-only things */
        d.querySelectorAll('canvas, .spot, .spot-glow, script[src*="globe.js"]').forEach((el) => el.remove());
        d.querySelectorAll('[data-globe]').forEach((el) => { el.classList.remove('on'); el.innerHTML = ''; });
        d.querySelectorAll('[data-map]').forEach((el) => el.classList.remove('in'));
        d.querySelectorAll('.rv.in').forEach((el) => el.classList.remove('in'));
        d.querySelectorAll('.page.is-entered, .page.is-entering').forEach((el) => el.classList.remove('is-entered', 'is-entering'));
        d.querySelectorAll('[style=""]').forEach((el) => el.removeAttribute('style'));
        d.documentElement.classList.remove('js');
        if (!d.documentElement.getAttribute('class')) d.documentElement.removeAttribute('class');
        d.body.style.removeProperty('overflow');
        if (!d.body.getAttribute('style')) d.body.removeAttribute('style');
        return '<!doctype html>\n' + d.documentElement.outerHTML;
      });
      const rel = r === '/__404__/' ? '404.html' : path.join(lang === 'zh' ? 'zh' : '', r, 'index.html');
      const file = path.join(OUT, rel);
      fs.mkdirSync(path.dirname(file), { recursive: true });
      fs.writeFileSync(file, html);
      if (r !== '/__404__/') pages.push({ lang, r });
      await p.close();
    }
  }
  /* sitemap with language alternates */
  const today = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((r) => {
    const en = BASE + r, zh = BASE + '/zh' + r;
    const alt = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="zh-Hans" href="${zh}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
    const pri = r === '/' ? '1.0' : r.startsWith('/bodyguard-') || r === '/services/' ? '0.9' : '0.7';
    return [en, zh].map((loc) => `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${pri}</priority>${alt}</url>`).join('\n');
  }).join('\n');
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`);
  console.log(`rendered ${pages.length} pages + 404`);
  console.log(errors.length ? errors.join('\n') : 'no page errors');
  await browser.close();
  server.close();
})();
