import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bot, Clock, MessageSquare, Calendar, ArrowRight, Sparkles, Check, Menu, X } from 'lucide-react';
import { Logo } from './components/Logo';
import { LanguageToggle } from './components/LanguageToggle';
import { useTranslation } from './hooks/useTranslation';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { language } = useLanguage();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    pricingSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const pricingPlans = [
    {
      name: t('pricing.plans.standard.name'),
      monthlyPrice: "500-800",
      yearlyPrice: "5000-8000",
      description: isAnnual 
        ? t('pricing.plans.standard.description.annual')
        : t('pricing.plans.standard.description.monthly'),
      features: [
        t('pricing.features.basicAI'),
        t('pricing.features.customDesign'),
        t('pricing.features.faq'),
        t('pricing.features.support'),
        t('pricing.features.users'),
        t('pricing.features.dashboard')
      ]
    },
    {
      name: t('pricing.plans.pro.name'),
      monthlyPrice: "1000-1500",
      yearlyPrice: "10000-15000",
      description: isAnnual
        ? t('pricing.plans.pro.description.annual')
        : t('pricing.plans.pro.description.monthly'),
      features: [
        t('pricing.features.basicAI'),
        t('pricing.features.customDesign'),
        t('pricing.features.faq'),
        t('pricing.features.support'),
        t('pricing.features.users'),
        t('pricing.features.dashboard'),
        t('pricing.features.api'),
        t('pricing.features.priority')
      ],
      popular: true
    },
    {
      name: t('pricing.plans.infinity.name'),
      monthlyPrice: "2000-5000",
      yearlyPrice: "20000-50000",
      description: isAnnual
        ? t('pricing.plans.infinity.description.annual')
        : t('pricing.plans.infinity.description.monthly'),
      features: [
        t('pricing.features.basicAI'),
        t('pricing.features.customDesign'),
        t('pricing.features.faq'),
        t('pricing.features.support'),
        t('pricing.features.users'),
        t('pricing.features.dashboard'),
        t('pricing.features.api'),
        t('pricing.features.priority'),
        t('pricing.features.crm')
      ]
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
              <a href="#how-it-works" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.howItWorks')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <a href="#services" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.services')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <a href="#testimonials" className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.results')}
                </span>
                <span className="nav-link-underline"></span>
              </a>
              <button onClick={scrollToPricing} className="nav-link group">
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  {t('nav.pricing')}
                </span>
                <span className="nav-link-underline"></span>
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-emerald-400/90 hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full transition-all transform hover:scale-105 text-sm font-medium shadow-lg shadow-emerald-400/20 hover:shadow-emerald-400/30"
              >
                {t('nav.contactUs')}
              </button>
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
                  href="#how-it-works"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.howItWorks')}
                </a>
                <a
                  href="#services"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.services')}
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.results')}
                </a>
                <button
                  onClick={scrollToPricing}
                  className="text-left text-gray-200 hover:text-white px-4 py-2 text-sm font-medium"
                >
                  {t('nav.pricing')}
                </button>
                <button
                  onClick={() => {
                    navigate('/contact');
                    setIsMenuOpen(false);
                  }}
                  className="mx-4 bg-emerald-400/90 hover:bg-emerald-400 text-black px-6 py-2.5 rounded-full text-sm font-medium"
                >
                  {t('nav.contactUs')}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-emerald-900/20 mix-blend-overlay"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/20 blur-[120px] animate-pulse"></div>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center space-y-12">
            {/* Welcome Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm font-medium text-white/80 mb-8">
              {t('hero.welcome')}
            </div>

            {/* Main Heading */}
            <h1 className={`${language === 'ge' ? 'hero-title-ge' : 'hero-title'}`}>
              <span className="block bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
                {t('hero.title1')}
              </span>
              <span className="block mt-4 text-white/90">
                {t('hero.title2')}
              </span>
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/60">
              {t('hero.subtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12">
              <button 
                onClick={() => navigate('/contact')}
                className="group bg-emerald-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-300 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2"
              >
                <span>{t('hero.cta1')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="group px-8 py-4 rounded-full text-lg font-semibold border border-white/10 hover:bg-white/5 transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <span>{t('hero.cta2')}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <div className="absolute inset-0 rotate-180 animate-spin-slow">
            <div className="absolute inset-0 rounded-full border border-emerald-500/20"></div>
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 rotate-45"></div>
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 rotate-90"></div>
            <div className="absolute inset-0 rounded-full border border-emerald-500/20 rotate-135"></div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('howItWorks.title')}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t('howItWorks.steps').map((step: any, index: number) => (
              <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                {index === 0 && <MessageSquare className="w-12 h-12 text-emerald-400 mx-auto" />}
                {index === 1 && <Bot className="w-12 h-12 text-emerald-400 mx-auto" />}
                {index === 2 && <Clock className="w-12 h-12 text-emerald-400 mx-auto" />}
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-gradient-to-b from-black to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('services.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t('services.items').map((service: any, index: number) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-all transform hover:-translate-y-1 cursor-pointer">
                {index === 0 && <MessageSquare className="w-10 h-10 text-emerald-400 mb-4" />}
                {index === 1 && <Sparkles className="w-10 h-10 text-emerald-400 mb-4" />}
                {index === 2 && <Bot className="w-10 h-10 text-emerald-400 mb-4" />}
                {index === 3 && <Calendar className="w-10 h-10 text-emerald-400 mb-4" />}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t('testimonials.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t('testimonials.stats').map((item: any, index: number) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/5">
                <div className="text-4xl font-bold text-emerald-400 mb-2">{item.stat}</div>
                <p className="text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-black to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t('pricing.title')}</h2>
          <p className="text-xl text-gray-300 text-center mb-12">{t('pricing.subtitle')}</p>
          
          {/* Billing Toggle */}
          <div className="flex justify-center items-center space-x-4 mb-16">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>{t('pricing.monthly')}</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 rounded-full bg-emerald-400/20 p-1 transition-colors duration-200 ease-in-out"
            >
              <div className={`w-6 h-6 rounded-full bg-emerald-400 transition-transform duration-200 ease-in-out transform ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>{t('pricing.annual')}</span>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative p-8 rounded-2xl bg-white/5 border border-white/10 transition-all duration-300 hover:border-emerald-400/50 hover:transform hover:scale-105 ${
                  plan.popular ? 'border-emerald-400/50' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                    {t('pricing.popular')}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{isAnnual ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="text-gray-400 ml-2">GEL/{isAnnual ? 'year' : 'month'}</span>
                </div>
                <p className="text-gray-300 mb-8">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-emerald-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate('/contact')}
                  className="w-full bg-emerald-400 text-black px-6 py-3 rounded-full hover:bg-emerald-300 transition-all font-semibold"
                >
                  {t('pricing.getStarted')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-t from-black to-emerald-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('cta.title')}</h2>
          <p className="text-xl text-gray-300 mb-12">{t('cta.subtitle')}</p>
          <button 
            onClick={() => navigate('/contact')}
            className="group bg-emerald-400 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-300 transition-all transform hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>{t('cta.button')}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-gray-400">{t('cta.pricing')}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold">DM's AI</span>
            </div>
            <div className="flex justify-end space-x-8">
              <a href="#" className="text-gray-400 hover:text-emerald-400">About</a>
              <a href="/contact" className="text-gray-400 hover:text-emerald-400">Contact</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-emerald-400">Privacy</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2025 DM's AI Automation Agency.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;