import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ge';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return (savedLanguage === 'en' || savedLanguage === 'ge') ? savedLanguage : 'en';
  });

  useEffect(() => {
    localStorage.setItem('preferredLanguage', language);
    // Update HTML lang attribute
    document.documentElement.lang = language === 'ge' ? 'ka' : 'en';
    document.documentElement.setAttribute('data-lang', language === 'ge' ? 'ka' : 'en');
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}