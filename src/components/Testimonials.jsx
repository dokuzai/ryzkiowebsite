import SectionHead from './SectionHead';

export default function Testimonials({ t, palette }) {
  return (
    <section className="section testimonials">
      <SectionHead eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} palette={palette} />
      <div className="testimonials-grid">
        {t.testimonials.items.map((q, i) => (
          <figure key={i} className={`testimonial ${i === 0 ? 'testimonial-featured' : ''}`}>
            {i === 0 && <div className="t-halo" style={{ background: `linear-gradient(135deg, ${palette[0]}33, ${palette[4]}33)` }} />}
            <div className="t-stars">★★★★★</div>
            <blockquote>&ldquo;{q.quote}&rdquo;</blockquote>
            <figcaption>
              <div className="t-avatar" style={{ background: `linear-gradient(135deg, ${palette[i % 5]}, ${palette[(i + 2) % 5]})` }}>{q.initials}</div>
              <div>
                <div className="t-name">{q.name}</div>
                <div className="t-role">{q.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
