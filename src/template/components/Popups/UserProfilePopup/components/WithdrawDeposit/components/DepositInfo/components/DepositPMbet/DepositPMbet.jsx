import React from 'react';

const DepositPMbet = () => (
  <>
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
);

export default DepositPMbet;
