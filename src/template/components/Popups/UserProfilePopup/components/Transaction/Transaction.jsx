import classNames from 'classnames';
import { useState } from 'react';
import GoBackHeader from '../../../components/GoBackHeader';
import TransactionItem from './components/TransactionItem/TransactionItem';

const items = [
  {
    id: '123', system: 'Visa', amount: 5000, status: 'Approved', type: 'Casino to Sport Wallet Transfer', balance: 1000, date: new Date(),
  },
  {
    id: '124', system: 'Master Card', amount: 5000, status: 'Performed', type: 'Withdraw', balance: 1000, date: new Date(),
  },
  {
    id: '125', system: 'Visa', amount: 5000, status: 'Canceled', type: 'Casino to Sport Wallet Transfer', balance: 1000, date: new Date(),
  },
  {
    id: '126', system: 'Master Card', amount: 5000, status: 'Canceled', type: 'Withdraw', balance: 1000, date: new Date(),
  },
  {
    id: '127', system: 'Visa', amount: 5000, status: 'Approved', type: 'Casino to Sport Wallet Transfer', balance: 1000, date: new Date(),
  },
  {
    id: '128', system: 'Master Card', amount: 5000, status: 'Approved', type: 'Withdraw', balance: 1000, date: new Date(),
  },
  {
    id: '129', system: 'Visa', amount: 5000, status: 'Performed', type: 'Casino to Sport Wallet Transfer', balance: 1000, date: new Date(),
  },
  {
    id: '130', system: 'Master Card', amount: 5000, status: 'Approved', type: 'Withdraw', balance: 1000, date: new Date(),
  },
];

const Transaction = ({ goBack, configs }) => {
  const [ isFiltersActive, setIsFiltersActive ] = useState(false);
  const [ openTransactions, setOpenTransactions ] = useState([]);

  const toggleTransaction = (id) => {
    if (openTransactions.includes(id)) {
      setOpenTransactions(prev => prev.filter(item => item !== id));
    } else {
      setOpenTransactions(prev => [ ...prev, id ]);
    }
  };

  return (
    <>
      <GoBackHeader
        title={configs.name}
        goBack={goBack}
        icon={configs.icon} />
      <div className="menu-inner">
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
          {isFiltersActive && <div className="menu-filter__drop">
            <div className="menu-filter__drop-block">
              <div className="menu-filter__drop-title">Transaction type</div>
              <ul className="menu-filter__drop-list">
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn active">All</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Bets</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Winning bets</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Deposit</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Canceled by user</button>
                </li>
              </ul>
            </div>
            <div className="menu-filter__drop-block">
              <div className="menu-filter__drop-title">Category</div>
              <ul className="menu-filter__drop-list">
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn active">Main</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">Casino</button>
                </li>
              </ul>
            </div>
            <div className="menu-filter__drop-block">
              <div className="menu-filter__drop-title">Period</div>
              <ul className="menu-filter__drop-list">
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn">All</button>
                </li>
                <li className="menu-filter__drop-item">
                  <button type="button" className="menu-filter__drop-btn menu-filter__drop-btn_custom-trans">Custom</button>
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
            <form action="" className="menu-filter__drop-form">
              {/* <!--    TODO: add active className to custom button --> */}
              <div className="menu-filter__drop-block menu-filter__drop-block_range-trans">
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
            </form>
          </div>}
        </div>
        {
          items.length
            ? <>
              <div className="transaction__row transaction__row_tr">
                <div className="transaction__column transaction__column_date">Date</div>
                <div className="transaction__column transaction__column_system">System</div>
                <div className="transaction__column transaction__column_amount">Amount</div>
                <div className="transaction__column transaction__column_status">Status</div>
              </div>
              {items.map(item => (
                <TransactionItem
                  key={item.id}
                  data={item}
                  isOpen={openTransactions.includes(item.id)}
                  toggleTransaction={() => toggleTransaction(item.id)} />
              ))}
            </>
            : <div className="transaction__none">
              <span className="transaction__none-text">No bets to show</span>
            </div>
        }
      </div>
    </>
  );
};

export default Transaction;
