import React from 'react';
import SportMenu from '../components/SportMenu/SportMenu';

const Live = () => <>
  <SportMenu />
  <section className="bet live">
    <div className="container bet__container">
      <div className="bet-filter__block active">
        <div className="bet-filter">
          <ul className="bet-filter__list">
            <li className="bet-filter__item">
              <a className="bet-filter__btn active" href="index.html">
                ALL GAMES
              </a>
            </li>
            <li className="bet-filter__item">
              <a className="bet-filter__btn" href="/">
                WHITH VIDEO
              </a>
            </li>
            <li className="bet-filter__item bet-filter__item--filter">
              {/* <!--                TODO: add className active or selected--> */}
              <a className="bet-filter__btn bet-filter__btn--filter" href="/">
                <span className="img-container">
                  <span className="bet-filter__icon">
                    <svg width="21.46" height="22">
                      <use xlinkHref="#filter" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
            <li className="bet-filter__item bet-filter__item--search">
              <a className="bet-filter__btn bet-filter__btn--search" href="/">
                <span className="img-container">
                  <svg width="26.2" height="26.2">
                    <use xlinkHref="#search" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!--          TODO: add className active when open upcoming filter --> */}
        <div className="bet-filter__upcoming active">
          <div className="bet-filter__config__line bet-filter__config__line--type">
            <ul className="bet-type__list">
              {/* <!--                TODO: add className .bet-type__item--active --> */}
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
        {/* <!--          TODO: add className active when open filter--> */}
        <div className="bet-filter__config">
          <div className="bet-filter__config__line bet-filter__config__line--match">
            <ul className="bet-filter__config__list">
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      All
                    </span>
                  </span>
                </label>
              </li>
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      UEFA Scepials
                    </span>
                  </span>
                </label>
              </li>
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      Bundesliga
                    </span>
                  </span>
                </label>
              </li>
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      La Liga
                    </span>
                  </span>
                </label>
              </li>
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      LSeria A
                    </span>
                  </span>
                </label>
              </li>
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      La Liga
                    </span>
                  </span>
                </label>
              </li>
              <li className="bet-filter__config__item">
                <label className="bet-filter__config__label">
                  <span className="checkbox-2 bet-filter__config__checkbox">
                    <input className="checkbox-2__btn" type="checkbox" />
                    <span className="checkbox-2__icon" />
                    <span className="bet-filter__config__name">
                      Ligue 1
                    </span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div className="bet-filter__config__line bet-filter__config__line--event">
            <div className="bet-filter__config__event">
              112 Events
            </div>
            <div className="bet-filter__config__nav">
              <ul className="bet-filter__config__nav__list">
                <li className="bet-filter__config__nav__item bet-filter__config__nav__item--reset">
                  <button className="bet-filter__config__nav__btn">
                    <span className="bet-filter__config__nav__icon">
                      <span className="img-container">
                        <svg width="15" height="15.25">
                          <use xlinkHref="#update" />
                        </svg>
                      </span>
                    </span>
                    <span className="bet-filter__config__nav__name">
                      Reset
                    </span>
                  </button>
                </li>
                <li className="bet-filter__config__nav__item bet-filter__config__nav__item--save">
                  {/* <!--                          TODO: add className active --> */}
                  <button className="bet-filter__config__nav__btn">
                    <span className="bet-filter__config__nav__icon">
                      <span className="img-container">
                        <svg width="18" height="16.94">
                          <use xlinkHref="#star" />
                        </svg>
                      </span>
                    </span>
                    <span className="bet-filter__config__nav__name">
                      Save my filters
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bet-live">
        <ul className="bet-live__list">
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn active">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/england.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                England
              </span>
              <span className="bet-live__num">
                14
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block active">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/spain.svg" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Spain
              </span>
              <span className="bet-live__num">
                20
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/Argentina.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Argentina
              </span>
              <span className="bet-live__num">
                10
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/tanzania.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Tanzania
              </span>
              <span className="bet-live__num">
                22
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/france.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                France
              </span>
              <span className="bet-live__num">
                18
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/Armenia.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Armenia
              </span>
              <span className="bet-live__num">
                17
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/Portugal.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Portugal
              </span>
              <span className="bet-live__num">
                16
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/Australia.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Australia
              </span>
              <span className="bet-live__num">
                9
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="bet-live__item">
            {/* <!--                    TODO: add className active--> */}
            <button className="bet-live__btn">
              <span className="bet-live__flag">
                <span className="img-container">
                  <img src="img/flag/Japan.png" alt="England" />
                </span>
              </span>
              <span className="bet-live__country">
                Japan
              </span>
              <span className="bet-live__num">
                7
              </span>
              <span className="bet-live__dropdown arrow-bottom">
                <span className="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add className active open dropdown--> */}
            <div className="bet-live__block">
              <div className="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div className="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div className="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div className="bet-rate">
                <ul className="bet-rate__list">
                  {/* <!--            TODO: add className bet-rate__item--marked for show yellow line--> */}
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div className="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              0
                            </div>
                            <div className="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div className="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              1
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-rate__item">
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team__block">
                          <div className="bet-rate__set__team__inner">
                            <div className="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div className="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div className="bet-rate__live__score">
                            <div className="bet-rate__live__num">
                              2
                            </div>
                            <div className="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div className="bet-rate__set__desc">
                          {/* <!--                    TODO: add className active --> */}
                          <div className="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div className="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <button className="bet-rate__set__btn bet-rate__set__btn--down">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add className hot for burn icon--> */}
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn bet-rate__set__btn--top">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="bet-item">
        <button className="bet-item__btn">
          <span className="bet-item__info">
            <span className="bet-item__quantity">
              <span>1</span>
              SINGLE
            </span>
            <span className="bet-item__price">
              3.10
            </span>
          </span>
          <span className="bet-item__arrow">
            <span className="img-container">
              <svg width="18px" height="11px">
                <use xlinkHref="#arrow-top" />
              </svg>
            </span>
          </span>
        </button>
        <div className="bet-item__block">
          <div className="bet-item__nav">
            <ul className="bet-item__nav__list">
              <li className="bet-item__nav__item">
                <a className="bet-item__nav__btn active" href="/">
                  Multi
                </a>
              </li>
              <li className="bet-item__nav__item">
                <a className="bet-item__nav__btn" href="/">
                  Single
                </a>
              </li>
              <li className="bet-item__nav__item">
                <a className="bet-item__nav__btn" href="/">
                  System
                </a>
              </li>
            </ul>
            <button className="bet-item__nav__close">
              <span className="img-container">
                <svg width="18px" height="11px">
                  <use xlinkHref="#arrow-top" />
                </svg>
              </span>
            </button>
          </div>
          <div className="bet-item__column bet-item__column--multi active">
            <div className="bet-item__hint">
              <div className="bet-item__hint__icon">
                <div className="img-container">
                  <svg width="22.8" height="22.8">
                    <use xlinkHref="#attention" />
                  </svg>
                </div>
              </div>
              <div className="bet-item__hint__info">
                Current bonus is 3 %, one more selection will give you 5%
              </div>
            </div>
            <div className="bet-item__team">
              <ul className="bet-item__team__list">
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Napoli
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Atalanta
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.53
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        1899 Hoffenheim
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Borussia Dortmund
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>x</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      4.20
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Republic of North Macedoniia
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Kosovo
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>2</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      3.05
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Ireland
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Wales
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Arminia
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Munichen
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      3.45
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Bielefeld
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        FC Bayern
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.15
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Arminia Lefeld
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Bayern Munich
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      1.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>

              </ul>
            </div>
            <div className="bet-item__panel">
              <form action="">
                <div className="bet-item__panel__row">
                  <div className="bet-item__panel__column">
                    <label className="bet-item__panel__label">
                      <span className="bet-item__panel__title">
                        Bet with
                      </span>
                      <select className="bet-item__panel__select" name="">
                        <option className="bet-item__panel__option" value="">
                          Units (12828)
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="bet-item__panel__column">
                    <div className="bet-item__panel__info">
                      <div className="bet-item__panel__name">
                        Amount
                      </div>
                      <div className="bet-item__panel__value">
                        -
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__total">
                  <div className="bet-item__panel__row">
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Totals odds
                        </div>
                        <div className="bet-item__panel__value">
                          125.47
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Possible tax
                        </div>
                        <div className="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-item__panel__row">
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Possible bonus
                        </div>
                        <div className="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info bet-item__panel__info--win">
                        <div className="bet-item__panel__name">
                          Possible Win
                        </div>
                        <div className="bet-item__panel__value">
                          140.550
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__row bet-item__panel__accept">
                  <div className="bet-item__panel__column">
                    <button className="bet-item__panel__trash" />
                  </div>
                  <div className="bet-item__panel__column">
                    <button className="bet-item__panel__btn bet-item__panel__btn--place">
                      PLACE BET
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bet-item__column bet-item__column--single">
            <div className="bet-item__hint">
              <div className="bet-item__hint__icon">
                <div className="img-container">
                  <svg width="22.8" height="22.8">
                    <use xlinkHref="#attention" />
                  </svg>
                </div>
              </div>
              <div className="bet-item__hint__info">
                Current bonus is 3 %, one more selection will give you 5%
              </div>
            </div>
            <div className="bet-item__team">
              <ul className="bet-item__team__list">
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Napoli
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Atalanta
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                      <label className="bet-item__team__amount">
                        <span className="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input className="bet-item__team__amount__number" type="text" value="320" />
                      </label>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.53
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Republic of North Macedoniia
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Kosovo
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>2</span>
                        </div>
                      </div>
                      <label className="bet-item__team__amount">
                        <span className="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input className="bet-item__team__amount__number" type="text" value="58" />
                      </label>
                    </div>
                    <div className="bet-item__team__ratio">
                      3.05
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Ireland
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Wales
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                      <label className="bet-item__team__amount">
                        <span className="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input className="bet-item__team__amount__number" type="text" value="400" />
                      </label>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Arminia Bielefeld
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        FC Bayern Munich
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                      <label className="bet-item__team__amount">
                        <span className="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input className="bet-item__team__amount__number" type="text" value="110" />
                      </label>
                    </div>
                    <div className="bet-item__team__ratio">
                      6.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Shalke
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Bayern Liverkuzen
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                      <label className="bet-item__team__amount">
                        <span className="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input className="bet-item__team__amount__number" type="text" value="220" />
                      </label>
                    </div>
                    <div className="bet-item__team__ratio">
                      3.20
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Arminia Bielefeld
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        FC Bayern Munich
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                      <label className="bet-item__team__amount">
                        <span className="bet-item__team__amount__name">
                          Amount
                        </span>
                        /
                      </label>
                    </div>
                    <div className="bet-item__team__ratio">
                      6.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
              </ul>
            </div>
            <div className="bet-item__panel">
              <form action="">
                <div className="bet-item__panel__row">
                  <div className="bet-item__panel__column">
                    <label className="bet-item__panel__label">
                      <span className="bet-item__panel__title">
                        Bet with
                      </span>
                      <select className="bet-item__panel__select" name="">
                        <option className="bet-item__panel__option" value="">
                          Units (12828)
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="bet-item__panel__column">
                    <div className="bet-item__panel__info">
                      <div className="bet-item__panel__name">
                        Amount
                      </div>
                      <div className="bet-item__panel__value">
                        -
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__total">
                  <div className="bet-item__panel__row">
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Possible Tax
                        </div>
                        <div className="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info bet-item__panel__info--win">
                        <div className="bet-item__panel__name">
                          Possible Win
                        </div>
                        <div className="bet-item__panel__value">
                          140.550
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__row bet-item__panel__accept">
                  <div className="bet-item__panel__column">
                    <button className="bet-item__panel__trash" />
                  </div>
                  <div className="bet-item__panel__column">
                    <button className="bet-item__panel__btn bet-item__panel__btn--place">
                      PLACE BET
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="bet-item__column bet-item__column--system">
            <div className="bet-item__hint">
              <div className="bet-item__hint__icon">
                <div className="img-container">
                  <svg width="22.8" height="22.8">
                    <use xlinkHref="#attention" />
                  </svg>
                </div>
              </div>
              <div className="bet-item__hint__info">
                Current bonus is 3 %, one more selection will give you 5%
              </div>
            </div>
            <div className="bet-item__team">
              <ul className="bet-item__team__list">
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Napoli
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Atalanta
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.53
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        1899 Hoffenheim
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Borussia Dortmund
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      4.20
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Republic of North Macedoniia
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Kosovo
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>2</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      3.05
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        France
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Denmark
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.35
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Valencia
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Sevilia
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      1.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
                <li className="bet-item__team__item">
                  <div className="bet-item__team__info">
                    <div className="bet-item__team__title">
                      <div className="bet-item__team__name">
                        Roma
                      </div>
                      <div className="bet-item__team__separator">
                        vs
                      </div>
                      <div className="bet-item__team__name">
                        Real Madrid
                      </div>
                      <div className="bet-item__team__total">
                        <div className="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__team__ratio">
                      2.80
                    </div>
                  </div>
                  <li className="bet-item__team__delete" />
                </li>
              </ul>
            </div>
            <div className="bet-item__panel">
              <form action="">
                <div className="bet-item__panel__row">
                  <div className="bet-item__panel__column">
                    <label className="bet-item__panel__label">
                      <span className="bet-item__panel__title">
                        Bet with
                      </span>
                      <select className="bet-item__panel__select" name="">
                        <option className="bet-item__panel__option" value="">
                          Units (12828)
                        </option>
                      </select>
                    </label>
                  </div>
                  <div className="bet-item__panel__column">
                    <label className="bet-item__panel__number">
                      <input className="bet-item__panel__number__value" type="number" value="1255" />
                    </label>
                  </div>
                </div>
                <div className="bet-item__panel__row bet-item__panel__row--combination">
                  <label className="bet-item__panel__number">
                    <span className="bet-item__panel__title">
                      Combination amount
                    </span>
                    <input className="bet-item__panel__number__value" type="number" value="0" />
                    <span className="bet-item__panel__title">
                      of 5
                    </span>
                  </label>
                </div>
                <div className="bet-item__panel__total">
                  <div className="bet-item__panel__row">
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Possible Combos
                        </div>
                        <div className="bet-item__panel__value">
                          10
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Totals Odds
                        </div>
                        <div className="bet-item__panel__value">
                          28.05
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-item__panel__row">
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info">
                        <div className="bet-item__panel__name">
                          Possible Tax
                        </div>
                        <div className="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info bet-item__panel__info--amount">
                        <div className="bet-item__panel__name">
                          Min. bet amount must be
                        </div>
                        <div className="bet-item__panel__value">
                          500
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bet-item__panel__row">
                    <div className="bet-item__panel__column">
                      <div className="bet-item__panel__info bet-item__panel__info--win">
                        <div className="bet-item__panel__name">
                          Possible Win
                        </div>
                        <div className="bet-item__panel__value">
                          587465
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__row bet-item__panel__accept">
                  <div className="bet-item__panel__column">
                    <button className="bet-item__panel__trash" />
                  </div>
                  <div className="bet-item__panel__column">
                    <button className="bet-item__panel__btn bet-item__panel__btn--place">
                      PLACE BET
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bet-search">
        <div className="bet-search__value">
          <label className="bet-search__label" for="">
            <input className="bet-search__input" type="text" placeholder="Search" />
            <button className="bet-search__del">
              <span className="img-container">
                <svg width="18.63px" height="18.63">
                  <use xlinkHref="#close-icon-2" />
                </svg>
              </span>
            </button>
          </label>
        </div>
        {/* <!--          TODO: add className active when show result--> */}
        <div className="bet-search__result active">
          <div className="bet-search__quantity">
            Search results 1
          </div>
          <ul className="bet-search__list">
            <li className="bet-search__item">
              <div className="bet-search__title">
                Europe / UEFA Euro CUP Cualification
              </div>
              <div className="bet-search__team">
                <span className="bet-search__club">
                  Napoli
                  <span className="bet-search__separate">
                    vs
                  </span>
                  Atalanta
                </span>
                <span className="bet-search__time">
                  08 Oct   22:00
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="bet-search__empty">
          <div className="img-container">
            <svg>
              <use xlinkHref="#empty" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</>;

export default Live;
