import fs from 'fs';
import { feature } from 'topojson-client';
import { geoMercator, geoPath } from 'd3-geo';
const topo = JSON.parse(fs.readFileSync('node_modules/world-atlas/countries-50m.json'));
const all = feature(topo, topo.objects.countries).features;
const W = 520, H = 900;
// frame: lon 96.5..106, lat 0.6..20.6
const frame = { type: 'Feature', geometry: { type: 'MultiPoint', coordinates: [[96.8, 0.7], [105.6, 20.4]] } };
const proj = geoMercator().fitExtent([[10, 10], [W - 10, H - 10]], frame).clipExtent([[-5, -5], [W + 5, H + 5]]);
const path = geoPath(proj).digits(1);
const pick = (names) => all.filter((f) => names.includes(f.properties.name));
const clipBox = (d) => d; // svg viewBox clips
const main = pick(['Malaysia', 'Thailand']).map((f) => path(f)).join('');
const near = pick(['Myanmar', 'Laos', 'Cambodia', 'Vietnam', 'Singapore', 'Indonesia']).map((f) => path(f)).join('');
const cities = { kl: [101.687, 3.139], jb: [103.7414, 1.4927], bp: [102.9325, 1.8548], pg: [100.3288, 5.4141], bkk: [100.5018, 13.7563], hkt: [98.3923, 7.8804], cnx: [98.9853, 18.7883] };
const pts = Object.fromEntries(Object.entries(cities).map(([k, c]) => [k, proj(c).map((v) => +v.toFixed(1))]));
fs.writeFileSync('../parts/map-data.js', `const MAP = ${JSON.stringify({ W, H, main, near, pts })};\n`);
console.log(main.length, near.length, pts);
