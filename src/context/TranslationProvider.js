import axios from 'axios';
import React, {
  useState, useEffect, useContext, createContext, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import { selectActiveLanguage } from '../redux/slices/appConfigs.slice';
import { selectServerTranslationUrl } from '../redux/slices/serverConfigs.slice';

const TranslationContext = createContext({});

const TranslationProvider = ({ children }) => {
  const [ translation, setTranslation ] = useState({});
  const activeLanguage = useSelector(selectActiveLanguage);
  const serverTranslationUrl = useSelector(selectServerTranslationUrl);

  const t = useCallback(text => translation[text] || text, [ translation ]);

  useEffect(() => {
    if (activeLanguage && serverTranslationUrl) {
      axios.get(`${serverTranslationUrl + activeLanguage.toLowerCase()}.json`)
        .then(res => setTranslation(res || {}))
        .catch();
    }
  }, [ activeLanguage, serverTranslationUrl ]);

  return (
    <TranslationContext.Provider value={{ t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);

export default TranslationProvider;
