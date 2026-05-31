import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '@/i18n/translations';

interface LanguageItem {
  code: Language;
  name: string;
  nativeName: string;
  icon: string; // 🇦🇲 🇬🇧 🇷🇺 image path
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  languages: LanguageItem[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/* 🌍 LANGUAGES WITH FLAG ICONS */
export const languages: LanguageItem[] = [
  {
    code: 'hy',
    name: 'Armenian',
    nativeName: 'Հայերեն',
    icon: '/public/assets/armenia.jpg',
  },
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    icon: '/public/assets/united-kingdom.jpg',
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    icon: '/public/assets/russia.jpg',
  },
];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation();

  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language | null;
    return saved ?? 'en';
  });

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language, i18n]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: setLanguageState,
        languages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
