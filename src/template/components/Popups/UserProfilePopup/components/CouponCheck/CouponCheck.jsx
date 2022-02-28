import { useState } from 'react';
import classNames from 'classnames';
import GoBackHeader from '../../../components/GoBackHeader/GoBackHeader';
import MyBetsHistoryMenuItem from '../MyBetsHistory/components/MyBetsHistoryMenu/components/MyBetsHistoryMenuItem/MyBetsHistoryMenuItem';
import MyBetsHistoryItemInfo from '../MyBetsHistory/components/MyBetsHistoryItemInfo/MyBetsHistoryItemInfo';

const item = {
  id: '123', type: 'Single', amount: '5000', status: 'Lost', odd: '1.5', winAmount: '0', date: new Date(),
};

const CouponCheck = ({ goBack, configs }) => {
  const [ isChecked, setIsChecked ] = useState(null);
  const [ ticket, setTicket ] = useState(null);

  return (
    <>
      {ticket
        ? <MyBetsHistoryItemInfo goBack={() => setTicket(null)} />
        : <>
          <GoBackHeader
            title={configs.name}
            goBack={goBack}
            icon={configs.icon} />
          <div className="menu-inner">
            <div className={classNames('coupon__form-container', { 'coupon__form-container_filled': isChecked })}>
              <form className="coupon__form">
                <label className="coupon__label">
                  <input type="text" className="coupon__input" placeholder="ID number " />
                </label>
                <button onClick={() => setIsChecked(true)} type="button" className="coupon__btn coupon__btn_next">check</button>
              </form>
            </div>
            {isChecked && <div className="coupon__content">
              <div className="coupon__content-row coupon__content-row-tr">
                <div className="coupon__content-column coupon__content-column_date">Date</div>
                <div className="coupon__content-column coupon__content-column_id">ID</div>
                <div className="coupon__content-column coupon__content-column_type">Type</div>
                <div className="coupon__content-column coupon__content-column_amount">Amount</div>
                <div className="coupon__content-column coupon__content-column_icon" />
              </div>
              <MyBetsHistoryMenuItem setActiveHistory={() => setTicket(item)} data={item} />
            </div>}
          </div>
        </>
    }
    </>
  );
};

export default CouponCheck;
