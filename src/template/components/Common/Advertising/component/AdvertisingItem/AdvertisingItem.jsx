import React from 'react';

const AdvertisingItem = ({ data }) => <li className="bet-advertising__item bet-advertising__item--right">
  <div className="img-container">
    <img className="bet-advertising__img" src={data.image} alt={data.title} />
  </div>
  <div className="bet-advertising__info">
    <div className="bet-advertising__desc">
      <div className="bet-advertising__caption">
        {data.title}
      </div>
      {/* <!-- TODO: add className ".bet-advertising__price--orange" for orange color--> */}
      <div className="bet-advertising__price bet-advertising__price--orange">
        {data.subTitle}
      </div>
    </div>
  </div>
</li>;

export default AdvertisingItem;
