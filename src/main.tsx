import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import App from './App.tsx';
import Contact from './components/Contact.tsx';
import './index.css';

// Update HTML lang attribute based on selected language
const updateHtmlLang = (lang: string) => {
  document.documentElement.lang = lang === 'ge' ? 'ka' : 'en';
  document.documentElement.setAttribute('data-lang', lang === 'ge' ? 'ka' : 'en');
};

// Initial language setup
const savedLanguage = localStorage.getItem('preferredLanguage');
updateHtmlLang(savedLanguage === 'ge' ? 'ka' : 'en');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </LanguageProvider>
  </StrictMode>
);