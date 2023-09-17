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
    lng: 'en', // 设置当前语言为英语
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          menu: [
            {
              navigation: 'work',
            },
            { navigation: 'contact' },
          ],
          introduce: {
            title: 'Prioritize excellent coding quality and the creation of extensible APIs.',
            detail:
              'Hello, I hail from Muzha in Taipei. I am a dedicated career-switching full-stack engineer who diligently completes assigned tasks for the company and proactively contributes my ideas. I possess strong teamwork and collaboration skills.',
            button: 'work',
            resume: 'Download resume',
          },

          works: {
            title: 'Selected Works',
          },
        },
      },
      zhTw: {
        translation: {
          menu: [
            {
              navigation: '工作項目',
            },
            { navigation: '聯絡方式' },
          ],
          introduce: {
            title: '注重良好 Coding 品質、開發可擴充性的的APIs',
            detail:
              '嗨，我來自台北木柵，一個認真的轉職全端工程師，努力完成公司交辦的任務，並適時提出自己的想法，擁有良好的團隊協作能力。',
            button: '工作項目',
            resume: '下載履歷',
          },
          works: {
            title: '工作項目',
          },
        },
      },
    },
  });

export default i18n;
