import { useState, useEffect } from 'react';

export default function Nav({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo" aria-label="ryzk.io">
          <img src="/assets/ryzk-logo.png" alt="ryzk.io" />
        </a>
        <ul className="nav-links">
          {t.nav.map((item, i) => (
            <li key={i}><a href={`#${item.id}`}>{item.label}</a></li>
          ))}
        </ul>
        <div className="nav-right">
          <button
            className="lang-pill"
            onClick={() => setLang(lang === 'it' ? 'en' : 'it')}
            aria-label="Change language"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" />
            </svg>
            <span>{lang.toUpperCase()}</span>
            <svg viewBox="0 0 12 12" width="10" height="10"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" /></svg>
          </button>
          <button className="btn btn-ghost">{t.login}</button>
          <button className="btn btn-primary">{t.ctaNav}</button>
        </div>
      </div>
    </nav>
  );
}
