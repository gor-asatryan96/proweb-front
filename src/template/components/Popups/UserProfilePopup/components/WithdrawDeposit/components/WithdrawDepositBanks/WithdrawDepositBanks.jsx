import GoBackHeader from '../../../../../components/GoBackHeader';

const WithdrawDepositBanks = ({ isDeposit, goBack }) => <>
  <GoBackHeader goBack={goBack} title={isDeposit ? 'DEPOSIT' : 'WITHDRAW'} />
  <div className="withdraw__bank active">
    <ul className="withdraw__bank-list">
      <li className="withdraw__bank-box">
        <div className="withdraw__bank-card">
          <div className="withdraw__bank-card-inner">
            <div className="withdraw__bank-logo">
              <div className="img-container">
                <img src="img/company-logo/visa.png" alt="visa logo" />
              </div>
            </div>
            <div className="withdraw__bank-text-box">
              <div className="withdraw__bank-text">Visa (5***********4581)</div>
              <div className="withdraw__bank-text">Last use:25Oct,2019</div>
            </div>
            <div className="withdraw__bank-arrow">
              <div className="img-container">
                <svg
                  id="Group_2209"
                  data-name="Group 2209"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.97"
                  height="8.958"
                  viewBox="0 0 15.97 8.958">
                  <path
                    id="Color_Overlay"
                    data-name="Color Overlay"
                    d="M.744.255l-.5.524a.906.906,0,0,0,0,1.236l5.7,5.974L.25,13.956a.905.905,0,0,0,0,1.235l.
          5.524a.81.81,0,0,0,1.18,0L8.714,8.608a.91.91,0,0,0,0-1.239L1.923.255a.81.81,0,0,0-1.18,0Z"
                    transform="translate(15.97 0) rotate(90)"
                    fill="#5f6c79" />
                </svg>
              </div>
            </div>
          </div>
          <div className="withdraw__bank-drop withdraw__bank-drop_credit">
            <form action="" className="withdraw__bank-form_drop">
              <div className="withdraw__bank-drop-block">
                <label className="withdraw__bank-drop-label">
                  <span className="withdraw__bank-label-text">Total amount</span>
                  <input type="text" className="withdraw__bank-drop-input" placeholder="0 Tzs" />
                  <button className="withdraw__bank-btn" type="submit">confirm</button>
                </label>
              </div>
              <button className="withdraw__bank-drop-icon" type="button">
                <span className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27.313" viewBox="0 0 23 27.313">
                    <path
                      id="Icon_ionic-md-trash"
                      data-name="Icon ionic-md-trash"
                      d="M9.05,28.785a3.056,3.056,0,0,0,3.067,3.028H24.383a3.056,3.056,0,0,0,3.067-3.
            028V11.328H9.05ZM29.75,6.776H24L22.075,4.5h-7.65L12.5,6.776H6.75V9.052h23Z"
                      transform="translate(-6.75 -4.5)"
                      fill="#5f6c79" />
                  </svg>
                </span>
              </button>
            </form>

          </div>
        </div>
      </li>
      <li className="withdraw__bank-box">
        <div className="withdraw__bank-card">
          <div className="withdraw__bank-card-inner">
            <div className="withdraw__bank-logo">
              <div className="img-container">
                <img src="img/company-logo/masterCard.png" alt="visa logo" />
              </div>
            </div>
            <div className="withdraw__bank-text-box">
              <div className="withdraw__bank-text">MasterCard (4***********9875)</div>
              <div className="withdraw__bank-text">Last use:15Oct,2020</div>
            </div>
            <div className="withdraw__bank-arrow">
              <div className="img-container">
                <svg
                  id="Group_2209"
                  data-name="Group 2209"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15.97"
                  height="8.958"
                  viewBox="0 0 15.97 8.958">
                  <path
                    id="Color_Overlay"
                    data-name="Color Overlay"
                    d="M.744.255l-.5.524a.906.906,0,0,0,0,1.236l5.7,5.974L.25,13.956a.905.905,0,0,0,0,1.235l
          .5.524a.81.81,0,0,0,1.18,0L8.714,8.608a.91.91,0,0,0,0-1.239L1.923.255a.81.81,0,0,0-1.18,0Z"
                    transform="translate(15.97 0) rotate(90)"
                    fill="#5f6c79" />
                </svg>
              </div>
            </div>
          </div>
          <div className="withdraw__bank-drop withdraw__bank-drop_master">
            <form action="" className="withdraw__bank-form_drop">
              <div className="withdraw__bank-drop-block">
                <label className="withdraw__bank-drop-label">
                  <span className="withdraw__bank-label-text">Total amount</span>
                  <input type="text" className="withdraw__bank-drop-input" placeholder="0 Tzs" />
                  <button className="withdraw__bank-btn" type="submit">confirm</button>
                </label>
              </div>
              <button className="withdraw__bank-drop-icon" type="button">
                <span className="img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="27.313" viewBox="0 0 23 27.313">
                    <path
                      id="Icon_ionic-md-trash"
                      data-name="Icon ionic-md-trash"
                      d="M9.05,28.785a3.056,3.056,0,0,0,3.067,3.028H24.383a3.056,3.056,0,0,0,3.
            067-3.028V11.328H9.05ZM29.75,6.776H24L22.075,4.5h-7.65L12.5,6.776H6.75V9.052h23Z"
                      transform="translate(-6.75 -4.5)"
                      fill="#5f6c79" />
                  </svg>
                </span>
              </button>
            </form>

          </div>
        </div>
      </li>
    </ul>
    <div className="withdraw__bank-inner">
      <div className="withdraw__bank-inner-content">
        <div className="withdraw__bank-inner-title">New bank card</div>
        <div className="withdraw__bank-inner-text">To {isDeposit ? 'Deposit' : 'Withdraw'} your account via Visa/Arca/MasterCard
          cards it is necessary to:
        </div>
        <ul className="withdraw__bank-inner-list">
          <li className="withdraw__bank-inner-text">Enter your card number</li>
          <li className="withdraw__bank-inner-text">Name of the cardholder</li>
          <li className="withdraw__bank-inner-text">The validity period of the card</li>
          <li className="withdraw__bank-inner-text">CVV2/CVC2 (the three-digit number on the back of the card)</li>
          <li className="withdraw__bank-inner-text">Enter the amount</li>
          <li className="withdraw__bank-inner-text">Click confirm</li>
        </ul>
        <div className="withdraw__bank-inner-text">If you have previously saved your card, you will be offered
          the corresponding bank card
        </div>
      </div>
      <form className="withdraw__bank-form">
        <div className="withdraw__bank-row withdraw__bank-row_card">
          <label className="withdraw__bank-label">
            <span className="withdraw__bank-label-text">Card number</span>
            <input
              type="text"
              maxlength="4"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="withdraw__bank-input"
              placeholder="XXXX" />
          </label>
          <label className="withdraw__bank-label">
            <input
              type="text"
              maxlength="4"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="withdraw__bank-input"
              placeholder="XXXX" />
          </label>
          <label className="withdraw__bank-label">
            <input
              type="text"
              maxlength="4"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="withdraw__bank-input"
              placeholder="XXXX" />
          </label>
          <label className="withdraw__bank-label">
            <input
              type="text"
              maxlength="4"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="withdraw__bank-input"
              placeholder="XXXX" />
          </label>
        </div>
        <div className="withdraw__bank-row withdraw__bank-row_name">
          <label className="withdraw__bank-label">
            <span className="withdraw__bank-label-text">Cardholder name</span>
            <input type="number" className="withdraw__bank-input" placeholder="Cardholder name" />
          </label>
        </div>
        <div className="withdraw__bank-row withdraw__bank-row_valid">
          <span className="withdraw__bank-label-text"> Valid THRU</span>
          <div className="withdraw__bank-select-box">
            <select value="" className="withdraw__bank-select">
              <option name="" className="withdraw__bank-option">2021</option>
              <option name="" className="withdraw__bank-option">2020</option>
            </select>
          </div>
          <div className="withdraw__bank-select-box">
            <select value="" className="withdraw__bank-select">
              <option name="" className="withdraw__bank-option">1</option>
              <option name="" className="withdraw__bank-option">2</option>
            </select>
          </div>
        </div>
        <div className="withdraw__bank-row withdraw__bank-row_card">
          <span className="withdraw__bank-label-text">CVV2/CVC2</span>
          <label className="withdraw__bank-label">
            <input
              type="text"
              maxlength="4"
              oninput="this.value=this.value.replace(/[^0-9]/g,'');"
              className="withdraw__bank-input"
              placeholder="XXXX" />
          </label>
        </div>
        <div className="withdraw__bank-row withdraw__bank-row_submit">
          <span className="withdraw__bank-label-text">Total amount</span>
          <label className="withdraw__bank-label">
            <input type="text" className="withdraw__bank-input" placeholder="0 Tzs" />
          </label>
          <button type="submit" className="withdraw__bank-submit-btn">confirm</button>
        </div>
      </form>

    </div>
  </div>
</>;

export default WithdrawDepositBanks;
