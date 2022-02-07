const RegisterStep3 = () => (
  <div className="popup__row">
    <div className="popup__row__line">
      <div className="popup__name">
        Currency
      </div>
      <div className="popup__line">
        <label />
        <select className="popup__select select">
          <option className="popup__option option" value="">Euro</option>
          <option className="popup__option option" value="">Usd</option>
          <option className="popup__option option" value="">Gbp</option>
        </select>
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Document type
      </div>
      <div className="popup__line">
        <select className="popup__select select" name="">
          <option className="popup__option option" value="">Passport</option>
          <option className="popup__option option" value="">Driving Licence</option>
        </select>
      </div>
      <div className="popup__line">
        {/* <!-- TODO: add className error--> */}
        <input className="popup__input error input" type="text" placeholder="Passport" />
      </div>
      <div className="popup__error">
        Enter your passport number
      </div>
    </div>
    <div className="popup__row__line">
      <div className="popup__name">
        Security question
      </div>
      <div className="popup__line">
        <select className="popup__select select" name="">
          <option className="popup__option option" value="">What is your favorite book?</option>
        </select>
      </div>
      <div className="popup__line">
        {/* <!-- TODO: add className error--> */}
        <input className="popup__input error input" type="text" placeholder="Security answer" />
      </div>
      <div className="popup__error">
        Select security question
      </div>
    </div>
    <div className="popup__age">
      <div className="popup__age__checkbox checkbox-2">
        <input className="checkbox-2__btn" type="checkbox" id="age" />
        <span className="checkbox-2__icon" />
      </div>
      <label className="popup__age__name" for="age">
        I am 18 years of age and have read and agree to the
        <a className="popup__age__link" href="/">Terms</a>
        <a className="popup__age__link" href="/">And Conditions</a>
        and
        <a className="popup__age__link" href="/">Privacy Policy</a>
      </label>
    </div>
    <div className="popup__error">
      Confirm you've read the terms
    </div>
  </div>
);

export default RegisterStep3;
