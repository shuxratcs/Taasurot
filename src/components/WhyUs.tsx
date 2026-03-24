import { useI18n } from '../context/I18nContext';
import './WhyUs.css';

const WhyUs = () => {
  const { t } = useI18n();

  const advantages = [
    { id: 1, ...t('whyus.items.i1'), number: "1" },
    { id: 2, ...t('whyus.items.i2'), number: "2" },
    { id: 3, ...t('whyus.items.i3'), number: "3" },
    { id: 4, ...t('whyus.items.i4'), number: "4" },
    { id: 5, ...t('whyus.items.i5'), number: "5" }
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header text-left">
          <h2 className="h2">{t('whyus.title')}</h2>
          <p className="subtitle">
            {t('whyus.subtitle')}
          </p>
        </div>

        <div className="why-us-grid">
          {advantages.map((adv: any) => (
            <div key={adv.id} className="why-card">
              <div className="card-bg-number">{adv.number}</div>
              <div className="card-content">
                <h3 className="card-title h3">{adv.t}</h3>
                <p className="card-desc">{adv.d}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
