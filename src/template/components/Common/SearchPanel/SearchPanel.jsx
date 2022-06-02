import { useTranslation } from '../../../../context/TranslationProvider';

const SearchPanel = () => {
  const { t } = useTranslation();

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" action="">
          <div className="search__block">
            <label className="search__hint">
              <input className="search__input" type="text" placeholder="Search" />
            </label>
            <button className="search__btn" aria-label="search button">
              <span className="img-container">
                <svg className="search__icon" width="1.857rem" height="1.857rem">
                  <use xlinkHref="#search-mobile" />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchPanel;
