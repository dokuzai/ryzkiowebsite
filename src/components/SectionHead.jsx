export default function SectionHead({ eyebrow, title, sub, palette, center }) {
  return (
    <div className={`section-head ${center ? 'center' : ''}`}>
      <div className="eyebrow">
        <span className="eyebrow-dot" style={{ background: `linear-gradient(90deg, ${palette[0]}, ${palette[4]})` }} />
        {eyebrow}
      </div>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
