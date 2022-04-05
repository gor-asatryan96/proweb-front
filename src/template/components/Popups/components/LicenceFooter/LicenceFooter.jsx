import React from 'react';

const LicenceFooter = () => (
  <div className="popup__footer">
    <div className="popup__info">
      <div className="popup__licence">
        licensed by:
      </div>
      <div className="popup__country">
        gaming board of tanzania
      </div>
    </div>
    <div className="popup__rule">
      <div className="popup__security">
        Security &
        <br />
        Responsibility
      </div>
      <div className="popup__rise">
        <div className="img-container">
          <svg width="29" height="29">
            <use xlinkHref="#18-plus" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default LicenceFooter;
