const RecoveryEnterNumber = ({ setNextPage }) => (
  <form action="">
    <div className="popup-recover__title">
      Please, enter your Phone number
      <br />
      or Email address
    </div>
    <div className="popup__form">
      <div className="popup__line popup__line--password">
        <input className="popup__input input" type="password" placeholder="Phone number or Email" />
        <button className="input__show">
          <span className="img-container">
            <svg width="14" height="9">
              <use xlinkHref="#eye" />
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div className="popup-forgot__submit">
      <button className="popup__btn" onClick={setNextPage}>
        Reset
      </button>
    </div>
  </form>
);

export default RecoveryEnterNumber;
