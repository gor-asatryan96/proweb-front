import React from 'react';

const SingleSport = () => <section className="bet bet-game">
  <div className="container bet__container">
    <div className="bet-match">
      <ul className="bet-match__list">
        {/* <!-- TODO: add className .bet-match__item--panel when panel show--> */}
        <li className="bet-match__item bet-match__item--football">
          <div className="bet-match__header">
            <button className="bet-match__back">
              <span className="img-container">
                <svg width="10" height="18">
                  <use xlinkHref="#arrow-left" />
                </svg>
              </span>
            </button>
            <div className="bet-match__country">
              <div className="bet-match__flag">
                <div className="img-container">
                  <img src="img/flag/spain.svg" alt="Spain" />
                </div>
              </div>
              <div className="bet-match__name">
                Spain - LA liga
              </div>
            </div>
            <ul className="bet-rate__nav__list">
              <li className="bet-rate__nav__item">
                <a className="bet-rate__nav__link bet-rate__nav__link--statistic" href="/">
                  <div className="img-container">
                    <svg>
                      <use xlinkHref="#statistic" />
                    </svg>
                  </div>
                </a>
              </li>
              <li className="bet-rate__nav__item">
                <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                  <div className="img-container">
                    <svg className="star-transparent">
                      <use xlinkHref="#star" />
                    </svg>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="bet-match__result">
            <div className="bet-match__team">
              Valencia
            </div>
            <div className="bet-match__score">
              <span className="bet-match__score__value">
                0
              </span>
              <span className="bet-match__score__separate">
                :
              </span>
              <span className="bet-match__score__value">
                0
              </span>
            </div>
            <div className="bet-match__team">
              Osasuna
            </div>
          </div>
          <div className="bet-match__current">
            47min.2nd Half
          </div>
          <div className="bet-match__row">
            <div className="bet-match__col bet-match__col_field active">
              <div className="bet-match__field">
                <div className="img-container">
                  <img src="img/casinoGames/football-field.jpg" alt="football field" />
                </div>
              </div>
            </div>
            <div className="bet-match__col bet-match__col_video">
              <div className="img-container">
                <img src="img/casinoGames/video.jpg" alt="video" />
              </div>
            </div>
            <div className="bet-match__col bet-match__col_progress">
              <div className="bet-progress">
                <ul className="bet-progress__list">
                  <li className="bet-progress__item">
                    <div className="bet-progress__title">
                      Dangerous attack
                    </div>
                    <div className="bet-progress__line">
                      <div className="bet-progress__step bet-progress__step--start">
                        08
                      </div>
                      <div className="bet-progress__bar">
                        <div className="bet-progress__bar-value" style={{ width: '50%' }} />
                      </div>
                      <div className="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li className="bet-progress__item">
                    <div className="bet-progress__title">
                      Shot on target
                    </div>
                    <div className="bet-progress__line">
                      <div className="bet-progress__step bet-progress__step--start">
                        04
                      </div>
                      <div className="bet-progress__bar">
                        <div className="bet-progress__bar-value" style={{ width: '30%' }} />
                      </div>
                      <div className="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li className="bet-progress__item">
                    <div className="bet-progress__title">
                      Shot off target
                    </div>
                    <div className="bet-progress__line">
                      <div className="bet-progress__step bet-progress__step--start">
                        07
                      </div>
                      <div className="bet-progress__bar">
                        <div className="bet-progress__bar-value" style={{ width: '90%' }} />
                      </div>
                      <div className="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li className="bet-progress__item">
                    <div className="bet-progress__title">
                      Corner kick
                    </div>
                    <div className="bet-progress__line">
                      <div className="bet-progress__step bet-progress__step--start">
                        08
                      </div>
                      <div className="bet-progress__bar">
                        <div className="bet-progress__bar-value" style={{ width: '99%' }} />
                      </div>
                      <div className="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li className="bet-progress__item">
                    <div className="bet-progress__title">
                      Yellow card
                    </div>
                    <div className="bet-progress__line">
                      <div className="bet-progress__step bet-progress__step--start">
                        04
                      </div>
                      <div className="bet-progress__bar">
                        <div className="bet-progress__bar-value" style={{ width: '35%' }} />
                      </div>
                      <div className="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                  <li className="bet-progress__item">
                    <div className="bet-progress__title">
                      Red card
                    </div>
                    <div className="bet-progress__line">
                      <div className="bet-progress__step bet-progress__step--start">
                        04
                      </div>
                      <div className="bet-progress__bar">
                        <div className="bet-progress__bar-value" style={{ width: '45%' }} />
                      </div>
                      <div className="bet-progress__step bet-progress__step--end">
                        08
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bet-match__col bet-match__col_results">
              <div className="img-container">
                <img src="img/casinoGames/results.PNG" alt="game results" />
              </div>
            </div>
            <div className="bet-match__col bet-match__col_time">
              <div className="img-container">
                <img src="img/casinoGames/time.PNG" alt="match time" />
              </div>
            </div>
          </div>
          <div className="bet-match__panel">
            <ul className="bet-match__panel__list">
              <li className="bet-match__panel__item">
                <button className="bet-match__panel__btn active">
                  <span className="bet-match__panel__icon">
                    <span className="img-container">
                      <svg width="34" height="17">
                        <use xlinkHref="#animation" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-match__panel__name">
                    Animation
                  </span>
                </button>
              </li>
              <li className="bet-match__panel__item">
                <button className="bet-match__panel__btn">
                  <span className="bet-match__panel__icon">
                    <span className="img-container">
                      <svg width="28.01" height="17.8">
                        <use xlinkHref="#youtube" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-match__panel__name">
                    Video
                  </span>
                </button>
              </li>
              <li className="bet-match__panel__item">
                <button className="bet-match__panel__btn">
                  <span className="bet-match__panel__icon">
                    <span className="img-container">
                      <svg width="25.04" height="23.32">
                        <use xlinkHref="#chart" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-match__panel__name">
                    H2H Chart
                  </span>
                </button>
              </li>
              <li className="bet-match__panel__item">
                <button className="bet-match__panel__btn">
                  <span className="bet-match__panel__icon">
                    <span className="img-container">
                      <svg width="25" height="25">
                        <use xlinkHref="#hint" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-match__panel__name">
                    Table
                  </span>
                </button>
              </li>
              <li className="bet-match__panel__item">
                <button className="bet-match__panel__btn">
                  <span className="bet-match__panel__icon">
                    <span className="img-container">
                      <svg width="25" height="25">
                        <use xlinkHref="#time" />
                      </svg>
                    </span>
                  </span>
                  <span className="bet-match__panel__name">
                    Timeline
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div className="bet-filter__block">
      <div className="bet-filter__upcoming active">
        <div className="bet-filter__config__line bet-filter__config__line--type">
          <ul className="bet-type__list">
            {/* <!--  TODO: add className .bet-type__item--active --> */}
            <li className="bet-type__item bet-type__item--active">
              <button className="bet-type__link">
                All
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Match Result
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Handicap
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Total
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Over/Under
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Goals
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Double Bets
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Half
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Minutes
              </button>
            </li>
            <li className="bet-type__item">
              <button className="bet-type__link">
                Specials
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bet-ratio">
      <ul className="bet-ratio__match">
        <li className="bet-ratio__match__item">
          <button className="bet-ratio__nav">
            <span className="bet-ratio__nav__title">
              Match Result
            </span>
            <span className="bet-ratio__nav__arrow arrow-bottom">
              <span className="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="bet-ratio__match__bet">
            <li className="bet-ratio__match__row">
              <button className="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span className="bet-ratio__match__chance">1</span>
                <span className="bet-ratio__match__value">2.50</span>
              </button>
              <button className="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span className="bet-ratio__match__chance">X</span>
                <span className="bet-ratio__match__value">2.95</span>
              </button>
              <button className="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span className="bet-ratio__match__chance">2</span>
                <span className="bet-ratio__match__value">3.05</span>
              </button>
            </li>
          </ul>
        </li>
        <li className="bet-ratio__match__item">
          <button className="bet-ratio__nav">
            <span className="bet-ratio__nav__title">
              Duble Chanse
            </span>
            <span className="bet-ratio__nav__arrow arrow-bottom">
              <span className="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="bet-ratio__match__bet">
            <li className="bet-ratio__match__row">
              <button className="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span className="bet-ratio__match__chance">1X</span>
                <span className="bet-ratio__match__value">1.60</span>
              </button>
              <button className="bet-ratio__match__btn bet-ratio__match__btn--down">
                <span className="bet-ratio__match__chance">12</span>
                <span className="bet-ratio__match__value">1.45</span>
              </button>
              <button className="bet-ratio__match__btn bet-ratio__match__btn--top">
                <span className="bet-ratio__match__chance">2X</span>
                <span className="bet-ratio__match__value">1.70</span>
              </button>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="bet-ratio__extra">
        <li className="bet-ratio__extra__item">
          <button className="bet-ratio__nav active">
            <span className="bet-ratio__nav__title">
              Handicap
            </span>
            <span className="bet-ratio__nav__arrow arrow-bottom">
              <span className="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="bet-ratio__extra__more active">
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-0.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Osasuna  (+0.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-1.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Osasuna  (+1.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-2.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Osasuna  (+2.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-3.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Osasuna  (+3.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
        <li className="bet-ratio__extra__item">
          <button className="bet-ratio__nav">
            <span className="bet-ratio__nav__title">
              Total
            </span>
            <span className="bet-ratio__nav__arrow arrow-bottom">
              <span className="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="bet-ratio__extra__more">
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   1.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   1.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   2.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   2.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   3.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   3.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   4.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   4.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
        <li className="bet-ratio__extra__item">
          <button className="bet-ratio__nav">
            <span className="bet-ratio__nav__title">
              Handicap
            </span>
            <span className="bet-ratio__nav__arrow arrow-bottom">
              <span className="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="bet-ratio__extra__more">
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-0.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-0.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-1.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (+1.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-2.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (+2.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (-3.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Valnecia  (+3.5)
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
          </ul>
        </li>
        <li className="bet-ratio__extra__item">
          <button className="bet-ratio__nav">
            <span className="bet-ratio__nav__title">
              Total
            </span>
            <span className="bet-ratio__nav__arrow arrow-bottom">
              <span className="img-container">
                <svg width="12px" height="7px">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          <ul className="bet-ratio__extra__more">
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   1.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   1.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   2.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   2.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   3.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   3.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
            </li>
            <li className="bet-ratio__extra__row">
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Over   4.5
                </span>
                <span className="bet-ratio__extra__value">
                  2.50
                </span>
              </button>
              <button className="bet-ratio__extra__btn">
                <span className="bet-ratio__extra__name">
                  Under   4.5
                </span>
                <span className="bet-ratio__extra__value">
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
