/* Serve a folder like Vercel does: /a/ -> /a/index.html, /a -> 308 /a/, unknown -> 404.html */
const http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(process.argv[2]); const PORT = +process.argv[3] || 8790;
const T = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.webp': 'image/webp', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };
http.createServer((req, res) => {
  const u = decodeURIComponent(req.url.split('?')[0]);
  let f = path.join(ROOT, u);
  if (!f.startsWith(ROOT)) { res.writeHead(400); return res.end(); }
  if (fs.existsSync(f) && fs.statSync(f).isDirectory()) {
    if (!u.endsWith('/')) { res.writeHead(308, { Location: u + '/' + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '') }); return res.end(); }
    f = path.join(f, 'index.html');
  }
  if (!fs.existsSync(f)) { res.writeHead(404, { 'Content-Type': T['.html'] }); return fs.createReadStream(path.join(ROOT, '404.html')).pipe(res); }
  res.writeHead(200, { 'Content-Type': T[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(PORT, () => console.log('serving', ROOT, PORT));
