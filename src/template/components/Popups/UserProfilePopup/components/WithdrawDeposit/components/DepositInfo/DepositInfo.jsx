import React from 'react';
import { DEPOSIT_INFO_COMPONENTS } from './configs/depositInfo.configs';

const DepositInfo = ({ data }) => {
  const CurrentComponent = DEPOSIT_INFO_COMPONENTS[data.type];

  return (
    <div className="deposit__info--item">
      <div className="deposit__voda-logo">
        <div className="img-container">
          <img src={data.image} alt="vodafone logo" />
        </div>
      </div>
      <CurrentComponent data={data} />
    </div>
  );
};

export default DepositInfo;
