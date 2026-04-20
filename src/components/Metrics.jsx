import SectionHead from './SectionHead';

export default function Metrics({ t, palette }) {
  return (
    <section className="section metrics">
      <SectionHead eyebrow={t.metrics.eyebrow} title={t.metrics.title} sub={t.metrics.sub} palette={palette} center />
      <div className="metrics-grid">
        {t.metrics.items.map((m, i) => (
          <div key={i} className="metric-card">
            <div className="metric-halo" style={{ background: `radial-gradient(ellipse at 50% 0%, ${palette[i % 5]}55, transparent 70%)` }} />
            <div className="metric-value">{m.value}</div>
            <div className="metric-label">{m.label}</div>
            <div className="metric-desc">{m.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
