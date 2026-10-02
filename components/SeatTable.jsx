// Ten seats around one table. Seats fill one by one, hold, then reset (CSS animation).
const TOP = [118, 172, 228, 282];
const SEATS = [
  ...TOP.map((x) => ({ x, y: 52, r: 0, px: x, py: 100 })),
  { x: 354, y: 130, r: 90, px: 306, py: 130 },
  ...[...TOP].reverse().map((x) => ({ x, y: 208, r: 180, px: x, py: 160 })),
  { x: 46, y: 130, r: 270, px: 94, py: 130 },
];

export default function SeatTable() {
  return (
    <div className="seats rv" aria-hidden="true">
      <svg viewBox="10 22 380 216">
        <defs>
          <linearGradient id="st-wood" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fffaf0" /><stop offset="1" stopColor="#f3e3c1" />
          </linearGradient>
          <radialGradient id="st-glow"><stop offset="0" stopColor="#f6d68c" stopOpacity=".9" /><stop offset="1" stopColor="#f6d68c" stopOpacity="0" /></radialGradient>
        </defs>
        <rect className="st-shadow" x="66" y="82" width="268" height="108" rx="54" />
        <rect className="st-table" x="62" y="72" width="276" height="116" rx="58" fill="url(#st-wood)" />
        <rect className="st-inner" x="78" y="86" width="244" height="88" rx="44" />
        <circle className="st-glow" cx="200" cy="130" r="46" fill="url(#st-glow)" />
        <circle className="st-candle" cx="200" cy="130" r="4" />
        {SEATS.map((s, i) => (
          <g key={i} style={{ '--i': i }}>
            <circle className="st-plate" cx={s.px} cy={s.py} r="9" />
            <g transform={`translate(${s.x} ${s.y}) rotate(${s.r})`}>
              <rect className="st-chair" x="-19" y="-13" width="38" height="26" rx="11" />
              <rect className="st-back" x="-14" y="-17" width="28" height="5" rx="2.5" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
