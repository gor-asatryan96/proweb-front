const Betslip = () => (
  <div className="bet-item">
    {/* <!-- TODO: add className active --> */}
    <button className="bet-item__btn">
      <span className="bet-item__info">
        <span className="bet-item__quantity">
          <span>1</span>
          SINGLE
        </span>
        <span className="bet-item__price">
          3.10
        </span>
      </span>
      <span className="bet-item__arrow">
        <span className="img-container">
          <svg width="18px" height="11px">
            <use xlinkHref="#arrow-top" />
          </svg>
        </span>
      </span>
    </button>
    <div className="bet-item__block active">
      <div className="bet-item__nav">
        <ul className="bet-item__nav__list">
          <li className="bet-item__nav__item">
            <div className="bet-item__nav__btn active" href="">
              Multi
            </div>
          </li>
          <li className="bet-item__nav__item">
            <div className="bet-item__nav__btn" href="">
              Single
            </div>
          </li>
          <li className="bet-item__nav__item">
            <div className="bet-item__nav__btn" href="">
              System
            </div>
          </li>
        </ul>
        <button className="bet-item__nav__close">
          <span className="img-container">
            <svg width="18px" height="11px">
              <use xlinkHref="#arrow-top" />
            </svg>
          </span>
        </button>
      </div>
      <div className="bet-item__column bet-item__column--multi active">
        <div className="bet-item__hint">
          <div className="bet-item__hint__icon">
            <div className="img-container">
              <svg width="22.8" height="22.8">
                <use xlinkHref="#attention" />
              </svg>
            </div>
          </div>
          <div className="bet-item__hint__info">
            Current bonus is 3 %, one more selection will give you 5%
          </div>
        </div>
        <div className="bet-item__team">
          <ul className="bet-item__team__list">
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Napoli
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Atalanta
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  2.53
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    1899 Hoffenheim
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Borussia Dortmund
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>x</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  4.20
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Republic of North Macedoniia
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Kosovo
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>2</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  3.05
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Ireland
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Wales
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  2.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Arminia
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Munichen
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  3.45
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Bielefeld
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    FC Bayern
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>X</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  2.15
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Arminia Lefeld
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Bayern Munich
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>X</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  1.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>

          </ul>
        </div>
        <div className="bet-item__panel">
          <form action="">
            <div className="bet-item__panel__row">
              <div className="bet-item__panel__column">
                <label className="bet-item__panel__label">
                  <span className="bet-item__panel__title">
                    Bet with
                  </span>
                  <select className="bet-item__panel__select" name="">
                    <option className="bet-item__panel__option" value="">
                      Units (12828)
                    </option>
                  </select>
                </label>
              </div>
              <div className="bet-item__panel__column">
                <div className="bet-item__panel__info">
                  <div className="bet-item__panel__name">
                    Amount
                  </div>
                  <div className="bet-item__panel__value">
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-item__panel__total">
              <div className="bet-item__panel__row">
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Totals odds
                    </div>
                    <div className="bet-item__panel__value">
                      125.47
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Possible tax
                    </div>
                    <div className="bet-item__panel__value">
                      0
                    </div>
                  </div>
                </div>
              </div>
              <div className="bet-item__panel__row">
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Possible bonus
                    </div>
                    <div className="bet-item__panel__value">
                      0
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info bet-item__panel__info--win">
                    <div className="bet-item__panel__name">
                      Possible Win
                    </div>
                    <div className="bet-item__panel__value">
                      140.550
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-item__panel__row bet-item__panel__accept">
              <div className="bet-item__panel__column">
                <button className="bet-item__panel__trash" />
              </div>
              <div className="bet-item__panel__column">
                <button className="bet-item__panel__btn bet-item__panel__btn--place">
                  PLACE BET
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bet-item__column bet-item__column--single">
        <div className="bet-item__hint">
          <div className="bet-item__hint__icon">
            <div className="img-container">
              <svg width="22.8" height="22.8">
                <use xlinkHref="#attention" />
              </svg>
            </div>
          </div>
          <div className="bet-item__hint__info">
            Current bonus is 3 %, one more selection will give you 5%
          </div>
        </div>
        <div className="bet-item__team">
          <ul className="bet-item__team__list">
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Napoli
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Atalanta
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                  <label className="bet-item__team__amount">
                    <span className="bet-item__team__amount__name">
                      Amount
                    </span>
                    <input className="bet-item__team__amount__number" type="text" value="320" />
                  </label>
                </div>
                <div className="bet-item__team__ratio">
                  2.53
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Republic of North Macedoniia
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Kosovo
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>2</span>
                    </div>
                  </div>
                  <label className="bet-item__team__amount">
                    <span className="bet-item__team__amount__name">
                      Amount
                    </span>
                    <input className="bet-item__team__amount__number" type="text" value="58" />
                  </label>
                </div>
                <div className="bet-item__team__ratio">
                  3.05
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Ireland
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Wales
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                  <label className="bet-item__team__amount">
                    <span className="bet-item__team__amount__name">
                      Amount
                    </span>
                    <input className="bet-item__team__amount__number" type="text" value="400" />
                  </label>
                </div>
                <div className="bet-item__team__ratio">
                  2.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Arminia Bielefeld
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    FC Bayern Munich
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>X</span>
                    </div>
                  </div>
                  <label className="bet-item__team__amount">
                    <span className="bet-item__team__amount__name">
                      Amount
                    </span>
                    <input className="bet-item__team__amount__number" type="text" value="110" />
                  </label>
                </div>
                <div className="bet-item__team__ratio">
                  6.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Shalke
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Bayern Liverkuzen
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>X</span>
                    </div>
                  </div>
                  <label className="bet-item__team__amount">
                    <span className="bet-item__team__amount__name">
                      Amount
                    </span>
                    <input className="bet-item__team__amount__number" type="text" value="220" />
                  </label>
                </div>
                <div className="bet-item__team__ratio">
                  3.20
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Arminia Bielefeld
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    FC Bayern Munich
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>X</span>
                    </div>
                  </div>
                  <label className="bet-item__team__amount">
                    <span className="bet-item__team__amount__name">
                      Amount
                    </span>
                    <input className="bet-item__team__amount__number" type="text" value="110" />
                  </label>
                </div>
                <div className="bet-item__team__ratio">
                  6.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
          </ul>
        </div>
        <div className="bet-item__panel">
          <form action="">
            <div className="bet-item__panel__row">
              <div className="bet-item__panel__column">
                <label className="bet-item__panel__label">
                  <span className="bet-item__panel__title">
                    Bet with
                  </span>
                  <select className="bet-item__panel__select" name="">
                    <option className="bet-item__panel__option" value="">
                      Units (12828)
                    </option>
                  </select>
                </label>
              </div>
              <div className="bet-item__panel__column">
                <div className="bet-item__panel__info">
                  <div className="bet-item__panel__name">
                    Amount
                  </div>
                  <div className="bet-item__panel__value">
                    -
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-item__panel__total">
              <div className="bet-item__panel__row">
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Possible Tax
                    </div>
                    <div className="bet-item__panel__value">
                      0
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info bet-item__panel__info--win">
                    <div className="bet-item__panel__name">
                      Possible Win
                    </div>
                    <div className="bet-item__panel__value">
                      140.550
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-item__panel__row bet-item__panel__accept">
              <div className="bet-item__panel__column">
                <button className="bet-item__panel__trash" />
              </div>
              <div className="bet-item__panel__column">
                <button className="bet-item__panel__btn bet-item__panel__btn--place">
                  PLACE BET
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="bet-item__column bet-item__column--system">
        <div className="bet-item__hint">
          <div className="bet-item__hint__icon">
            <div className="img-container">
              <svg width="22.8" height="22.8">
                <use xlinkHref="#attention" />
              </svg>
            </div>
          </div>
          <div className="bet-item__hint__info">
            Current bonus is 3 %, one more selection will give you 5%
          </div>
        </div>
        <div className="bet-item__team">
          <ul className="bet-item__team__list">
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Napoli
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Atalanta
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  2.53
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    1899 Hoffenheim
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Borussia Dortmund
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>X</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  4.20
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Republic of North Macedoniia
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Kosovo
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>2</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  3.05
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    France
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Denmark
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  2.35
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Valencia
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Sevilia
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  1.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
            <li className="bet-item__team__item">
              <div className="bet-item__team__info">
                <div className="bet-item__team__title">
                  <div className="bet-item__team__name">
                    Roma
                  </div>
                  <div className="bet-item__team__separator">
                    vs
                  </div>
                  <div className="bet-item__team__name">
                    Real Madrid
                  </div>
                  <div className="bet-item__team__total">
                    <div className="bet-item__team__result">
                      Match Result: <span>1</span>
                    </div>
                  </div>
                </div>
                <div className="bet-item__team__ratio">
                  2.80
                </div>
              </div>
              <button className="bet-item__team__delete" />
            </li>
          </ul>
        </div>
        <div className="bet-item__panel">
          <form action="">
            <div className="bet-item__panel__row">
              <div className="bet-item__panel__column">
                <label className="bet-item__panel__label">
                  <span className="bet-item__panel__title">
                    Bet with
                  </span>
                  <select className="bet-item__panel__select" name="">
                    <option className="bet-item__panel__option" value="">
                      Units (12828)
                    </option>
                  </select>
                </label>
              </div>
              <div className="bet-item__panel__column">
                <label className="bet-item__panel__number">
                  <input className="bet-item__panel__number__value" type="number" value="1255" />
                </label>
              </div>
            </div>
            <div className="bet-item__panel__row bet-item__panel__row--combination">
              <label className="bet-item__panel__number">
                <span className="bet-item__panel__title">
                  Combination amount
                </span>
                <input className="bet-item__panel__number__value" type="number" value="0" />
                <span className="bet-item__panel__title">
                  of 5
                </span>
              </label>
            </div>
            <div className="bet-item__panel__total">
              <div className="bet-item__panel__row">
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Possible Combos
                    </div>
                    <div className="bet-item__panel__value">
                      10
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Totals Odds
                    </div>
                    <div className="bet-item__panel__value">
                      28.05
                    </div>
                  </div>
                </div>
              </div>
              <div className="bet-item__panel__row">
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info">
                    <div className="bet-item__panel__name">
                      Possible Tax
                    </div>
                    <div className="bet-item__panel__value">
                      0
                    </div>
                  </div>
                </div>
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info bet-item__panel__info--amount">
                    <div className="bet-item__panel__name">
                      Min. bet amount must be
                    </div>
                    <div className="bet-item__panel__value">
                      500
                    </div>
                  </div>
                </div>
              </div>
              <div className="bet-item__panel__row">
                <div className="bet-item__panel__column">
                  <div className="bet-item__panel__info bet-item__panel__info--win">
                    <div className="bet-item__panel__name">
                      Possible Win
                    </div>
                    <div className="bet-item__panel__value">
                      587465
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bet-item__panel__row bet-item__panel__accept">
              <div className="bet-item__panel__column">
                <button className="bet-item__panel__trash" />
              </div>
              <div className="bet-item__panel__column">
                <button className="bet-item__panel__btn bet-item__panel__btn--place">
                  PLACE BET
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Betslip;
