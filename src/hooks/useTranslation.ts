import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (path: string) => {
    const keys = path.split('.');
    let value: any = translations[language];
    
    for (const key of keys) {
      if (value === undefined) return path;
      value = value[key];
    }
    
    return value || path;
  };

  return { t };
}