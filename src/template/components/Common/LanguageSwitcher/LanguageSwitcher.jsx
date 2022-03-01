import classNames from 'classnames';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectActiveLanguage, toggleLanguage } from '../../../../redux/slices/configs.slice';
import LanguageItem from './components/LanguageItem';
import { LANGUAGES_LIST } from './constants/language.constants';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const [ isOpen, setIsOpen ] = useState(false);

  const onLanguageClick = (lang) => {
    dispatch(toggleLanguage(lang));
    setIsOpen(false);
  };

  return (
    <div className="menu__language">
      <button onClick={() => setIsOpen(prev => !prev)} className="menu__language__btn">
        <span className="menu__language__current">
          <span className="menu__language__flag">
            <div className={classNames('flags ff-xl', `flag-${activeLanguage}`)} />
          </span>
          <span className="menu__language__name">
            {activeLanguage}
          </span>
          <span className="menu__language__arrow">
            <svg width="17" height="10">
              <use xlinkHref="#arrow-top" />
            </svg>
          </span>
        </span>
      </button>
      <ul className={classNames('menu__language__list', { active: isOpen })}>
        {LANGUAGES_LIST.map((lang) => {
          if (lang === activeLanguage) return null;
          return (
            <LanguageItem
              key={lang}
              language={lang}
              onLanguageClick={() => onLanguageClick(lang)} />
          );
        })}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
