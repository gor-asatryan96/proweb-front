import Flag from '../../../../../components/Flag/Flag';

const LanguageItem = ({ language, onLanguageClick }) => (
  <li className="menu__language__item">
    <button onClick={onLanguageClick} className="menu__language__btn">
      <span className="menu__language__current">
        <span className="menu__language__flag">
          <span className="img-container">
            <Flag code={language} />
          </span>
        </span>
        <span className="menu__language__name">
          {language}
        </span>
      </span>
    </button>
  </li>
);

export default LanguageItem;
