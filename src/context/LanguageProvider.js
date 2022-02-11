import React, {
  useState, useEffect, useContext, createContext, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { getActiveLanguage } from '../assets/languages';
import { selectActiveLanguage } from '../redux/slices/configs.slice';

const LanguageContext = createContext({});

const LanguageProvider = ({ children }) => {
  const [ languageData, setLanguageData ] = useState(getActiveLanguage());
  const activeLanguage = useSelector(selectActiveLanguage);

  const t = useCallback(text => languageData[text] || text, [ languageData ]);

  useEffect(() => {
    if (activeLanguage) {
      setLanguageData(getActiveLanguage(activeLanguage));
    }
  }, [ activeLanguage ]);

  return (
    <LanguageContext.Provider value={t}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => useContext(LanguageContext);

export default LanguageProvider;
