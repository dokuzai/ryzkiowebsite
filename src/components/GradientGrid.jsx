function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const n = parseInt(h.length === 3 ? h.split('').map(c => c + c).join('') : h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function lerp(a, b, t) { return a + (b - a) * t; }

function pseudoRand(seed) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

const SparkleMark = () => (
  <svg viewBox="0 0 24 24" className="gg-sparkle" aria-hidden="true">
    <path
      d="M12 2 L13.2 10.8 L22 12 L13.2 13.2 L12 22 L10.8 13.2 L2 12 L10.8 10.8 Z"
      fill="rgba(255,255,255,0.9)"
    />
  </svg>
);

export default function GradientGrid({ cols = 14, rows = 6, palette, intensity = 1, className = '' }) {
  const pal = palette || ['#DCE7FF', '#E6D5FF', '#F5C9D5', '#F4C99E', '#E8C687'];

  const colorAt = (u, v) => {
    const t = Math.max(0, Math.min(1, u * 0.75 + v * 0.25));
    const scaled = t * (pal.length - 1);
    const i = Math.floor(scaled);
    const f = scaled - i;
    const a = hexToRgb(pal[i]);
    const b = hexToRgb(pal[Math.min(pal.length - 1, i + 1)]);
    return `rgb(${Math.round(lerp(a.r, b.r, f))}, ${Math.round(lerp(a.g, b.g, f))}, ${Math.round(lerp(a.b, b.b, f))})`;
  };

  const cells = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const u = cols === 1 ? 0 : x / (cols - 1);
      const v = rows === 1 ? 0 : y / (rows - 1);
      const topLeftFade = Math.max(0, 1 - Math.max(0, 0.85 - u - v * 0.6) * 2);
      const jitter = pseudoRand(x * 31 + y * 17);
      const opacity = topLeftFade * (0.55 + jitter * 0.45) * intensity;
      const sparkle = pseudoRand(x * 53 + y * 29) > 0.78 && opacity > 0.5;
      cells.push(
        <div
          key={`${x}-${y}`}
          className="gg-cell"
          style={{
            gridColumn: x + 1,
            gridRow: y + 1,
            background: colorAt(u, v),
            opacity,
          }}
        >
          {sparkle && <SparkleMark />}
        </div>
      );
    }
  }

  return (
    <div className={`gradient-grid ${className}`} style={{ '--cols': cols, '--rows': rows }}>
      {cells}
      <div className="gg-glow" />
    </div>
  );
}
