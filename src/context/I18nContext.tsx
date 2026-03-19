import { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../translations';
import type { Language } from '../translations';

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => any;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  // Try to load from localStorage or default to 'ru'
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('app_lang') as Language;
    return saved || 'ru';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): any => {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};
