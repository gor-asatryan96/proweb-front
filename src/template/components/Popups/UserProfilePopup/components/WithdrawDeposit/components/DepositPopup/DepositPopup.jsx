import React from 'react';
import { Popup } from '../../../../../../UI';
import { WITHDRAW_DEPOSIT_TYPES } from '../../constants/withdrawDepostir.constants';

const DepositPopup = ({ data, onClose }) => <Popup onClose={onClose} className='deposit active' >
  <div className="deposit__popup active">
    <div className="deposit__pm">
      <button onClick={onClose} className="deposit__popup-close-btn">
        <span className="img-container">
          <svg className="icon" width="20" height="20">
            <use xlinkHref="#menu-close" />
          </svg>
        </span>
      </button>
      <div className="deposit__voda-logo">
        <div className="img-container">
          <img src={data.image} alt="vodafone logo" />
        </div>
      </div>
      {data.type === WITHDRAW_DEPOSIT_TYPES.OPERATOR_TYPE
        ? <>
          <div className="deposit__voda-title">How to deposit money into your PMbet.co.tz
            account using M-PESA </div>
          <div className="deposit__voda-sub">Enter your account ID as the reference</div>
          <ul className="deposit__voda-list">
            <li className="deposit__voda-item">
              <strong>Step 1</strong>
              <p>Dial*150*00#</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 2</strong>
              <p>Select 4 for 'Pay by M-Pesa'</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 3</strong>
              <p>Select 4 for 'Enter bussiness number'</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 4</strong>
              <p>Enter bussiness number 800888</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 5</strong>
              <p>Enter only your PMbet.co.tz account ID as<br />
                the reference<br />
                number.<br />
                Account ID 123456789</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 6</strong>
              <p>Enter amount you want to pay</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 7</strong>
              <p>Confirm detalis and enter PIN</p>
            </li>
            <li className="deposit__voda-item">
              <strong>Step 8</strong>
              <p>Press 1 to confirm</p>
            </li>
          </ul>
          <div className="deposit__voda-desc">It may take up to 10 minutes for the moneyto appear
            in your account.Should you require any assistance with your
            deposit, please  cintact our call centre on 0746 004 003,
            0677 048 625 (Tigo), 0783 785 725 (Airel) </div>
        </>
        : <>
          <div className="deposit__pm-logo">
            <div className="img-container">
              <img src="img/company-logo/pmbet.png" alt="PMbet logo" />
            </div>
          </div>
          <div className="deposit__pm-title deposit__pm-title_upper">PAY AT SHOP</div>
          <div className="deposit__pm-title">How to pay at shop</div>
          <div className="deposit__pm-sub">It is necessary to provide your PMbet.co.tz
            account ID or your registered mobile phone number
            to our betshop operator and the amount you
            want to deposit</div>
          <ul className="deposit__pm-list">
            <li className="deposit__pm-item">
              <strong>Account ID</strong>
              <p>123456789</p>
            </li>
            <li className="deposit__pm-item">
              <strong>Phone number</strong>
              <p>+25581711550</p>
            </li>
          </ul>
          <div className="deposit__pm-desc">Your balance will be updated immediataly after
            deposit was made</div>
        </>
      }

    </div>
  </div>
</Popup>;

export default DepositPopup;
