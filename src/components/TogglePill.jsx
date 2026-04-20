export default function TogglePill({ size = 1, active = true, palette }) {
  const h = 56 * size;
  const w = 104 * size;
  const grad = palette || 'linear-gradient(100deg, #B8C9F2 0%, #D4A8E8 45%, #E8A887 100%)';
  return (
    <span
      className="toggle-pill"
      style={{
        width: w,
        height: h,
        background: grad,
        '--knob-size': `${h - 10}px`,
        '--knob-offset': active ? `${w - h + 5}px` : '5px',
      }}
      aria-hidden="true"
    >
      <span className="toggle-knob" />
    </span>
  );
}
