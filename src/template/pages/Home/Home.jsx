import React from 'react';
import { useMediaQuery } from 'react-responsive';
import img1 from '../../assets/images/advertising/1.jpg';
import img2 from '../../assets/images/advertising/2.jpg';
import img3 from '../../assets/images/advertising/3.jpg';
import img4 from '../../assets/images/games/1.jpg';
import img5 from '../../assets/images/games/2.jpg';
import img6 from '../../assets/images/casino-game/1.jpg';
import bannerIcon from '../../assets/images/games/9.jpg';
import { MEDIA_QUERIES } from '../../../constants/mediaQuery.constants';

const Home = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  return (
    <section className="live-casino">
      <div className="container">
        <div className="casino-block">
          {isDesktop && (
          <div className="casino-block__images">
            <div className="casino-block__image">
              <div className="img-container">
                <img src={bannerIcon} alt="bannerIcon" />
              </div>
            </div>
            <div className="casino-block__image">
              <div className="img-container">
                <img src={bannerIcon} alt="bannerIcon" />
              </div>
            </div>
            <div className="casino-block__image">
              <div className="img-container">
                <img src={bannerIcon} alt="bannerIcon" />
              </div>
            </div>
          </div>
          )
          }
          <div className="casino-advertising">
            <ul className="bet-advertising__list">
              <li className="bet-advertising__item bet-advertising__item--right">
                <div className="img-container">
                  <img className="bet-advertising__img" src={img1} alt="Advertising" />
                </div>
                <div className="bet-advertising__info">
                  <div className="bet-advertising__desc">
                    <div className="bet-advertising__caption">
                      Jackpot
                    </div>
                    {/* <!--                        TODO: add className ".bet-advertising__price--orange" for orange color--> */}
                    <div className="bet-advertising__price bet-advertising__price--orange">
                      $1.000.000
                    </div>
                  </div>
                </div>
              </li>
              {/* <!--                  TODO: add className ".bet-advertising__item--right" info align right--> */}
              <li className="bet-advertising__item bet-advertising__item--right">
                <div className="img-container">
                  <img className="bet-advertising__img" src={img2} alt="Advertising" />
                </div>
                <div className="bet-advertising__info">
                  <div className="bet-advertising__desc">
                    <div className="bet-advertising__caption">
                      Jackpot
                    </div>
                    {/* <!--                        TODO: add className ".bet-advertising__price--orange" for orange color--> */}
                    <div className="bet-advertising__price bet-advertising__price--orange">
                      $100.000
                    </div>
                  </div>
                </div>
              </li>
              {/* <!--                  TODO: add className ".bet-advertising__item--left" info align right--> */}
              <li className="bet-advertising__item bet-advertising__item--right">
                <div className="img-container">
                  <img className="bet-advertising__img" src={img3} alt="Advertising" />
                </div>
                <div className="bet-advertising__info">
                  <div className="bet-advertising__desc">
                    <div className="bet-advertising__caption">
                      Jackpot
                    </div>
                    {/* <!--                        TODO: add className ".bet-advertising__price--orange" for orange color--> */}
                    <div className="bet-advertising__price bet-advertising__price--orange">
                      $1.000.000
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {isDesktop && (
          <div className="casino-filter">
            <ul className="bet-type__list">
              <li className="bet-type__item">
                <button className="bet-type__link active">
                  All
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Video Slots
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Table Games
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Top Slots
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Classic Slots
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Video Poker
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Daily Jackpots
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Drops & Wins
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Jackpots
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  New
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Cgukua Tano
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Color Boom
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  Wof
                </button>
              </li>
              <li className="bet-type__item">
                <button className="bet-type__link">
                  +7
                </button>
              </li>
            </ul>
          </div>
          )}
          <div className="live-casino__row">
            <div className="live-casino__column">
              <div className="live-casino__category">
                <div className="live-casino__category__icon">
                  <div className="img-container">
                    <svg>
                      <use xlinkHref="#sport-gray" />
                    </svg>
                  </div>
                </div>
                <div className="live-casino__category__title">
                  Sport
                </div>
              </div>
              <div className="live-casino__match">
                <ul className="bet-match__list">
                  <li className="bet-match__item bet-match__item--football">
                    <div className="bet-match__header">
                      <div className="bet-match__top">
                        TOP
                      </div>
                      <div className="bet-match__country">
                        <div className="bet-match__name">
                          Football
                          <span className="bet-match__name__separate">|</span>
                          Europe / UEFA Euro CUP Cualification
                        </div>
                      </div>
                      {isDesktop && (
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
                          <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                            <div className="img-container">
                              <svg>
                                <use xlinkHref="#star" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="bet-rate__nav__item">
                          <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                            <div className="img-container">
                              <svg preserveAspectRatio="none">
                                <use xlinkHref="#mark" />
                              </svg>
                            </div>
                            <div className="bet-rate__nav__quantity">
                              +367
                            </div>
                          </a>
                        </li>
                      </ul>
                      )}
                    </div>
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team">
                          Napoli
                        </div>
                        <div className="bet-rate__set__team">
                          Atalanta
                        </div>
                        <div className="bet-rate__set__rate">
                          +367
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <div className="bet-rate__live__score">
                          <div className="bet-rate__live__time">
                            08 Oct 22:00
                          </div>
                        </div>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.53
                          </span>
                        </button>
                        <button className="bet-rate__set__btn hot">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.85
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
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
                  <li className="bet-match__item bet-match__item--football">
                    <div className="bet-match__header">
                      <div className="bet-match__top">
                        TOP
                      </div>
                      <div className="bet-match__country">
                        <div className="bet-match__name">
                          Football
                          <span className="bet-match__name__separate">|</span>
                          Europe / UEFA Euro CUP Cualification
                        </div>
                      </div>
                      {isDesktop && (
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
                          <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                            <div className="img-container">
                              <svg>
                                <use xlinkHref="#star" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="bet-rate__nav__item">
                          <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                            <div className="img-container">
                              <svg preserveAspectRatio="none">
                                <use xlinkHref="#mark" />
                              </svg>
                            </div>
                            <div className="bet-rate__nav__quantity">
                              +367
                            </div>
                          </a>
                        </li>
                      </ul>
                      )}
                    </div>
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team">
                          Napoli
                        </div>
                        <div className="bet-rate__set__team">
                          Atalanta
                        </div>
                        <div className="bet-rate__set__rate">
                          +367
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <div className="bet-rate__live__score">
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__time">
                            08 Oct 22:00
                          </div>
                        </div>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.65
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-match__item bet-match__item--football">
                    <div className="bet-match__header">
                      <div className="bet-match__top">
                        TOP
                      </div>
                      <div className="bet-match__country">
                        <div className="bet-match__name">
                          Football
                          <span className="bet-match__name__separate">|</span>
                          Europe / UEFA Euro CUP Cualification
                        </div>
                      </div>
                      {isDesktop && (
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
                          <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                            <div className="img-container">
                              <svg>
                                <use xlinkHref="#star" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="bet-rate__nav__item">
                          <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                            <div className="img-container">
                              <svg preserveAspectRatio="none">
                                <use xlinkHref="#mark" />
                              </svg>
                            </div>
                            <div className="bet-rate__nav__quantity">
                              +367
                            </div>
                          </a>
                        </li>
                      </ul>
                      )}
                    </div>
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team">
                          Napoli
                        </div>
                        <div className="bet-rate__set__team">
                          Atalanta
                        </div>
                        <div className="bet-rate__set__rate">
                          +367
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <div className="bet-rate__live__score">
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__time">
                            08 Oct 22:00
                          </div>
                        </div>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.65
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="casino-game__more">
                <button className="btn casino-game__load">
                  See All
                </button>
              </div>
            </div>
            <div className="live-casino__column">
              <div className="live-casino__category">
                <div className="live-casino__category__icon">
                  <div className="img-container">
                    <svg>
                      <use xlinkHref="#live-gray" />
                    </svg>
                  </div>
                </div>
                <div className="live-casino__category__title">
                  Live
                </div>
              </div>
              <div className="live-casino__match">
                <ul className="bet-match__list">
                  <li className="bet-match__item bet-match__item--football">
                    <div className="bet-match__header">
                      <div className="bet-match__top">
                        TOP
                      </div>
                      <div className="bet-match__country">
                        <div className="bet-match__name">
                          Football
                          <span className="bet-match__name__separate">|</span>
                          Europe / UEFA Euro CUP Cualification
                        </div>
                      </div>
                      {isDesktop && (
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
                          <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                            <div className="img-container">
                              <svg>
                                <use xlinkHref="#star" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="bet-rate__nav__item">
                          <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                            <div className="img-container">
                              <svg preserveAspectRatio="none">
                                <use xlinkHref="#mark" />
                              </svg>
                            </div>
                            <div className="bet-rate__nav__quantity">
                              +367
                            </div>
                          </a>
                        </li>
                      </ul>
                      )}
                    </div>
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team">
                          Napoli
                        </div>
                        <div className="bet-rate__set__team">
                          Atalanta
                        </div>
                        <div className="bet-rate__set__rate">
                          +367
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <div className="bet-rate__live__score">
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__time">
                            08 Oct 22:00
                          </div>
                        </div>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.65
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-match__item bet-match__item--football">
                    <div className="bet-match__header">
                      <div className="bet-match__top">
                        TOP
                      </div>
                      <div className="bet-match__country">
                        <div className="bet-match__name">
                          Football
                          <span className="bet-match__name__separate">|</span>
                          Europe / UEFA Euro CUP Cualification
                        </div>
                      </div>
                      {isDesktop && (
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
                          <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                            <div className="img-container">
                              <svg>
                                <use xlinkHref="#star" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="bet-rate__nav__item">
                          <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                            <div className="img-container">
                              <svg preserveAspectRatio="none">
                                <use xlinkHref="#mark" />
                              </svg>
                            </div>
                            <div className="bet-rate__nav__quantity">
                              +367
                            </div>
                          </a>
                        </li>
                      </ul>
                      )}
                    </div>
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team">
                          Napoli
                        </div>
                        <div className="bet-rate__set__team">
                          Atalanta
                        </div>
                        <div className="bet-rate__set__rate">
                          +367
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <div className="bet-rate__live__score">
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__time">
                            08 Oct 22:00
                          </div>
                        </div>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.65
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="bet-match__item bet-match__item--football">
                    <div className="bet-match__header">
                      <div className="bet-match__top">
                        TOP
                      </div>
                      <div className="bet-match__country">
                        <div className="bet-match__name">
                          Football
                          <span className="bet-match__name__separate">|</span>
                          Europe / UEFA Euro CUP Cualification
                        </div>
                      </div>
                      {isDesktop && (
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
                          <a className="bet-rate__nav__link bet-rate__nav__link--favorite active" href="/">
                            <div className="img-container">
                              <svg>
                                <use xlinkHref="#star" />
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li className="bet-rate__nav__item">
                          <a className="bet-rate__nav__link bet-rate__nav__link--quantity active" href="/">
                            <div className="img-container">
                              <svg preserveAspectRatio="none">
                                <use xlinkHref="#mark" />
                              </svg>
                            </div>
                            <div className="bet-rate__nav__quantity">
                              +367
                            </div>
                          </a>
                        </li>
                      </ul>
                      )}
                    </div>
                    <div className="bet-rate__set">
                      <div className="bet-rate__set__info">
                        <div className="bet-rate__set__team">
                          Napoli
                        </div>
                        <div className="bet-rate__set__team">
                          Atalanta
                        </div>
                        <div className="bet-rate__set__rate">
                          +367
                        </div>
                      </div>
                      <div className="bet-rate__set__nav">
                        <div className="bet-rate__live__score">
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__num">
                            0
                          </div>
                          <div className="bet-rate__live__time">
                            08 Oct 22:00
                          </div>
                        </div>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            1
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.10
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            X
                          </span>
                          <span className="bet-rate__set__coefficient">
                            3.20
                          </span>
                        </button>
                        <button className="bet-rate__set__btn">
                          <span className="bet-rate__set__number">
                            2
                          </span>
                          <span className="bet-rate__set__coefficient">
                            2.65
                          </span>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="casino-game__more">
                  <button className="btn casino-game__load">
                    See All
                  </button>
                </div>
              </div>
            </div>
            <div className="live-casino__column live-casino__column--casino">
              <div className="live-casino__category">
                <div className="live-casino__category__icon">
                  <div className="img-container">
                    <svg>
                      <use xlinkHref="#casino-gray" />
                    </svg>
                  </div>
                </div>
                <div className="live-casino__category__title">
                  Casino
                </div>
              </div>
              <div className="live-casino__advertising">
                <ul className="casino-game__list">
                  {/* <!--            TODO: add className new, popular, recently--> */}
                  <li className="casino-game__item">
                    <div className="casino-game__img">
                      <div className="img-container">
                        <img src={img4} alt="Casino game" />
                      </div>
                      <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                        <div className="img-container">
                          <svg>
                            <use xlinkHref="#star" />
                          </svg>
                        </div>
                      </a>
                      <div className="casino-game__play">
                        <div className="casino-game__title">
                          BOOK OF DEAD
                        </div>
                        <div className="casino-game__visit">
                          <a className="casino-game__btn casino-game__now" href="/">
                            PLAY NOW
                          </a>
                          <a className="casino-game__btn casino-game__practise" href="/">
                            PRACTICE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="casino-game__name">
                      Dracon Throne
                    </div>
                  </li>
                  <li className="casino-game__item">
                    <div className="casino-game__img">
                      <div className="img-container">
                        <img src={img5} alt="Casino game" />
                      </div>
                      <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                        <div className="img-container">
                          <svg>
                            <use xlinkHref="#star" />
                          </svg>
                        </div>
                      </a>
                      <div className="casino-game__play">
                        <div className="casino-game__title">
                          BOOK OF DEAD
                        </div>
                        <div className="casino-game__visit">
                          <a className="casino-game__btn casino-game__now" href="/">
                            PLAY NOW
                          </a>
                          <a className="casino-game__btn casino-game__practise" href="/">
                            PRACTICE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="casino-game__name">
                      Prince of Olympus
                    </div>
                  </li>
                  <li className="casino-game__item">
                    <div className="casino-game__img">
                      <div className="img-container">
                        <img src={img4} alt="Casino game" />
                      </div>
                      <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                        <div className="img-container">
                          <svg>
                            <use xlinkHref="#star" />
                          </svg>
                        </div>
                      </a>
                      <div className="casino-game__play">
                        <div className="casino-game__title">
                          BOOK OF DEAD
                        </div>
                        <div className="casino-game__visit">
                          <a className="casino-game__btn casino-game__now" href="/">
                            PLAY NOW
                          </a>
                          <a className="casino-game__btn casino-game__practise" href="/">
                            PRACTICE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="casino-game__name">
                      Dracon Throne
                    </div>
                  </li>
                  <li className="casino-game__item">
                    <div className="casino-game__img">
                      <div className="img-container">
                        <img src={img5} alt="Casino game" />
                      </div>
                      <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                        <div className="img-container">
                          <svg>
                            <use xlinkHref="#star" />
                          </svg>
                        </div>
                      </a>
                      <div className="casino-game__play">
                        <div className="casino-game__title">
                          BOOK OF DEAD
                        </div>
                        <div className="casino-game__visit">
                          <a className="casino-game__btn casino-game__now" href="/">
                            PLAY NOW
                          </a>
                          <a className="casino-game__btn casino-game__practise" href="/">
                            PRACTICE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="casino-game__name">
                      Prince of Olympus
                    </div>
                  </li>
                </ul>
                <div className="casino-game__more">
                  <button className="btn casino-game__load">
                    See All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="live-casino__row live-casino__row--game">
            <div className="live-casino__category">
              <div className="live-casino__category__icon">
                <div className="img-container">
                  <svg>
                    <use xlinkHref="#live-casino-gray" />
                  </svg>
                </div>
              </div>
              <div className="live-casino__category__title">
                Live Casino
              </div>
            </div>
            <div className="live-casino__list">
              <ul className="casino-game__list">
                {/* <!--            TODO: add className new, popular, recently--> */}
                <li className="casino-game__item">
                  <div className="casino-game__img">
                    <div className="img-container">
                      <img src={img6} alt="Casino game" />
                    </div>
                    <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                      <div className="img-container">
                        <svg>
                          <use xlinkHref="#star" />
                        </svg>
                      </div>
                    </a>
                    <div className="casino-game__play">
                      <div className="casino-game__title">
                        BOOK OF DEAD
                      </div>
                      <div className="casino-game__visit">
                        <a className="casino-game__btn casino-game__now" href="/">
                          PLAY NOW
                        </a>
                        <a className="casino-game__btn casino-game__practise" href="/">
                          PRACTICE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="casino-game__name">
                    Lightning Baccarat
                  </div>
                </li>
                <li className="casino-game__item">
                  <div className="casino-game__img">
                    <div className="img-container">
                      <img src={img6} alt="Casino game" />
                    </div>
                    <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                      <div className="img-container">
                        <svg>
                          <use xlinkHref="#star" />
                        </svg>
                      </div>
                    </a>
                    <div className="casino-game__play">
                      <div className="casino-game__title">
                        BOOK OF DEAD
                      </div>
                      <div className="casino-game__visit">
                        <a className="casino-game__btn casino-game__now" href="/">
                          PLAY NOW
                        </a>
                        <a className="casino-game__btn casino-game__practise" href="/">
                          PRACTICE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="casino-game__name">
                    Prince of Olympus
                  </div>
                </li>
                <li className="casino-game__item">
                  <div className="casino-game__img">
                    <div className="img-container">
                      <img src={img6} alt="Casino game" />
                    </div>
                    <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                      <div className="img-container">
                        <svg>
                          <use xlinkHref="#star" />
                        </svg>
                      </div>
                    </a>
                    <div className="casino-game__play">
                      <div className="casino-game__title">
                        BOOK OF DEAD
                      </div>
                      <div className="casino-game__visit">
                        <a className="casino-game__btn casino-game__now" href="/">
                          PLAY NOW
                        </a>
                        <a className="casino-game__btn casino-game__practise" href="/">
                          PRACTICE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="casino-game__name">
                    Bet on Poker
                  </div>
                </li>
                <li className="casino-game__item">
                  <div className="casino-game__img">
                    <div className="img-container">
                      <img src={img6} alt="Casino game" />
                    </div>
                    <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                      <div className="img-container">
                        <svg>
                          <use xlinkHref="#star" />
                        </svg>
                      </div>
                    </a>
                    <div className="casino-game__play">
                      <div className="casino-game__title">
                        BOOK OF DEAD
                      </div>
                      <div className="casino-game__visit">
                        <a className="casino-game__btn casino-game__now" href="/">
                          PLAY NOW
                        </a>
                        <a className="casino-game__btn casino-game__practise" href="/">
                          PRACTICE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="casino-game__name">
                    Speed Baccarat C
                  </div>
                </li>
                <li className="casino-game__item">
                  <div className="casino-game__img">
                    <div className="img-container">
                      <img src={img6} alt="Casino game" />
                    </div>
                    <a className="bet-rate__nav__link bet-rate__nav__link--favorite" href="/">
                      <div className="img-container">
                        <svg>
                          <use xlinkHref="#star" />
                        </svg>
                      </div>
                    </a>
                    <div className="casino-game__play">
                      <div className="casino-game__title">
                        BOOK OF DEAD
                      </div>
                      <div className="casino-game__visit">
                        <a className="casino-game__btn casino-game__now" href="/">
                          PLAY NOW
                        </a>
                        <a className="casino-game__btn casino-game__practise" href="/">
                          PRACTICE
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="casino-game__name">
                    Speed Baccarat C
                  </div>
                </li>
              </ul>
            </div>
            <div className="casino-game__more">
              <button className="btn casino-game__load">
                See All
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
