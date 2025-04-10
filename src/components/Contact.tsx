import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Facebook, Instagram, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: "dmaiautomation@gmail.com",
      href: "mailto:dmaiautomation@gmail.com"
    },
    {
      icon: Phone,
      title: t('contact.call'),
      value: "+(995) 592-162-616",
      href: "tel:+995592162616"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: t('contact.social.linkedin'),
      href: "#"
    },
    {
      icon: Facebook,
      title: "Facebook",
      value: t('contact.social.facebook'),
      href: "#"
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: t('contact.social.instagram'),
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0 group cursor-pointer" onClick={() => navigate('/')}>
              <div className="flex items-center space-x-3">
                <Logo />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent transition-all group-hover:to-emerald-300">
                    DM's AI
                  </span>
                  <span className="text-xs text-emerald-400/80">Automation Excellence</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              <a href="/#how-it-works" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.howItWorks')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <a href="/#services" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.services')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <a href="/#testimonials" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.results')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <a href="/#pricing" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.pricing')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <LanguageToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <LanguageToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-200 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <a
                  href="/#how-it-works"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.howItWorks')}
                </a>
                <a
                  href="/#services"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.services')}
                </a>
                <a
                  href="/#testimonials"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.results')}
                </a>
                <a
                  href="/#pricing"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.pricing')}
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Contact Hero */}
      <div className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-emerald-400 bg-clip-text text-transparent">
              {t('contact.title')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.href}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-emerald-400/50 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <contact.icon className="w-12 h-12 text-emerald-400 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold">{contact.title}</h3>
                  <p className="text-gray-300">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <Logo />
              <span className="text-xl font-bold">DM's AI</span>
            </div>
            <div className="flex justify-end space-x-8">
              <a href="#" className="text-gray-400 hover:text-emerald-400">Privacy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2025 DM's AI.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;