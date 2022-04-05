import { useState } from 'react';
import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import GoBackHeader from '../../../components/GoBackHeader/GoBackHeader';
import MyBetsHistoryItemInfo from '../MyBetsHistory/components/MyBetsHistoryItemInfo/MyBetsHistoryItemInfo';
import BetHistoryList from '../MyBetsHistory/components/BetHistoryList/BetHistoryList';

const items = [
  {
    id: '123', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
  },
];

const CouponCheck = ({ goBack, configs }) => {
  const [ isChecked, setIsChecked ] = useState(null);
  const [ ticket, setTicket ] = useState(null);
  const isDesktop = useMediaQuery({
    query: '(min-width: 1025px)',
  });

  return (
    <>
      {ticket
        ? <MyBetsHistoryItemInfo goBack={() => setTicket(null)} />
        : <>
          {!isDesktop && (
            <GoBackHeader
              title={configs.name}
              goBack={goBack}
              icon={configs.icon} />
          )}

          <div className="menu-inner">
            <div className={classNames('coupon__form-container', { 'coupon__form-container_filled': isChecked })}>
              <form className="coupon__form">
                {isDesktop && !isChecked && (
                <div className="popup-profile__coupon-caption" >
                  Coupon check
                </div>
                )
                }
                <div className="coupon__form__info">
                  <label className="coupon__label">
                    <input type="text" className="coupon__input" placeholder="ID number " />
                  </label>
                  <button
                    onClick={() => setIsChecked(true)}
                    type="button"
                    className="coupon__btn coupon__btn_next">check
                  </button>
                </div>
              </form>
            </div>
            {isChecked && (
            <div className="coupon__checked-block">
              <BetHistoryList bets={items} />
            </div>
            )}
          </div>
        </>
    }
    </>
  );
};

export default CouponCheck;
