import SectionHead from './SectionHead';

const LOGOS = ['Salesforce', 'HubSpot', 'SAP', 'Oracle', 'Microsoft Dynamics', 'Zendesk', 'Stripe', 'Twilio', 'Slack', 'Zapier', 'Snowflake', 'Workday'];

export default function Integrations({ t, palette }) {
  return (
    <section className="section integrations">
      <SectionHead eyebrow={t.integrations.eyebrow} title={t.integrations.title} sub={t.integrations.sub} palette={palette} />
      <div className="logo-grid">
        {LOGOS.map((l, i) => (
          <div key={i} className="logo-cell">
            <span className="logo-mark" style={{ background: `linear-gradient(135deg, ${palette[i % 5]}, ${palette[(i + 2) % 5]})` }}>{l[0]}</span>
            <span className="logo-name">{l}</span>
          </div>
        ))}
      </div>
      <p className="integrations-foot">{t.integrations.foot} →</p>
    </section>
  );
}
