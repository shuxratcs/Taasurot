import { useI18n } from '../context/I18nContext';
import './LeadForm.css';

const LeadForm = () => {
  const { t } = useI18n();

  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="form-container">
          <div className="form-content-block text-left">
            <h2 className="h2 form-heading">{t('lead.title')}</h2>
            <p className="subtitle">
              {t('lead.subtitle')}
            </p>
            
            <ul className="micro-trust">
              <li><span className="check">+</span> {t('lead.m1')}</li>
              <li><span className="check">+</span> {t('lead.m2')}</li>
              <li><span className="check">+</span> {t('lead.m3')}</li>
            </ul>
          </div>

          <div className="form-wrapper">
            <form className="lead-form final-lead-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="final-name">{t('lead.form.name')}</label>
                <input id="final-name" type="text" placeholder={t('lead.form.name_ph')} required />
              </div>
              <div className="form-group">
                <label htmlFor="final-phone">{t('lead.form.phone')}</label>
                <input id="final-phone" type="tel" inputMode="tel" placeholder="+998" required />
              </div>
              <div className="form-group">
                <label htmlFor="final-date">{t('lead.form.date')}</label>
                <input id="final-date" type="text" placeholder={t('lead.form.date_ph')} />
              </div>
              <div className="form-group">
                <label htmlFor="final-people">{t('lead.form.people')}</label>
                <input id="final-people" type="text" placeholder={t('lead.form.people_ph')} />
              </div>
              <div className="form-group">
                <label htmlFor="final-budget">{t('lead.form.budget')}</label>
                <input id="final-budget" type="text" placeholder={t('lead.form.budget_ph')} />
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                {t('lead.form.btn')}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="logo">Taasurot</div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Taasurot. {t('lead.footer.rights')}.
          </div>
          <div className="footer-contacts">
            <span>{t('lead.footer.contact')}</span>
            <a href="#" className="contact-link">TG</a>
            <a href="#" className="contact-link">WA</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default LeadForm;
