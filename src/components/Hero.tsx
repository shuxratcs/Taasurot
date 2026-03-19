import { useState } from 'react';
import { useI18n } from '../context/I18nContext';
import './Hero.css';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useI18n();

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <p className="hero-eyebrow">{t('hero.eyebrow')}</p>
          <h1 className="h1 hero-title">
            {t('hero.title_part1')} <br/>
            {t('hero.title_part2')}
          </h1>
          <p className="subtitle hero-subtitle">
            {t('hero.subtitle_part1')} <br/>
            {t('hero.subtitle_part2')}
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-gray btn-lg" onClick={() => setIsModalOpen(true)}>
              {t('hero.btn_know')}
            </button>
            <button className="btn btn-primary btn-lg">
              {t('hero.btn_help')}
            </button>
          </div>

          <div className="trust-badges">
            <div className="badge">
              <span className="badge-icon">✔</span>
              <span>{t('hero.badges.b1')}</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✔</span>
              <span>{t('hero.badges.b2')}</span>
            </div>
            <div className="badge">
              <span className="badge-icon">✔</span>
              <span>{t('hero.badges.b3')}</span>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close">
              ✕
            </button>
            <div className="modal-header-centered">
              <h3 className="h2 form-title text-center">{t('hero.form.title')}</h3>
              <p className="form-disclaimer text-center">{t('hero.form.desc')}</p>
            </div>
            
            <form className="lead-form modal-lead-form" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="form-group">
                <label htmlFor="hero-name">{t('hero.form.name')}</label>
                <input id="hero-name" type="text" placeholder={t('hero.form.name_ph')} required />
              </div>
              <div className="form-group">
                <label htmlFor="hero-phone">{t('hero.form.phone')}</label>
                <input id="hero-phone" type="tel" inputMode="tel" placeholder="+998" required />
              </div>
              <div className="form-group">
                <label htmlFor="hero-destination">{t('hero.form.dest')}</label>
                <input id="hero-destination" type="text" placeholder={t('hero.form.dest_ph')} />
              </div>
              <div className="form-group">
                <label htmlFor="hero-date">{t('hero.form.date')}</label>
                <input id="hero-date" type="text" placeholder={t('hero.form.date_ph')} />
              </div>
              <div className="form-group">
                <label htmlFor="hero-people">{t('hero.form.people')}</label>
                <input id="hero-people" type="text" placeholder={t('hero.form.people_ph')} />
              </div>
              <div className="form-group">
                <label htmlFor="hero-budget">{t('hero.form.budget')}</label>
                <input id="hero-budget" type="text" placeholder={t('hero.form.budget_ph')} />
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                {t('hero.form.btn')}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
