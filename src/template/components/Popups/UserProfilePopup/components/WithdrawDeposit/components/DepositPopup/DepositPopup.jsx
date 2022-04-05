import React from 'react';
import { Popup } from '../../../../../../UI';
import DepositInfo from '../DepositInfo/DepositInfo';

const DepositPopup = ({ data, onClose }) => <Popup onClose={onClose} className='deposit active' >
  <div className="deposit__pm">
    <button onClick={onClose} className="deposit__popup-close-btn">
      <span className="img-container">
        <svg className="icon" width="20" height="20">
          <use xlinkHref="#menu-close" />
        </svg>
      </span>
    </button>
    <DepositInfo data={data} />
  </div>
</Popup>;

export default DepositPopup;
