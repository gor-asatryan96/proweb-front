const DailyExpress = () => <div className="popup express active">
  <div className="menu__header">
    <div className="menu__close">
      <div className="img-container">
        <svg className="menu__close__icon" width="16.09" height="16.09">
          <use xlinkHref="#close" />
        </svg>
      </div>
    </div>
    <div className="logo menu__logo" href="">
      <div className="img-container">
        <svg className="logo__img" width="80.83" height="28.12">
          <use xlinkHref="#logo" />
        </svg>
      </div>
    </div>
    <div className="menu__deposit" href="">
      <span className="menu__deposit__icon">
        <span className="img-container">
          <svg width="31" height="24">
            <use xlinkHref="#wallet" />
          </svg>
        </span>
      </span>
      <span className="menu__deposit__name">
        deposit
      </span>
    </div>
  </div>
  <div className="menu-back">
    <button type="button" className="menu-back__icon-box">
      <span className="img-container">
        <svg width="13" height="22">
          <use xlinkHref="#menu-arrow-left" />
        </svg>
      </span>
    </button>
    <div className="menu-back__title">Daily express</div>
  </div>
  <div className="menu-inner">
    <div className="express__box">
      <div className="express__box-text express__box-text_title">Package-ID:998-S813459794</div>
      <div className="express__box-text">
        Use This Package To Get Extra Bonus <span className="express__box-text_green">3500 Units</span>
      </div>
      <div className="express__box-btn-container">
        <a href="/" className="express__box-btn">Use</a>
      </div>
    </div>
    <div className="express__alert-text">Attention. You Must Place 1000 TZS/Unit Or More To Participate Indaily
      Express.
    </div>
  </div>
</div>;

export default DailyExpress;
