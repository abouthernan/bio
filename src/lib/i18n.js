// src/lib/i18n.js
export const languages = {
  es: 'ES',
  en: 'EN'
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola 👋',
    'hero.name': 'Soy Hernán Estupiñán',
    'hero.role': 'Growth Marketing and Product Specialist',
    'hero.cta': '¡Hablemos!',
    'hero.resume': 'Descargar CV'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hey there 👋',
    'hero.name': "I'm Hernán Estupiñán",
    'hero.role': 'Growth Marketing and Product Specialist',
    'hero.cta': "Let's Talk!",
    'hero.resume': 'Download Resume'
  }
};

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang;
  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}