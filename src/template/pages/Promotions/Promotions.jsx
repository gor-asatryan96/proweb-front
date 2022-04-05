import React from 'react';
import { useMediaQuery } from 'react-responsive';
import promotionImg from '../../assets/images/banners/15.jpg';
import Advertising from '../../components/Common/Advertising/Advertising';

const Promotions = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });
  return (
    <section className="promotion">
      <div className="promotion-container container">
        <div className="promotion--row">
          {/*          <div className="promotion-column__fake">
            ss
          </div> */}
          <div className="promotion-column">
            <div className="promotion-header">
              <div className="promotion-title">
                <div className="promotion-icon">
                  <div className="img-container">
                    <svg width="1.42rem" height="1.78rem">
                      <use xlinkHref="#fire" />
                    </svg>
                  </div>
                </div>
                promotions
              </div>
              <div className="promotion-filter">
                <ul className="promotion-filter__list">
                  {/* Todo: Add class promotion-filter__item--active  */}
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      All
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Sport
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Live
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Casino
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Games
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Live Casino
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Live Games
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      PM League
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Jackpot
                    </button>
                  </li>
                  <li className="promotion-filter__item">
                    <button className="promotion-filter__button">
                      Other
                    </button>
                  </li>

                </ul>
              </div>

            </div>
            <div className="promotion-content">
              <ul className="promotion-content__list">
                <li className="promotion-content__item">
                  <div className="promotion-content__item-img">
                    <div className="img-container">
                      <img src={promotionImg} alt="promotionImg" />
                    </div>
                  </div>
                  <div className="promotion-content__item-text">
                    <div className="promotion-content__item-text__title">
                      smart winning tournament
                    </div>
                    <div className="promotion-content__item-text__desc">
                      smart winning tournament
                    </div>
                  </div>
                </li>
                <li className="promotion-content__item">
                  <div className="promotion-content__item-img">
                    <div className="img-container">
                      <img src={promotionImg} alt="promotionImg" />
                    </div>
                  </div>
                  <div className="promotion-content__item-text">
                    <div className="promotion-content__item-text__title">
                      smart winning tournament
                    </div>
                    <div className="promotion-content__item-text__desc">
                      smart winning tournament
                    </div>
                  </div>
                </li>
                <li className="promotion-content__item">
                  <div className="promotion-content__item-img">
                    <div className="img-container">
                      <img src={promotionImg} alt="promotionImg" />
                    </div>
                  </div>
                  <div className="promotion-content__item-text">
                    <div className="promotion-content__item-text__title">
                      smart winning tournament
                    </div>
                    <div className="promotion-content__item-text__desc">
                      smart winning tournament
                    </div>
                  </div>
                </li>
                <li className="promotion-content__item">
                  <div className="promotion-content__item-img">
                    <div className="img-container">
                      <img src={promotionImg} alt="promotionImg" />
                    </div>
                  </div>
                  <div className="promotion-content__item-text">
                    <div className="promotion-content__item-text__title">
                      smart winning tournament
                    </div>
                    <div className="promotion-content__item-text__desc">
                      smart winning tournament
                    </div>
                  </div>
                </li>
              </ul>
              {isDesktop && (
              <div className="promotion-pagination">
                <div className="promotion-pagination__column">
                  <div className="promotion-pagination__buttons">
                    <button className="pagination-button">
                      <span className="img-container">
                        <svg width="0.38rem" height="0.67rem">
                          <use xlinkHref="#arrow-left-2" />
                        </svg>
                      </span>
                    </button>
                    <button className="pagination-button">
                      <span className="img-container">
                        <svg width="0.73rem" height="0.68rem">
                          <use xlinkHref="#double-arrow" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="promotion-pagination__buttons">
                    <button className="pagination-button">
                      4
                    </button>
                  </div>
                  <div className="promotion-pagination__buttons">
                    <button className="pagination-button pagination-button__right">
                      <span className="img-container">
                        <svg width="0.38rem" height="0.67rem">
                          <use xlinkHref="#arrow-left-2" />
                        </svg>
                      </span>
                    </button>
                    <button className="pagination-button pagination-button__right">
                      <span className="img-container">
                        <svg width="0.73rem" height="0.68rem">
                          <use xlinkHref="#double-arrow" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
                <select className="promotion-pagination__select" >
                  <option value="">
                    10
                  </option>
                </select>
              </div>
              )}
            </div>
          </div>
          {isDesktop && (
          <div className="promotion-advertising ">
            <Advertising />
          </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Promotions;
