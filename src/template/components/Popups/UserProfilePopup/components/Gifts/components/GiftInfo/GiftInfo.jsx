const GiftInfo = ({ goBack }) => <>
  <div className="menu-back menu-back_gift">
    <button onClick={goBack} type="button" className="menu-back__icon-box">
      <span className="img-container">
        <svg className="menu-back__icon" width="30" height="26">
          <use xlinkHref="#menu-arrow-left" />
        </svg>
      </span>
    </button>
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
  <div className="menu-inner">
    <div className="gift__game-block">
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/keno.svg" alt="keno icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Keno Ticket</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/free-spin.svg" alt="free spin ping-pong icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Free Spin</div>
        </div>
        <button type="button" className="gift__game-btn" disabled>
          Used
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/hockey.svg" alt="hockey icon" />
            </div>
          </div>
          <div className="gift__game-title">10Tzs For Sport</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/keno-ticket.svg" alt="keno ticket icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Keno Ticket</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/free-spin-regbee.svg" alt="free spin rugby icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Free Spin</div>
        </div>
        <button type="button" className="gift__game-btn" disabled>
          Used
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/basketball.svg" alt="basketball icon" />
            </div>
          </div>
          <div className="gift__game-title">10Tzs For Sport</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/keno-jackpot.svg" alt="keno jackpot icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Keno Ticket</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/free-spin-cards.svg" alt="cards icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Free Spin</div>
        </div>
        <button type="button" className="gift__game-btn" disabled>
          Used
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/tennis.svg" alt="keno icon" />
            </div>
          </div>
          <div className="gift__game-title">10Tzs For Sport</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/keno-fist.svg" alt="keno icon" />
            </div>
          </div>
          <div className="gift__game-title">1 Keno Ticket</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/free-spin-btn.svg" alt="free spin button" />
            </div>
          </div>
          <div className="gift__game-title">1 Free Spin</div>
        </div>
        <button type="button" className="gift__game-btn" disabled>
          Used
        </button>
      </div>
      <div className="gift__game-out">
        <div className="gift__game-cover">
          <div className="gift__game-img">
            <div className="img-container">
              <img src="img/gift/K-circle.svg" alt="K logo" />
            </div>
          </div>
          <div className="gift__game-title">10Tzs For Sport</div>
        </div>
        <button type="button" className="gift__game-btn">
          Use
        </button>
      </div>
    </div>
  </div>
</>;

export default GiftInfo;
