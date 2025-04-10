import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 text-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'en'
            ? 'text-emerald-400 font-semibold'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        EN
      </button>
      <span className="text-gray-600">|</span>
      <button
        onClick={() => setLanguage('ge')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'ge'
            ? 'text-emerald-400 font-semibold'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        GE
      </button>
    </div>
  );
}