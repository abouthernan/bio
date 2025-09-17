// src/lib/i18n.js
export const languages = {
  es: 'Español',
  en: 'English'
};

export const defaultLang = 'es';

export const ui = {
  es: {
    //navegación
    'nav.home': 'Inicio',
    'nav.about': 'Acerca',
    'nav.blog': 'Blog',
    'nav.contact': 'Contacto',
    //Hero Index ES
    'hero.greeting': 'Hola 👋',
    'hero.name': 'Soy Hernán Estupiñán',
    'hero.role': 'Especialista en Growth Marketing y Producto',
    'hero.cta': '¡Hablemos!',
    'hero.resume': 'Ver CV'
  },
  en: {
    //navegation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    //Hero Index EN
    'hero.greeting': 'Hey there 👋',
    'hero.name': "I'm Hernán Estupiñán",
    'hero.role': 'Growth Marketing and Product Specialist',
    'hero.cta': "Let's Talk!",
    'hero.resume': 'See my Resume'
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