import NextI18Next from 'next-i18next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'ua',
  otherLanguages: ['ru'],
  // localeSubpaths: {
  //   ru: 'ru'
  // },
  serverLanguageDetection: true,
  browserLanguageDetection: true
});

export default NextI18NextInstance;

/* Optionally, export class methods as named exports */
export const { appWithTranslation, withTranslation } = NextI18NextInstance;
