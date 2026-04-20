import GradientGrid from './GradientGrid';

export default function CtaBand({ t, palette }) {
  return (
    <section className="section cta-band">
      <div className="cta-inner">
        <GradientGrid cols={18} rows={5} palette={palette} intensity={0.9} />
        <div className="cta-content">
          <h2 className="cta-title">{t.cta.title}</h2>
          <p className="cta-sub">{t.cta.sub}</p>
          <div className="hero-ctas">
            <button className="btn btn-primary btn-lg">{t.cta.primary}</button>
            <button className="btn btn-ghost">{t.cta.secondary}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
