// One Legends network across cities: animated flight arcs on a dotted world map.
// current = key of this landing's city (arcs fly into it); without it, arcs fly out from Dubai to every city.
const W = 640, H = 300;
const LON0 = -95, LON1 = 118, LAT0 = 62, LAT1 = -6;
const px = (lon, lat) => [((lon - LON0) / (LON1 - LON0)) * W, ((LAT0 - lat) / (LAT0 - LAT1)) * H];

export const NODES = {
  'new-york': { name: 'New York', lon: -74, lat: 40.7, lx: -8, ly: 22 },
  'palm-beach': { name: 'Palm Beach', lon: -80.0, lat: 26.7, lx: 0, ly: 22 },
  london: { name: 'London', lon: -0.1, lat: 51.5, lx: -26, ly: -10 },
  zurich: { name: 'Zurich', lon: 8.5, lat: 47.4, lx: 24, ly: 18 },
  riyadh: { name: 'Riyadh', lon: 46.7, lat: 24.7, lx: -24, ly: 22 },
  dubai: { name: 'Dubai', lon: 55.3, lat: 25.2, lx: 10, ly: -12 },
  'abu-dhabi': { name: 'Abu Dhabi', lon: 54.4, lat: 24.4, lx: 22, ly: 24 },
  singapore: { name: 'Singapore', lon: 103.8, lat: 1.35, lx: 0, ly: 22 },
};

function arc(a, b) {
  const [x1, y1] = px(a.lon, a.lat), [x2, y2] = px(b.lon, b.lat);
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 - Math.min(110, Math.abs(x2 - x1) * 0.35 + 30);
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

// rough land mask so the dot grid reads as a map
const LAND = [
  [-128, -60, 58, 25], [-110, -80, 25, 8], [-82, -35, 8, -6],           // Americas
  [-10, 40, 60, 36], [-18, 52, 36, -6], [40, 120, 60, 20], [68, 120, 20, 5], [95, 120, 5, -6], // Europe, Africa, Asia
];
const onLand = (lon, lat) => LAND.some(([a, b, t, u]) => lon >= a && lon <= b && lat <= t && lat >= u);

export default function CityNetwork({ current }) {
  const keys = Object.keys(NODES);
  const target = current ? NODES[current] : null;
  const hub = NODES.dubai;
  const routes = current
    ? keys.filter((k) => k !== current).map((k) => [NODES[k], target])
    : keys.filter((k) => k !== 'dubai').map((k) => [hub, NODES[k]]);

  const dots = [];
  for (let lon = LON0; lon <= LON1; lon += 5) for (let lat = LAT0; lat >= LAT1; lat -= 5) {
    if (!onLand(lon, lat)) continue;
    const [x, y] = px(lon, lat);
    dots.push(<circle key={lon + ':' + lat} cx={x} cy={y} r="1.5" fill="rgba(255,255,255,.14)" />);
  }

  return (
    <svg className="cnet" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Legends cities connected in one network">
      <defs>
        <linearGradient id="cnArc" x1="0" x2="1">
          <stop offset="0" stopColor="#D4AD5A" stopOpacity=".15" />
          <stop offset=".6" stopColor="#D4AD5A" stopOpacity=".9" />
          <stop offset="1" stopColor="#D4AD5A" stopOpacity=".3" />
        </linearGradient>
      </defs>
      {dots}
      {routes.map(([a, b], i) => {
        const id = 'cn' + i;
        return (
          <g key={id}>
            <path id={id} d={arc(a, b)} fill="none" stroke="url(#cnArc)" strokeWidth="1.6" strokeDasharray="3 6" />
            <circle r="3.6" fill="#D4AD5A">
              <animateMotion dur="3.6s" begin={`${i * 0.6}s`} repeatCount="indefinite"><mpath href={'#' + id} /></animateMotion>
            </circle>
          </g>
        );
      })}
      {keys.map((k) => {
        const n = NODES[k], [x, y] = px(n.lon, n.lat), on = k === current || (!current && k === 'dubai');
        return (
          <g key={k}>
            <circle cx={x} cy={y} r={on ? 7 : 4.5} fill={on ? '#fff' : '#D4AD5A'} />
            {on && (
              <circle cx={x} cy={y} r="12" fill="none" stroke="#fff" strokeOpacity=".5">
                <animate attributeName="r" values="9;24;9" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values=".6;0;.6" dur="2.8s" repeatCount="indefinite" />
              </circle>
            )}
            <text x={x + n.lx} y={y + n.ly} textAnchor="middle" fill={on ? '#fff' : 'rgba(255,255,255,.7)'} fontSize={on ? 14 : 12} fontWeight={on ? 700 : 500}>{n.name}</text>
          </g>
        );
      })}
    </svg>
  );
}
