import React from 'react';

const SingleSport = () => <section class="bet bet-game">
  <div class="container bet__container">
    <div class="bet-match">
      <ul class="bet-match__list">
        {/* <!-- TODO: add class .bet-match__item--panel when panel show--> */}
        <li class="bet-match__item bet-match__item--football">
          <div class="bet-match__header">
            <button class="bet-match__back">
              <span class="img-container">
                <svg width="10" height="18">
                  <use xlinkHref="#arrow-left" />
                </svg>
              </span>
            </button>
            <div class="bet-match__country">
              <div class="bet-match__flag">
                <div class="img-container">
                  <img src="img/flag/spain.svg" alt="Spain" />
                </div>
              </div>
              <div class="bet-match__name">
                Spain - LA liga
              </div>
            </div>
            <ul class="bet-rate__nav__list">
              <li class="bet-rate__nav__item">
                <a class="bet-rate__nav__link bet-rate__nav__link--statistic" href="/">
                  <div class="img-container">
                    <svg>
                      <use xlinkHref="#statistic" />
                    </svg>
                  </div>
                </a>
              </li>
              <li class="bet-rate__nav__item">
                <a class="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                  <div class="img-container">
                    <svg class="star-transparent">
                      <use xlinkHref="#star" />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div class="bet-match__result">
            <div class="bet-match__team">
              Valencia
            </div>
            <div class="bet-match__score">
              <span class="bet-match__score__value">
                0
              </span>
              <span class="bet-match__score__separate">
                :
              </span>
              <span class="bet-match__score__value">
                0
              </span>
            </div>
            <div class="bet-match__team">
              Osasuna
            </div>
          </div>
          <div class="bet-match__current">
            47min.2nd Half
          </div>
          <div class="bet-match__row">
            <div class="bet-match__col bet-match__col_field active">
              <div class="bet-match__field">
                <div class="img-container">
                  <img src="img/casinoGames/football-field.jpg" alt="football field" />
                </div>
              </div>
            </div>
            <div class="bet-match__col bet-match__col_video">
              <div class="img-container">
                <img src="img/casinoGames/video.jpg" alt="video" />
              </div>
            </div>
            <div class="bet-match__col bet-match__col_progress">
              <div class="bet-progress">
                <ul class="bet-progress__list">
                  <li class="bet-progress__item">
                    <div class="bet-progress__title">
                      Dangerous attack
                    </div>
                    <div class="bet-progress__line">
                      <div class="bet-progress__step bet-progress__step--start">
                        08
                      </div>
                      <div class="bet-progress__bar">
                        <div class="bet-progress__bar-value" style={{ width: '50%' }} />
                      </div>
                      <div class="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li class="bet-progress__item">
                    <div class="bet-progress__title">
                      Shot on target
                    </div>
                    <div class="bet-progress__line">
                      <div class="bet-progress__step bet-progress__step--start">
                        04
                      </div>
                      <div class="bet-progress__bar">
                        <div class="bet-progress__bar-value" style={{ width: '30%' }} />
                      </div>
                      <div class="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li class="bet-progress__item">
                    <div class="bet-progress__title">
                      Shot off target
                    </div>
                    <div class="bet-progress__line">
                      <div class="bet-progress__step bet-progress__step--start">
                        07
                      </div>
                      <div class="bet-progress__bar">
                        <div class="bet-progress__bar-value" style={{ width: '90%' }} />
                      </div>
                      <div class="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li class="bet-progress__item">
                    <div class="bet-progress__title">
                      Corner kick
                    </div>
                    <div class="bet-progress__line">
                      <div class="bet-progress__step bet-progress__step--start">
                        08
                      </div>
                      <div class="bet-progress__bar">
                        <div class="bet-progress__bar-value" style={{ width: '99%' }} />
                      </div>
                      <div class="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li class="bet-progress__item">
                    <div class="bet-progress__title">
                      Yellow card
                    </div>
                    <div class="bet-progress__line">
                      <div class="bet-progress__step bet-progress__step--start">
                        04
                      </div>
                      <div class="bet-progress__bar">
                        <div class="bet-progress__bar-value" style={{ width: '35%' }} />
                      </div>
                      <div class="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li class="bet-progress__item">
                    <div class="bet-progress__title">
                      Red card
                    </div>
                    <div class="bet-progress__line">
                      <div class="bet-progress__step bet-progress__step--start">
                        04
                      </div>
                      <div class="bet-progress__bar">
                        <div class="bet-progress__bar-value" style={{ width: '45%' }} />
                      </div>
                      <div class="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="bet-match__col bet-match__col_results">
              <div class="img-container">
                <img src="img/casinoGames/results.PNG" alt="game results" />
              </div>
            </div>
            <div class="bet-match__col bet-match__col_time">
              <div class="img-container">
                <img src="img/casinoGames/time.PNG" alt="match time" />
              </div>
            </div>
          </div>
          <div class="bet-match__panel">
            <ul class="bet-match__panel__list">
              <li class="bet-match__panel__item">
                <button class="bet-match__panel__btn active">
                  <span class="bet-match__panel__icon">
                    <span class="img-container">
                      <svg width="34" height="17">
                        <use xlinkHref="#animation" />
                      </svg>
                    </span>
                  </span>
                  <span class="bet-match__panel__name">
                    Animation
                  </span>
                </button>
              </li>
              <li class="bet-match__panel__item">
                <button class="bet-match__panel__btn">
                  <span class="bet-match__panel__icon">
                    <span class="img-container">
                      <svg width="28.01" height="17.8">
                        <use xlinkHref="#youtube" />
                      </svg>
                    </span>
                  </span>
                  <span class="bet-match__panel__name">
                    Video
                  </span>
                </button>
              </li>
              <li class="bet-match__panel__item">
                <button class="bet-match__panel__btn">
                  <span class="bet-match__panel__icon">
                    <span class="img-container">
                      <svg width="25.04" height="23.32">
                        <use xlinkHref="#chart" />
                      </svg>
                    </span>
                  </span>
                  <span class="bet-match__panel__name">
                    H2H Chart
                  </span>
                </button>
              </li>
              <li class="bet-match__panel__item">
                <button class="bet-match__panel__btn">
                  <span class="bet-match__panel__icon">
                    <span class="img-container">
                      <svg width="25" height="25">
                        <use xlinkHref="#hint" />
                      </svg>
                    </span>
                  </span>
                  <span class="bet-match__panel__name">
                    Table
                  </span>
                </button>
              </li>
              <li class="bet-match__panel__item">
                <button class="bet-match__panel__btn">
                  <span class="bet-match__panel__icon">
                    <span class="img-container">
                      <svg width="25" height="25">
                        <use xlinkHref="#time" />
                      </svg>
                    </span>
                  </span>
                  <span class="bet-match__panel__name">
                    Timeline
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="bet-filter__block">
      <div class="bet-filter__upcoming active">
        <div class="bet-filter__config__line bet-filter__config__line--type">
          <ul class="bet-type__list">
            {/* <!--  TODO: add class .bet-type__item--active --> */}
            <li class="bet-type__item bet-type__item--active">
              <button class="bet-type__link">
                All
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Match Result
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Handicap
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Total
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Over/Under
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Goals
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Double Bets
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Half
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Minutes
              </button>
            </li>
            <li class="bet-type__item">
              <button class="bet-type__link">
                Specials
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bet-ratio">
      <ul class="bet-ratio__match">
        <li class="bet-ratio__match__item">
          <button class="bet-ratio__nav">
            <span class="bet-ratio__nav__title">
              Match Result
            </span>
            <span class="bet-ratio__nav__arrow arrow-bottom">
              <span class="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul class="bet-ratio__match__bet">
            <li class="bet-ratio__match__row">
              <button class="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span class="bet-ratio__match__chance">1</span>
                <span class="bet-ratio__match__value">2.50</span>
              </button>
              <button class="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span class="bet-ratio__match__chance">X</span>
                <span class="bet-ratio__match__value">2.95</span>
              </button>
              <button class="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span class="bet-ratio__match__chance">2</span>
                <span class="bet-ratio__match__value">3.05</span>
              </button>
            </li>
          </ul>
        </li>
        <li class="bet-ratio__match__item">
          <button class="bet-ratio__nav">
            <span class="bet-ratio__nav__title">
              Duble Chanse
            </span>
            <span class="bet-ratio__nav__arrow arrow-bottom">
              <span class="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul class="bet-ratio__match__bet">
            <li class="bet-ratio__match__row">
              <button class="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span class="bet-ratio__match__chance">1X</span>
                <span class="bet-ratio__match__value">1.60</span>
              </button>
              <button class="bet-ratio__match__btn bet-ratio__match__btn--down">
                <span class="bet-ratio__match__chance">12</span>
                <span class="bet-ratio__match__value">1.45</span>
              </button>
              <button class="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span class="bet-ratio__match__chance">2X</span>
                <span class="bet-ratio__match__value">1.70</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="bet-ratio__extra">
        <li class="bet-ratio__extra__item">
          <button class="bet-ratio__nav active">
            <span class="bet-ratio__nav__title">
              Handicap
            </span>
            <span class="bet-ratio__nav__arrow arrow-bottom">
              <span class="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul class="bet-ratio__extra__more active">
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-0.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Osasuna  (+0.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-1.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Osasuna  (+1.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-2.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Osasuna  (+2.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-3.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Osasuna  (+3.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
        <li class="bet-ratio__extra__item">
          <button class="bet-ratio__nav">
            <span class="bet-ratio__nav__title">
              Total
            </span>
            <span class="bet-ratio__nav__arrow arrow-bottom">
              <span class="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul class="bet-ratio__extra__more">
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   1.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   1.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   2.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   2.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   3.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   3.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   4.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   4.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
        <li class="bet-ratio__extra__item">
          <button class="bet-ratio__nav">
            <span class="bet-ratio__nav__title">
              Handicap
            </span>
            <span class="bet-ratio__nav__arrow arrow-bottom">
              <span class="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul class="bet-ratio__extra__more">
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-0.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-0.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-1.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (+1.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-2.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (+2.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (-3.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Valnecia  (+3.5)
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
        <li class="bet-ratio__extra__item">
          <button class="bet-ratio__nav">
            <span class="bet-ratio__nav__title">
              Total
            </span>
            <span class="bet-ratio__nav__arrow arrow-bottom">
              <span class="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul class="bet-ratio__extra__more">
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   1.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   1.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   2.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   2.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   3.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   3.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li class="bet-ratio__extra__row">
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Over   4.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button class="bet-ratio__extra__btn">
                <span class="bet-ratio__extra__name">
                  Under   4.5
                </span>
                <span class="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</section>;

export default SingleSport;
