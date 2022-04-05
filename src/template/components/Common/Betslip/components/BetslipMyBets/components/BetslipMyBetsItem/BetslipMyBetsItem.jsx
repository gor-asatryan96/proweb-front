import React from 'react';

const BetslipMyBetsItem = ({ isActive, data, toggle }) => (
  <li className="mybets__item" onClick={toggle}>
    <div className="mybets__item--block">
      <span className="mybets__item-arrow">
        <span className="img-container">
          <svg width="1.14rem" height="0.64rem">
            <use xlinkHref="#arrow-bottom" />
          </svg>
        </span>
      </span>
      <span className="mybets__item-info">
        <span className="mybets__item-info__column" >
          <span className="mybets__item-info__title">
            Multi
          </span>
          <span className="mybets__item-info__date">
            08 Oct 2021  I  22:45
          </span>
        </span>
        <span className="mybets__item-info__column" >
          <span className="mybets__item-info__title mybets__item-info__title-id">
            ID
          </span>
          <span className="mybets__item-info__id">
            12458565478
          </span>
        </span>
      </span>
      <span className="mybets__item-copy">
        Copy
        <span className="mybets__item-copy__icon">
          <span className="img-container">
            <svg width="1.51rem" height="1.7rem">
              <use xlinkHref="#copy" />
            </svg>
          </span>
        </span>
      </span>
    </div>
    <div className="mybets__item--block__inner">
      <ul className="mybets__inner-list">
        <li className="mybets__inner-item">
          <div className="mybets__inner-item__row">
            <div className="mybets__inner-item__column">
              <div className="mybets__inner-item__column--name">
                Napoli <span > vs</span>  Atalanta
              </div>
              <div className="mybets__inner-item__column--status lost">
                Lost
              </div>
            </div>
            <div className="mybets__inner-item__column">
              <div className="mybets__inner-item__column--result">
                Match Result: 1
              </div>
              <div className="mybets__inner-item__column--odds">
                2.5
              </div>
            </div>
          </div>
        </li>
        <li className="mybets__inner-item">
          <div className="mybets__inner-item__row">
            <div className="mybets__inner-item__column">
              <div className="mybets__inner-item__column--name">
                Napoli <span > vs</span>  Atalanta
              </div>
              <div className="mybets__inner-item__column--status win">
                win
              </div>
            </div>
            <div className="mybets__inner-item__column">
              <div className="mybets__inner-item__column--result">
                Match Result: 1
              </div>
              <div className="mybets__inner-item__column--odds">
                2.5
              </div>
            </div>
          </div>
        </li>
        <li className="mybets__inner-item">
          <div className="mybets__inner-item__row">
            <div className="mybets__inner-item__column">
              <div className="mybets__inner-item__column--name">
                Napoli <span > vs</span>  Atalanta
              </div>
              <div className="mybets__inner-item__column--icon">
                <div className="img-container">
                  <svg width="1.14rem" height="1.14rem">
                    <use xlinkHref="#wall-clock" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mybets__inner-item__column">
              <div className="mybets__inner-item__column--result">
                Match Result: 1
              </div>
              <div className="mybets__inner-item__column--odds">
                2.5
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="mybets__inner-info">
        <ul className="mybets__inner-info__list">
          <li className="mybets__inner-info__item">
            <div className="mybets__inner-info__item-name">Amount</div>
            <div className="mybets__inner-info__item-total">5000</div>
          </li>
          <li className="mybets__inner-info__item">
            <div className="mybets__inner-info__item-name">Totals Odds</div>
            <div className="mybets__inner-info__item-total"><span >x</span>5.45</div>
          </li>
          <li className="mybets__inner-info__item">
            <div className="mybets__inner-info__item-name">Possible Tax</div>
            <div className="mybets__inner-info__item-total">258</div>
          </li>
          <li className="mybets__inner-info__item mybets__inner-info__item__green">
            <div className="mybets__inner-info__item-name">Possible Win</div>
            <div className="mybets__inner-info__item-total">140.550</div>
          </li>
        </ul>
        <div className="mybets__inner-info__buttons">
          <button className="mybets__inner-info__button mybets__inner-info__button-cash">
            <span className="mybets__inner-info__button-name ">Cash Out</span>
            <span className="mybets__inner-info__button-price">13 000 000<span>Units</span></span>
          </button>
          <button className="mybets__inner-info__button mybets__inner-info__button-cancel">
            <span className="mybets__inner-info__button-name ">Cancel</span>
            <span className="mybets__inner-info__button-price">12 999 999<span>Units</span> </span>
          </button>
        </div>

      </div>
    </div>
  </li>
);

export default BetslipMyBetsItem;
