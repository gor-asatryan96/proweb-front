import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Flag from '../../../../components/Flag/Flag';
import { MEDIA_QUERIES } from '../../../../constants/mediaQuery.constants';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';

import { selectActiveLanguage, toggleLanguage } from '../../../../redux/reducers/appConfigs/appConfigs.slice';
import LanguageItem from './components/LanguageItem';
import { LANGUAGES_LIST } from './constants/language.constants';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const activeLanguage = useSelector(selectActiveLanguage);
  const [ isOpen, setIsOpen ] = useState(false);

  const dropdownRef = useRef(null);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const onLanguageClick = (lang) => {
    dispatch(toggleLanguage(lang));
    setIsOpen(false);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useOutsideClick(dropdownRef, closeDropdown);

  return (
    <div ref={dropdownRef} className="menu__language">
      {/* eslint-disable-next-line max-len */}
      <button onClick={() => setIsOpen(prev => !prev)} className={classNames('menu__language__btn', { 'menu__language__btn--active': isOpen })}>
        <span className="menu__language__current">
          <span className="menu__language__flag">
            <span className="img-container">
              <Flag code={activeLanguage} />
            </span>
          </span>
          <span className="menu__language__name">
            {activeLanguage}
          </span>
          <span className={classNames('menu__language__arrow', { 'menu__language__arrow-active': isOpen })} >
            <span className="img-container">
              <svg width="17" height="10">
                <use xlinkHref="#arrow-bottom" />
              </svg>
            </span>
          </span>
        </span>
      </button>
      <ul className={classNames('menu__language__list', { active: isOpen, desktop: isDesktop })}>
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
