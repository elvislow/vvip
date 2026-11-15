# Source for the VVIP site (not deployed)

1. `python3 _source/build.py` combines template CSS + parts into `_source/src-index.html` (copy it to a `src/` folder with images/, js/, fonts/).
2. `node _source/tools/prerender.js <out>` renders every page (EN + /zh/) into static HTML and writes sitemap.xml.
3. Copy the output to the repo root. `js/globe.js` is built from `tools/globe-entry.js` with esbuild (three + three-globe).
