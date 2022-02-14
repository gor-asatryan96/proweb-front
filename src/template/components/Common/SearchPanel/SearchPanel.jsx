import { useTranslation } from '../../../../context/LanguageProvider';

const SearchPanel = () => {
  const t = useTranslation();

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" action="">
          <div className="search__block">
            <label className="search__hint">
              <span className="search__caption">
                {t('Search')}
              </span>
              <input className="search__input" type="text" placeholder="Sport, Live, Casino, Games..." />
            </label>
            <button className="search__btn" aria-label="search button">
              <span className="img-container">
                <svg className="search__icon" width="26.2" height="26.2">
                  <use xlinkHref="#search" />
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
