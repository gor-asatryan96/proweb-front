import React from 'react';

const AdvertisingItem = ({ data }) => <li class="bet-advertising__item bet-advertising__item--right">
  <div class="img-container">
    <img class="bet-advertising__img" src={data.image} alt={data.title} />
  </div>
  <div class="bet-advertising__info">
    <div class="bet-advertising__desc">
      <div class="bet-advertising__caption">
        {data.title}
      </div>
      {/* <!-- TODO: add class ".bet-advertising__price--orange" for orange color--> */}
      <div class="bet-advertising__price bet-advertising__price--orange">
        {data.subTitle}
      </div>
    </div>
  </div>
</li>;

export default AdvertisingItem;
