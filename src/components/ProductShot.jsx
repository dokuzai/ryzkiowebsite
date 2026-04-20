import { useState } from 'react';
import SectionHead from './SectionHead';

const SCREENS = [
  { src: '/assets/sc1.png', alt: 'Workbench Operatore' },
  { src: '/assets/sc2.png', alt: 'Dettaglio Cliente' },
  { src: '/assets/sc3.png', alt: 'Area di Lavoro' },
  { src: '/assets/sc4.png', alt: 'Analisi Credito' },
  { src: '/assets/sc5.png', alt: 'Organizzazione' },
];

export default function ProductShot({ t, palette }) {
  const [idx, setIdx] = useState(0);

  return (
    <section className="section product-shot" id="features">
      <SectionHead eyebrow={t.product.eyebrow} title={t.product.title} sub={t.product.sub} palette={palette} />
      <div className="product-frame">
        <div className="product-window">
          <div className="window-chrome">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <div className="window-url">ryzk.io / {SCREENS[idx].alt.toLowerCase()}</div>
          </div>
          <div className="screenshot-body">
            <img
              src={SCREENS[idx].src}
              alt={SCREENS[idx].alt}
              className="screenshot-img"
            />
          </div>
        </div>
        <div className="screenshot-nav">
          {SCREENS.map((s, i) => (
            <button
              key={i}
              className={`screenshot-dot${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
              aria-label={s.alt}
            >
              {s.alt}
            </button>
          ))}
        </div>
        <div className="product-halo" style={{ background: `radial-gradient(ellipse at center, ${palette[2]}66, transparent 70%)` }} />
      </div>
    </section>
  );
}
