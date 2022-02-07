import React from 'react';

const SearchPanel = () => <section class="search">
  <div class="search__container">
    <form class="search__form" action="">
      <div class="search__block">
        <label class="search__hint">
          <span class="search__caption">
            Search
          </span>
          <input class="search__input" type="text" placeholder="Sport, Live, Casino, Games..." />
        </label>
        <button class="search__btn" aria-label="search button">
          <span class="img-container">
            <svg class="search__icon" width="26.2" height="26.2">
              <use xlinkHref="#search" />
            </svg>
          </span>
        </button>
      </div>
    </form>
  </div>
</section>;

export default SearchPanel;
