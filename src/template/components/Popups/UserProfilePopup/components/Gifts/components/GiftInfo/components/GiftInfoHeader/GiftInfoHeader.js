const GiftInfoHeader = ({ goBack, isDesktop }) => (
  <>
    <div className="menu-back menu-back_gift">
      {
            !isDesktop && <>
              <button onClick={goBack} type="button" className="menu-back__icon-box">
                <span className="img-container">
                  <svg className="menu-back__icon" width="30" height="26">
                    <use xlinkHref="#menu-arrow-left" />
                  </svg>
                </span>
              </button>
            </>
        }
      <div className="menu-back__title menu-back__title_low">
        Gift title
      </div>
      <div className="gift__menu">
        <div className="gift__menu-row">
          <div className="gift__menu-col">Expiration date</div>
          <div className="gift__menu-col gift__menu-col_date">01.01.2021</div>
        </div>
        <div className="gift__menu-row">
          <div className="gift__menu-col">Status</div>
          <div className="gift__menu-col">4/12</div>
        </div>
      </div>
    </div>
  </>

);

export default GiftInfoHeader;
