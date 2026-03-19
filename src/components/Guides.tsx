import { useI18n } from '../context/I18nContext';
import './Guides.css';

const Guides = () => {
  const { t } = useI18n();

  const guides = [
    { id: 1, ...t('guides.items.i1') },
    { id: 2, ...t('guides.items.i2') },
    { id: 3, ...t('guides.items.i3') },
    { id: 4, ...t('guides.items.i4') }
  ];

  return (
    <section className="guides-section">
      <div className="container">
        <div className="section-header text-left">
          <h2 className="h2">{t('guides.title')}</h2>
          <p className="subtitle">
            {t('guides.subtitle')}
          </p>
        </div>

        <div className="grid-4 guides-grid">
          {guides.map((guide: any) => (
            <div key={guide.id} className="guide-card">
              <div className="wireframe-img card-img-placeholder">
                Фото локации
              </div>
              <div className="card-content">
                <h3 className="card-title">{guide.t}</h3>
                <p className="card-desc">{guide.d}</p>
                <button className="btn btn-secondary card-btn-full">
                  {guide.b}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="guides-footer text-center">
          <button className="btn btn-gray btn-lg">{t('guides.btn_more')}</button>
        </div>
      </div>
    </section>
  );
};

export default Guides;
