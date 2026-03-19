import { useI18n } from '../context/I18nContext';
import './Destinations.css';

const Destinations = () => {
  const { t } = useI18n();

  const destinations = [
    { id: 1, ...t('destinations.items.i1') },
    { id: 2, ...t('destinations.items.i2') },
    { id: 3, ...t('destinations.items.i3') },
    { id: 4, ...t('destinations.items.i4') },
    { id: 5, ...t('destinations.items.i5') },
    { id: 6, ...t('destinations.items.i6') },
    { id: 7, ...t('destinations.items.i7') },
    { id: 8, ...t('destinations.items.i8') }
  ];

  return (
    <section className="destinations-section">
      <div className="container">
        <div className="section-header text-left">
          <h2 className="h2">{t('destinations.title')}</h2>
          <p className="subtitle">
            {t('destinations.subtitle')}
          </p>
        </div>

        <div className="grid-4 destinations-grid">
          {destinations.map((dest: any) => (
            <div key={dest.id} className="destination-card">
              <div className="wireframe-img card-img-placeholder">
                Фото
              </div>
              <div className="card-content">
                <h3 className="card-title">{dest.t}</h3>
                <p className="card-desc">{dest.d}</p>
                <button className="btn btn-primary card-btn-full">
                  {dest.b}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="guides-search-block">
          <h3 className="h3">{t('destinations.search.title')}</h3>
          <div className="search-bar">
            <input type="text" placeholder={t('destinations.search.ph')} />
            <button className="btn btn-primary">{t('destinations.search.btn')}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
