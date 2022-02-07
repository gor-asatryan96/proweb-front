import React from 'react';
import SportMenu from '../components/SportMenu/SportMenu';

const Live = () => <>
  <SportMenu />
  <section class="bet live">
    <div class="container bet__container">
      <div class="bet-filter__block active">
        <div class="bet-filter">
          <ul class="bet-filter__list">
            <li class="bet-filter__item">
              <a class="bet-filter__btn active" href="index.html">
                ALL GAMES
              </a>
            </li>
            <li class="bet-filter__item">
              <a class="bet-filter__btn" href="/">
                WHITH VIDEO
              </a>
            </li>
            <li class="bet-filter__item bet-filter__item--filter">
              {/* <!--                TODO: add class active or selected--> */}
              <a class="bet-filter__btn bet-filter__btn--filter" href="/">
                <span class="img-container">
                  <span class="bet-filter__icon">
                    <svg width="21.46" height="22">
                      <use xlinkHref="#filter" />
                    </svg>
                  </span>
                </span>
              </a>
            </li>
            <li class="bet-filter__item bet-filter__item--search">
              <a class="bet-filter__btn bet-filter__btn--search" href="/">
                <span class="img-container">
                  <svg width="26.2" height="26.2">
                    <use xlinkHref="#search" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* <!--          TODO: add class active when open upcoming filter --> */}
        <div class="bet-filter__upcoming active">
          <div class="bet-filter__config__line bet-filter__config__line--type">
            <ul class="bet-type__list">
              {/* <!--                TODO: add class .bet-type__item--active --> */}
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
        {/* <!--          TODO: add class active when open filter--> */}
        <div class="bet-filter__config">
          <div class="bet-filter__config__line bet-filter__config__line--match">
            <ul class="bet-filter__config__list">
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      All
                    </span>
                  </span>
                </label>
              </li>
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      UEFA Scepials
                    </span>
                  </span>
                </label>
              </li>
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      Bundesliga
                    </span>
                  </span>
                </label>
              </li>
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      La Liga
                    </span>
                  </span>
                </label>
              </li>
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      LSeria A
                    </span>
                  </span>
                </label>
              </li>
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      La Liga
                    </span>
                  </span>
                </label>
              </li>
              <li class="bet-filter__config__item">
                <label class="bet-filter__config__label">
                  <span class="checkbox-2 bet-filter__config__checkbox">
                    <input class="checkbox-2__btn" type="checkbox" />
                    <span class="checkbox-2__icon" />
                    <span class="bet-filter__config__name">
                      Ligue 1
                    </span>
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <div class="bet-filter__config__line bet-filter__config__line--event">
            <div class="bet-filter__config__event">
              112 Events
            </div>
            <div class="bet-filter__config__nav">
              <ul class="bet-filter__config__nav__list">
                <li class="bet-filter__config__nav__item bet-filter__config__nav__item--reset">
                  <button class="bet-filter__config__nav__btn">
                    <span class="bet-filter__config__nav__icon">
                      <span class="img-container">
                        <svg width="15" height="15.25">
                          <use xlinkHref="#update" />
                        </svg>
                      </span>
                    </span>
                    <span class="bet-filter__config__nav__name">
                      Reset
                    </span>
                  </button>
                </li>
                <li class="bet-filter__config__nav__item bet-filter__config__nav__item--save">
                  {/* <!--                          TODO: add class active --> */}
                  <button class="bet-filter__config__nav__btn">
                    <span class="bet-filter__config__nav__icon">
                      <span class="img-container">
                        <svg width="18" height="16.94">
                          <use xlinkHref="#star" />
                        </svg>
                      </span>
                    </span>
                    <span class="bet-filter__config__nav__name">
                      Save my filters
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bet-live">
        <ul class="bet-live__list">
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn active">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/england.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                England
              </span>
              <span class="bet-live__num">
                14
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block active">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/spain.svg" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Spain
              </span>
              <span class="bet-live__num">
                20
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/Argentina.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Argentina
              </span>
              <span class="bet-live__num">
                10
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/tanzania.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Tanzania
              </span>
              <span class="bet-live__num">
                22
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/france.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                France
              </span>
              <span class="bet-live__num">
                18
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/Armenia.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Armenia
              </span>
              <span class="bet-live__num">
                17
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/Portugal.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Portugal
              </span>
              <span class="bet-live__num">
                16
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/Australia.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Australia
              </span>
              <span class="bet-live__num">
                9
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
          <li class="bet-live__item">
            {/* <!--                    TODO: add class active--> */}
            <button class="bet-live__btn">
              <span class="bet-live__flag">
                <span class="img-container">
                  <img src="img/flag/Japan.png" alt="England" />
                </span>
              </span>
              <span class="bet-live__country">
                Japan
              </span>
              <span class="bet-live__num">
                7
              </span>
              <span class="bet-live__dropdown arrow-bottom">
                <span class="img-container">
                  <svg width="12px" height="7px">
                    <use xlinkHref="#arrow-bottom" />
                  </svg>
                </span>
              </span>
            </button>
            {/* <!--                    TODO: add class active open dropdown--> */}
            <div class="bet-live__block">
              <div class="bet-live__team">
                <span>
                  Premier League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Liverpool
                            </div>
                            <div class="bet-rate__set__team">
                              Aston Villa
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Chelsea
                            </div>
                            <div class="bet-rate__set__team">
                              Manchester United
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.90
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="bet-live__team">
                <span>
                  National League
                </span>
              </div>
              <div class="bet-rate">
                <ul class="bet-rate__list">
                  {/* <!--            TODO: add class bet-rate__item--marked for show yellow line--> */}
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Wrexham FC
                            </div>
                            <div class="bet-rate__set__team">
                              Barnet FC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              0
                            </div>
                            <div class="bet-rate__live__num">
                              1
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 5m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn hot">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.52
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Bromley FC
                            </div>
                            <div class="bet-rate__set__team">
                              Wexmouth EC
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              1
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 25m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.30
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            4.20
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
                            1.71
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li class="bet-rate__item">
                    <div class="bet-rate__set">
                      <div class="bet-rate__set__info">
                        <div class="bet-rate__set__team__block">
                          <div class="bet-rate__set__team__inner">
                            <div class="bet-rate__set__team">
                              Arsenal
                            </div>
                            <div class="bet-rate__set__team">
                              Leicester City
                            </div>
                          </div>
                          <div class="bet-rate__live__score">
                            <div class="bet-rate__live__num">
                              2
                            </div>
                            <div class="bet-rate__live__num">
                              0
                            </div>
                          </div>
                        </div>
                        <div class="bet-rate__set__desc">
                          {/* <!--                    TODO: add class active --> */}
                          <div class="bet-rate__set__quantity active">
                            +367
                          </div>
                          <div class="bet-rate__set__date">
                            1st Half 35m
                          </div>
                        </div>
                      </div>
                      <div class="bet-rate__set__nav">
                        <button class="bet-rate__set__btn bet-rate__set__btn--down">
                          <span class="bet-rate__set__number">
                            1
                          </span>
                          <span class="bet-rate__set__coefficient">
                            2.47
                          </span>
                        </button>
                        {/* <!--                  TODO: add class hot for burn icon--> */}
                        <button class="bet-rate__set__btn">
                          <span class="bet-rate__set__number">
                            X
                          </span>
                          <span class="bet-rate__set__coefficient">
                            3.10
                          </span>
                        </button>
                        <button class="bet-rate__set__btn bet-rate__set__btn--top">
                          <span class="bet-rate__set__number">
                            2
                          </span>
                          <span class="bet-rate__set__coefficient">
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
      <div class="bet-item">
        <button class="bet-item__btn">
          <span class="bet-item__info">
            <span class="bet-item__quantity">
              <span>1</span>
              SINGLE
            </span>
            <span class="bet-item__price">
              3.10
            </span>
          </span>
          <span class="bet-item__arrow">
            <span class="img-container">
              <svg width="18px" height="11px">
                <use xlinkHref="#arrow-top" />
              </svg>
            </span>
          </span>
        </button>
        <div class="bet-item__block">
          <div class="bet-item__nav">
            <ul class="bet-item__nav__list">
              <li class="bet-item__nav__item">
                <a class="bet-item__nav__btn active" href="/">
                  Multi
                </a>
              </li>
              <li class="bet-item__nav__item">
                <a class="bet-item__nav__btn" href="/">
                  Single
                </a>
              </li>
              <li class="bet-item__nav__item">
                <a class="bet-item__nav__btn" href="/">
                  System
                </a>
              </li>
            </ul>
            <button class="bet-item__nav__close">
              <span class="img-container">
                <svg width="18px" height="11px">
                  <use xlinkHref="#arrow-top" />
                </svg>
              </span>
            </button>
          </div>
          <div class="bet-item__column bet-item__column--multi active">
            <div class="bet-item__hint">
              <div class="bet-item__hint__icon">
                <div class="img-container">
                  <svg width="22.8" height="22.8">
                    <use xlinkHref="#attention" />
                  </svg>
                </div>
              </div>
              <div class="bet-item__hint__info">
                Current bonus is 3 %, one more selection will give you 5%
              </div>
            </div>
            <div class="bet-item__team">
              <ul class="bet-item__team__list">
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Napoli
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Atalanta
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.53
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        1899 Hoffenheim
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Borussia Dortmund
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>x</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      4.20
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Republic of North Macedoniia
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Kosovo
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>2</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      3.05
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Ireland
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Wales
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Arminia
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Munichen
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      3.45
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Bielefeld
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        FC Bayern
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.15
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Arminia Lefeld
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Bayern Munich
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      1.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>

              </ul>
            </div>
            <div class="bet-item__panel">
              <form action="">
                <div class="bet-item__panel__row">
                  <div class="bet-item__panel__column">
                    <label class="bet-item__panel__label">
                      <span class="bet-item__panel__title">
                        Bet with
                      </span>
                      <select class="bet-item__panel__select" name="">
                        <option class="bet-item__panel__option" value="">
                          Units (12828)
                        </option>
                      </select>
                    </label>
                  </div>
                  <div class="bet-item__panel__column">
                    <div class="bet-item__panel__info">
                      <div class="bet-item__panel__name">
                        Amount
                      </div>
                      <div class="bet-item__panel__value">
                        -
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bet-item__panel__total">
                  <div class="bet-item__panel__row">
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Totals odds
                        </div>
                        <div class="bet-item__panel__value">
                          125.47
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Possible tax
                        </div>
                        <div class="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bet-item__panel__row">
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Possible bonus
                        </div>
                        <div class="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info bet-item__panel__info--win">
                        <div class="bet-item__panel__name">
                          Possible Win
                        </div>
                        <div class="bet-item__panel__value">
                          140.550
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bet-item__panel__row bet-item__panel__accept">
                  <div class="bet-item__panel__column">
                    <button class="bet-item__panel__trash" />
                  </div>
                  <div class="bet-item__panel__column">
                    <button class="bet-item__panel__btn bet-item__panel__btn--place">
                      PLACE BET
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="bet-item__column bet-item__column--single">
            <div class="bet-item__hint">
              <div class="bet-item__hint__icon">
                <div class="img-container">
                  <svg width="22.8" height="22.8">
                    <use xlinkHref="#attention" />
                  </svg>
                </div>
              </div>
              <div class="bet-item__hint__info">
                Current bonus is 3 %, one more selection will give you 5%
              </div>
            </div>
            <div class="bet-item__team">
              <ul class="bet-item__team__list">
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Napoli
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Atalanta
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                      <label class="bet-item__team__amount">
                        <span class="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input class="bet-item__team__amount__number" type="text" value="320" />
                      </label>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.53
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Republic of North Macedoniia
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Kosovo
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>2</span>
                        </div>
                      </div>
                      <label class="bet-item__team__amount">
                        <span class="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input class="bet-item__team__amount__number" type="text" value="58" />
                      </label>
                    </div>
                    <div class="bet-item__team__ratio">
                      3.05
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Ireland
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Wales
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                      <label class="bet-item__team__amount">
                        <span class="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input class="bet-item__team__amount__number" type="text" value="400" />
                      </label>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Arminia Bielefeld
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        FC Bayern Munich
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                      <label class="bet-item__team__amount">
                        <span class="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input class="bet-item__team__amount__number" type="text" value="110" />
                      </label>
                    </div>
                    <div class="bet-item__team__ratio">
                      6.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Shalke
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Bayern Liverkuzen
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                      <label class="bet-item__team__amount">
                        <span class="bet-item__team__amount__name">
                          Amount
                        </span>
                        <input class="bet-item__team__amount__number" type="text" value="220" />
                      </label>
                    </div>
                    <div class="bet-item__team__ratio">
                      3.20
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Arminia Bielefeld
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        FC Bayern Munich
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                      <label class="bet-item__team__amount">
                        <span class="bet-item__team__amount__name">
                          Amount
                        </span>
                        /
                      </label>
                    </div>
                    <div class="bet-item__team__ratio">
                      6.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
              </ul>
            </div>
            <div class="bet-item__panel">
              <form action="">
                <div class="bet-item__panel__row">
                  <div class="bet-item__panel__column">
                    <label class="bet-item__panel__label">
                      <span class="bet-item__panel__title">
                        Bet with
                      </span>
                      <select class="bet-item__panel__select" name="">
                        <option class="bet-item__panel__option" value="">
                          Units (12828)
                        </option>
                      </select>
                    </label>
                  </div>
                  <div class="bet-item__panel__column">
                    <div class="bet-item__panel__info">
                      <div class="bet-item__panel__name">
                        Amount
                      </div>
                      <div class="bet-item__panel__value">
                        -
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bet-item__panel__total">
                  <div class="bet-item__panel__row">
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Possible Tax
                        </div>
                        <div class="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info bet-item__panel__info--win">
                        <div class="bet-item__panel__name">
                          Possible Win
                        </div>
                        <div class="bet-item__panel__value">
                          140.550
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bet-item__panel__row bet-item__panel__accept">
                  <div class="bet-item__panel__column">
                    <button class="bet-item__panel__trash" />
                  </div>
                  <div class="bet-item__panel__column">
                    <button class="bet-item__panel__btn bet-item__panel__btn--place">
                      PLACE BET
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="bet-item__column bet-item__column--system">
            <div class="bet-item__hint">
              <div class="bet-item__hint__icon">
                <div class="img-container">
                  <svg width="22.8" height="22.8">
                    <use xlinkHref="#attention" />
                  </svg>
                </div>
              </div>
              <div class="bet-item__hint__info">
                Current bonus is 3 %, one more selection will give you 5%
              </div>
            </div>
            <div class="bet-item__team">
              <ul class="bet-item__team__list">
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Napoli
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Atalanta
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.53
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        1899 Hoffenheim
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Borussia Dortmund
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>X</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      4.20
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Republic of North Macedoniia
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Kosovo
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>2</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      3.05
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        France
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Denmark
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.35
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Valencia
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Sevilia
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      1.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
                <li class="bet-item__team__item">
                  <div class="bet-item__team__info">
                    <div class="bet-item__team__title">
                      <div class="bet-item__team__name">
                        Roma
                      </div>
                      <div class="bet-item__team__separator">
                        vs
                      </div>
                      <div class="bet-item__team__name">
                        Real Madrid
                      </div>
                      <div class="bet-item__team__total">
                        <div class="bet-item__team__result">
                          Match Result: <span>1</span>
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__team__ratio">
                      2.80
                    </div>
                  </div>
                  <li class="bet-item__team__delete" />
                </li>
              </ul>
            </div>
            <div class="bet-item__panel">
              <form action="">
                <div class="bet-item__panel__row">
                  <div class="bet-item__panel__column">
                    <label class="bet-item__panel__label">
                      <span class="bet-item__panel__title">
                        Bet with
                      </span>
                      <select class="bet-item__panel__select" name="">
                        <option class="bet-item__panel__option" value="">
                          Units (12828)
                        </option>
                      </select>
                    </label>
                  </div>
                  <div class="bet-item__panel__column">
                    <label class="bet-item__panel__number">
                      <input class="bet-item__panel__number__value" type="number" value="1255" />
                    </label>
                  </div>
                </div>
                <div class="bet-item__panel__row bet-item__panel__row--combination">
                  <label class="bet-item__panel__number">
                    <span class="bet-item__panel__title">
                      Combination amount
                    </span>
                    <input class="bet-item__panel__number__value" type="number" value="0" />
                    <span class="bet-item__panel__title">
                      of 5
                    </span>
                  </label>
                </div>
                <div class="bet-item__panel__total">
                  <div class="bet-item__panel__row">
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Possible Combos
                        </div>
                        <div class="bet-item__panel__value">
                          10
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Totals Odds
                        </div>
                        <div class="bet-item__panel__value">
                          28.05
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bet-item__panel__row">
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info">
                        <div class="bet-item__panel__name">
                          Possible Tax
                        </div>
                        <div class="bet-item__panel__value">
                          0
                        </div>
                      </div>
                    </div>
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info bet-item__panel__info--amount">
                        <div class="bet-item__panel__name">
                          Min. bet amount must be
                        </div>
                        <div class="bet-item__panel__value">
                          500
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bet-item__panel__row">
                    <div class="bet-item__panel__column">
                      <div class="bet-item__panel__info bet-item__panel__info--win">
                        <div class="bet-item__panel__name">
                          Possible Win
                        </div>
                        <div class="bet-item__panel__value">
                          587465
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bet-item__panel__row bet-item__panel__accept">
                  <div class="bet-item__panel__column">
                    <button class="bet-item__panel__trash" />
                  </div>
                  <div class="bet-item__panel__column">
                    <button class="bet-item__panel__btn bet-item__panel__btn--place">
                      PLACE BET
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bet-search">
        <div class="bet-search__value">
          <label class="bet-search__label" for="">
            <input class="bet-search__input" type="text" placeholder="Search" />
            <button class="bet-search__del">
              <span class="img-container">
                <svg width="18.63px" height="18.63">
                  <use xlinkHref="#close-icon-2" />
                </svg>
              </span>
            </button>
          </label>
        </div>
        {/* <!--          TODO: add class active when show result--> */}
        <div class="bet-search__result active">
          <div class="bet-search__quantity">
            Search results 1
          </div>
          <ul class="bet-search__list">
            <li class="bet-search__item">
              <div class="bet-search__title">
                Europe / UEFA Euro CUP Cualification
              </div>
              <div class="bet-search__team">
                <span class="bet-search__club">
                  Napoli
                  <span class="bet-search__separate">
                    vs
                  </span>
                  Atalanta
                </span>
                <span class="bet-search__time">
                  08 Oct   22:00
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div class="bet-search__empty">
          <div class="img-container">
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
