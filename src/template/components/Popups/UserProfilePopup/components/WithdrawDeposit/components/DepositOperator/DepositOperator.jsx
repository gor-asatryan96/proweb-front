import React from 'react';

const DepositOperator = () => (
  <>
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
);

export default DepositOperator;
