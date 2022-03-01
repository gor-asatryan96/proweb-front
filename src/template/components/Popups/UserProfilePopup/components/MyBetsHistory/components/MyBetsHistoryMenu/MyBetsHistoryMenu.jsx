import classNames from 'classnames';
import { useState } from 'react';
import GoBackHeader from '../../../../../components/GoBackHeader';
import MyBetsHistoryMenuItem from './components/MyBetsHistoryMenuItem/MyBetsHistoryMenuItem';

const items = [
  {
    id: '123', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
  {
    id: '124', type: 'Single', amount: '5000', status: 'Won', odd: '1.5', winAmount: '1500', date: new Date(),
  },
  {
    id: '125', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
  {
    id: '126', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
  {
    id: '127', type: 'Single', amount: '5000', status: 'Win', odd: '1.5', winAmount: '4800', date: new Date(),
  },
  {
    id: '128', type: 'Single', amount: '5000', status: 'Win', odd: '1.5', winAmount: '11500', date: new Date(),
  },
];

const MyBetsHistoryMenu = ({ goBack, configs, setActiveHistory }) => {
  const [ isFiltersActive, setIsFiltersActive ] = useState(false);

  return (
    <>
      <GoBackHeader
        title={configs.name}
        goBack={goBack}
        icon={configs.icon} />
      <div className="menu-inner">
        <div className="menu-filter__slider">
          <div className="menu-filter__slider-row">
            <div className="menu-filter__slider-in active">
              Bet history
            </div>
            <div className="menu-filter__slider-in">
              Open bets
            </div>
            <div className="menu-filter__slider-in">
              Cashed out
            </div>
            <div className="menu-filter__slider-in">
              Won
            </div>
            <div className="menu-filter__slider-in">
              Last
            </div>
            <div className="menu-filter__slider-in">
              Returned
            </div>
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
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn active">All</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Single</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Multiple</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">System</button>
                </li>
              </ul>
            </div>
            <div className="menu-filter__drop-block menu-filter__drop-block_period">
              <div className="menu-filter__drop-title">Period</div>
              <ul className="menu-filter__drop-list">
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">All</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn menu-filter__drop-btn_custom">Custom</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">1 hrs</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn active">3 hrs</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">5 hrs</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">8 hrs</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">12 hrs</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">24 hrs</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">48 hrs</button>
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
        {
        items.length
          ? <>
            <div className="history__row history__row_fixed">
              <div className="history__col history__col_date">Date</div>
              <div className="history__col history__col_id">ID</div>
              <div className="history__col history__col_type">Type</div>
              <div className="history__col history__col_amount">Amount</div>
            </div>
            <div className="history__out">
              {items.map(item => (
                <MyBetsHistoryMenuItem setActiveHistory={() => setActiveHistory(item)} data={item} />
              ))}
            </div>
          </>
          : <div className="transaction__none">
            <span className="transaction__none-text">No bets to show</span>
          </div>
      }

      </div>
    </>
  );
};

export default MyBetsHistoryMenu;
