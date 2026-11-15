/* VVIP globe: dotted-country globe with arcs between the cities we cover.
   Built on three + three-globe, bundled by esbuild into one file (images/../js/globe.js). */
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { feature } from 'topojson-client';
import world from 'world-atlas/countries-110m.json';
import northKorea from './nk-50m.json';

/* The 110m North Korea outline trips the hexagon dot maker, so it uses the 50m outline instead */
const countries = feature(world, world.objects.countries).features
  .filter((f) => f.properties.name !== 'Antarctica')
  .map((f) => (f.properties.name === 'North Korea' ? northKorea : f));

const CITIES = {
  kl: [3.139, 101.687], jb: [1.4927, 103.7414], bp: [1.8548, 102.9325], pg: [5.4141, 100.3288],
  bkk: [13.7563, 100.5018], hkt: [7.8804, 98.3923], cnx: [18.7883, 98.9853],
};
const ROUTES = [
  ['kl', 'jb'], ['kl', 'bp'], ['kl', 'pg'], ['kl', 'bkk'], ['pg', 'hkt'], ['bkk', 'cnx'],
  ['bkk', 'hkt'], ['jb', 'bkk'], ['bp', 'jb'], ['pg', 'bkk'], ['kl', 'cnx'], ['jb', 'hkt'],
];

function mount(container, opts = {}) {
  const narrow = opts.narrow ?? window.innerWidth < 760;
  const still = opts.reduced ?? false;
  const steel = opts.steel || '#9dbbe0';
  const hi = opts.highlight || '#eef5ff';

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, narrow ? 1.25 : 1.75));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 1, 2000);
  camera.position.set(0, 0, opts.narrow ? 290 : 272);
  scene.add(new THREE.AmbientLight(0xbcd2ee, 0.9));
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(-300, 220, 400); scene.add(key);
  const rim = new THREE.PointLight(0x7fa3cf, 1.2, 0, 0); rim.position.set(260, -120, 200); scene.add(rim);

  const arcs = ROUTES.map(([a, b], i) => ({
    startLat: CITIES[a][0], startLng: CITIES[a][1], endLat: CITIES[b][0], endLng: CITIES[b][1],
    order: i,
  }));
  const points = Object.entries(CITIES).map(([k, [lat, lng]]) => ({ lat, lng, k }));

  const globe = new ThreeGlobe({ waitForGlobeReady: true, animateIn: !still })
    .hexPolygonsData(countries)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.6)
    .hexPolygonUseDots(true)
    .hexPolygonColor(() => 'rgba(157, 187, 224, 0.62)')
    .showAtmosphere(true)
    .atmosphereColor(steel)
    .atmosphereAltitude(0.16)
    .arcsData(arcs)
    .arcStartLat('startLat').arcStartLng('startLng').arcEndLat('endLat').arcEndLng('endLng')
    .arcColor(() => [steel, hi])
    .arcAltitude((d) => 0.06 + Math.hypot(d.endLat - d.startLat, d.endLng - d.startLng) * 0.012)
    .arcStroke(0.45)
    .arcDashLength(0.8)
    .arcDashGap(0.9)
    .arcDashInitialGap((d) => (d.order % 4) * 0.4)
    .arcDashAnimateTime(still ? 0 : 2600)
    .pointsData(points)
    .pointColor(() => hi)
    .pointAltitude(0.012)
    .pointRadius(0.45)
    .ringsData(still ? [] : points)
    .ringColor(() => (t) => `rgba(207, 222, 240, ${1 - t})`)
    .ringMaxRadius(2.4)
    .ringPropagationSpeed(2.2)
    .ringRepeatPeriod(1400);

  const mat = globe.globeMaterial();
  mat.color = new THREE.Color('#0f1c2d');
  mat.emissive = new THREE.Color('#0a1422');
  mat.emissiveIntensity = 0.35;
  mat.shininess = 0.6;

  /* Face South-East Asia: three-globe puts lng 0 on +z; turn the globe so lng ~102 faces the camera, tilt to ~10N */
  const c = globe.getCoords(7, 102, 0);
  const baseY = -Math.atan2(c.x, c.z);
  const baseX = Math.atan2(c.y, Math.hypot(c.x, c.z));
  globe.rotation.set(baseX, baseY, 0);
  scene.add(globe);

  const size = () => {
    const w = container.clientWidth || 1, h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  size();
  const ro = new ResizeObserver(size); ro.observe(container);

  let visible = true, raf = 0, t0 = performance.now();
  const io = new IntersectionObserver((en) => { visible = en.some((e) => e.isIntersecting); });
  io.observe(container);

  const tick = (now) => {
    raf = requestAnimationFrame(tick);
    if (!visible || document.hidden) return;
    const t = (now - t0) / 1000;
    if (!still) {
      /* a slow sway around the region, so the cities stay in view */
      globe.rotation.y = baseY + Math.sin(t * 0.12) * 0.22;
      globe.rotation.x = baseX + Math.sin(t * 0.07) * 0.06;
    }
    renderer.render(scene, camera);
  };
  raf = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
    globe._destructor?.();
    renderer.dispose(); renderer.forceContextLoss?.();
    renderer.domElement.remove();
  };
}

window.VVIPGlobe = { mount };
