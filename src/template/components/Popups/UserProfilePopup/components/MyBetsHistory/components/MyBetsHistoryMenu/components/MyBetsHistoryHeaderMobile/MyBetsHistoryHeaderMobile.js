import classNames from 'classnames';
import { useState } from 'react';
import { BET_TYPE, PERIOD, STATUS } from '../../constants/myBetsHistoryMenu.constants';

const MyBetsHistoryHeaderMobile = ({ setIsFiltersActive, isFiltersActive }) => {
  const [ status, setStatus ] = useState(STATUS[0]);
  const [ betType, setBetType ] = useState(BET_TYPE[0]);
  const [ period, setPeriod ] = useState(PERIOD[0]);

  return (
    <>
      <div className="menu-filter__slider">
        <div className="menu-filter__slider-row">
          {
            STATUS.map(item => (
              <div
                key={item}
                onClick={() => setStatus(item)}
                className={classNames('menu-filter__slider-in', { active: item === status })}
                >
                {item}
              </div>
            ))
          }
        </div>
      </div>
      <div className="menu-filter">
        <div className="menu-filter__box">
          <div className="menu-filter__title">
            <div className="menu-filter__icon">
              <div className="img-container">
                <svg className="icon">
                  <use xlinkHref="#filterIcon" />
                </svg>
              </div>
            </div>
            <span className="menu-filter__text">The last 24 hours</span>
          </div>
          <div onClick={() => setIsFiltersActive(prev => !prev)} className="menu-filter__arrow">
            <div className={classNames('img-container', { 'rotate-180': isFiltersActive })}>
              <svg className="icon">
                <use xlinkHref="#menu-arrow-down" />
              </svg>
            </div>
          </div>
        </div>
        {isFiltersActive && <form className="menu-filter__drop-form">
          <div className="menu-filter__drop-block menu-filter__drop-block_bet">
            <label className="menu-filter__drop_bet-label">
              <input type="text" className="menu-filter__drop_bet-input" placeholder="Bet ID" />
            </label>
          </div>
          <div className="menu-filter__drop-block">
            <div className="menu-filter__drop-title">Bet type</div>
            <ul className="menu-filter__drop-list menu-filter__drop-list_history">
              {
                BET_TYPE.map(item => (
                  <li onClick={() => setBetType(item)} className='menu-filter__drop-item'>
                    <button type="button" className={classNames('menu-filter__drop-btn', { active: betType === item })}>{item}</button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="menu-filter__drop-block menu-filter__drop-block_period">
            <div className="menu-filter__drop-title">Period</div>
            <ul className="menu-filter__drop-list">
              {
                PERIOD.map(item => (
                  <li onClick={() => setPeriod(item)} className="menu-filter__drop-item">
                    <button type="button" className={classNames('menu-filter__drop-btn', { active: item === period })}>{item}</button>
                  </li>
                ))
              }
              <li className="menu-filter__drop-item">
                <button type="button" className="menu-filter__drop-btn menu-filter__drop-btn_custom">Custom</button>
              </li>
            </ul>
          </div>
          <div className="menu-filter__drop-block menu-filter__drop-block_range">
            <div className="menu-filter__drop-title">Range</div>
            <div className="menu-filter__drop-input-block">
              <label className="menu-filter__drop-label">
                <input type="text" className="menu-filter__drop-input" placeholder="From" />
              </label>
              <label className="menu-filter__drop-label">
                <input type="text" className="menu-filter__drop-input" placeholder="To" />
              </label>
            </div>
          </div>
          <div className="menu-filter__drop-block menu-filter__drop-block_submit">
            <button type="submit" className="menu-filter__drop-submit-btn">Show</button>
          </div>
          </form>}
      </div>
    </>
  );
};

export default MyBetsHistoryHeaderMobile;
