import classNames from 'classnames';

const LanguageItem = ({ language, onLanguageClick }) => (
  <li className="menu__language__item">
    <button onClick={onLanguageClick} className="menu__language__btn">
      <span className="menu__language__current">
        <span className="menu__language__flag">
          <div className={classNames('flags', `flag-${language}`)} />
        </span>
        <span className="menu__language__name">
          {language}
        </span>
      </span>
    </button>
  </li>
);

export default LanguageItem;
