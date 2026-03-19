import './App.css';
import { I18nProvider, useI18n } from './context/I18nContext';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Guides from './components/Guides';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import LeadForm from './components/LeadForm';

function Header() {
  const { lang, setLang } = useI18n();
  
  return (
    <header className="page-header">
      <div className="container">
        <div className="logo">Taasurot</div>
        <div className="lang-switcher">
          <button 
            className={`lang-btn ${lang === 'ru' ? 'active' : ''}`}
            onClick={() => setLang('ru')}
          >
            🇷🇺 RU
          </button>
          <span className="lang-divider">|</span>
          <button 
            className={`lang-btn ${lang === 'uz' ? 'active' : ''}`}
            onClick={() => setLang('uz')}
          >
            🇺🇿 UZ
          </button>
        </div>
      </div>
    </header>
  );
}

function App() {
  return (
    <I18nProvider>
      <div className="app-wrapper">
        <Header />

        <main>
          <Hero />
          <Destinations />
          <Guides />
          <WhyUs />
          <Reviews />
        </main>

        <LeadForm />
      </div>
    </I18nProvider>
  );
}

export default App;
