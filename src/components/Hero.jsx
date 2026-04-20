import GradientGrid from './GradientGrid';
import TogglePill from './TogglePill';

export default function Hero({ t, palette }) {
  return <HeroCentered t={t} palette={palette} />;
}

function HeroCentered({ t, palette }) {
  return (
    <section className="hero hero-centered" id="home">
      <GradientGrid cols={18} rows={7} palette={palette} intensity={0.9} />
      <div className="hero-content hero-content-center">
        <div className="eyebrow eyebrow-center">
          <span className="eyebrow-dot" style={{ background: `linear-gradient(90deg, ${palette[0]}, ${palette[4]})` }} />
          {t.hero.eyebrow}
        </div>
        <h1 className="hero-title hero-title-center">
          <span className="hero-strong">{t.hero.pre}</span>{' '}
          <span className="hero-muted">{t.hero.mid1} {t.hero.mid2}</span>{' '}
          <span className="hero-strong">{t.hero.end}</span>
        </h1>
        <p className="hero-sub hero-sub-center">{t.hero.sub}</p>
        <div className="hero-ctas hero-ctas-center">
          <button className="btn btn-primary btn-lg">{t.hero.cta}</button>
          <button className="btn btn-link">{t.hero.secondary} →</button>
        </div>
        <div className="hero-ticker">
          <span className="ticker-stat"><b>+38%</b> {t.hero.stat1}</span>
          <span className="ticker-sep" />
          <span className="ticker-stat"><b>-52%</b> {t.hero.stat2}</span>
          <span className="ticker-sep" />
          <span className="ticker-stat"><b>14 giorni</b> {t.hero.stat3}</span>
        </div>
      </div>
    </section>
  );
}
