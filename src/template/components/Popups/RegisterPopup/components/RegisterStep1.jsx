const RegisterStep1 = () => (
  <div className="popup__row">
    <div className="popup__row__line">
      <div className="popup__name">
        Contact information
      </div>
      <div className="popup__line">
        {/* <!-- TODO: add className error--> */}
        <input className="popup__input error input" type="email" placeholder="Enter your e-mail address" />
      </div>
      <div className="popup__error">
        This email is invalid. Make sure it's written
        <br />
        like example@email.com
      </div>
      <div className="popup-create__line">
        <div className="popup__line popup-create__code">
          <input className="popup__input input" type="text" value="+374" />
        </div>
        <div className="popup__line popup-create__tel">
          <input className="popup__input input" type="tel" placeholder="Enter your contact number" />
        </div>
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Promo code (If you have one)
      </div>
      <div className="popup__line">
        <input className="popup__input error input" type="number" placeholder="Enter promo code" />
      </div>
      <div className="popup__error">
        Enter a promo code for your profile.
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Create a password
      </div>
      <div className="popup__line popup__line--password">
        <input className="popup__input input" type="password" placeholder="Create your password" />
        <button className="input__show">
          <span className="img-container">
            <svg width="14" height="9">
              <use xlinkHref="#eye" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div className="popup__row__line popup__row__line--last">
      <div className="popup__name">
        Confirm your password
      </div>
      <div className="popup__line popup__line--password">
        <input className="popup__input error input" type="password" placeholder="Confirm your password" />
        <button className="input__show">
          <span className="img-container">
            <svg width="14" height="9">
              <use xlinkHref="#eye" />
            </svg>
          </span>
        </button>
      </div>
      <div className="popup__error">
        The password don't match
      </div>
    </div>
  </div>
);

export default RegisterStep1;
