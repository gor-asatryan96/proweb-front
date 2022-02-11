import EN from './jsons/en.json';

const languages = {
  EN,
};

export const getActiveLanguage = lang => languages[lang] || languages['EN'];
