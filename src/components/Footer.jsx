export default function Footer({ t }) {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/assets/ryzk-logo.png" alt="ryzk.io" className="footer-logo" />
          <p>{t.footer.tag}</p>
          <div className="footer-legal">&copy; 2026 ryzk.io &middot; {t.footer.rights}</div>
        </div>
        <div className="footer-cols">
          {t.footer.cols.map((c, i) => (
            <div key={i}>
              <div className="footer-col-title">{c.title}</div>
              <ul>{c.items.map((it, j) => <li key={j}><a href="#">{it}</a></li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
