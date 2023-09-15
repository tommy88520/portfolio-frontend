import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          introduce: {
            title: 'I Build Scalable APIs & Web-Applications',
            detail:
              '23 year old (backend leaning) full stack web developer from Deurne, The Netherlands. Most of my current experience is building customer-facing SaaS, websites and transforming business operations.',
          },
        },
      },
      zhTw: {
        translation: {
          introduce: {
            title: '我好棒棒',
            detail: '23歲的精神小伙',
          },
        },
      },
    },
  });

export default i18n;
