import SectionHead from './SectionHead';

export default function HowItWorks({ t, palette }) {
  return (
    <section className="section how" id="product">
      <SectionHead eyebrow={t.how.eyebrow} title={t.how.title} sub={t.how.sub} palette={palette} />
      <div className="how-steps">
        <div className="how-line" style={{ background: `linear-gradient(90deg, ${palette[0]}, ${palette[2]}, ${palette[4]})` }} />
        {t.how.steps.map((s, i) => (
          <div className="how-step" key={i}>
            <div className="how-num" style={{ background: `linear-gradient(135deg, ${palette[0]}, ${palette[4]})` }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
