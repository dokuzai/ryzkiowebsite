import SectionHead from './SectionHead';

export default function Pricing({ t, palette }) {
  return (
    <section className="section pricing" id="pricing">
      <SectionHead eyebrow={t.pricing.eyebrow} title={t.pricing.title} sub={t.pricing.sub} palette={palette} center />
      <div className="pricing-grid">
        {t.pricing.plans.map((p, i) => (
          <div key={i} className={`plan ${p.featured ? 'plan-featured' : ''}`}>
            {p.featured && <div className="plan-badge" style={{ background: `linear-gradient(100deg, ${palette[0]}, ${palette[4]})` }}>{t.pricing.popular}</div>}
            <div className="plan-name">{p.name}</div>
            <div className="plan-price">
              <span className="plan-amount">{p.price}</span>
              <span className="plan-unit">{p.unit}</span>
            </div>
            <div className="plan-desc">{p.desc}</div>
            <button className={`btn btn-lg ${p.featured ? 'btn-primary' : 'btn-outline'}`}>{p.cta}</button>
            <ul className="plan-feats">
              {p.features.map((f, j) => (
                <li key={j}>
                  <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
