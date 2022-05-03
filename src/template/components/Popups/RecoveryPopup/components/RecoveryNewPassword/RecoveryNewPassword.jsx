import { Button } from '../../../../UI';

const RecoveryNewPassword = ({ setNextPage }) => (
  <form action="">
    <div className="popup-forgot__caption">
      Enter your new password
    </div>
    <div className="popup__form">
      <div className="popup__line popup__line--password">
        <input className="popup__input input" type="password" placeholder="New password" />
        <button className="input__show">
          <span className="img-container">
            <svg width="14" height="9">
              <use xlinkHref="#eye" />
            </svg>
          </span>
        </button>
      </div>
      <div className="popup__line popup__line--password">
        <input className="popup__input input" type="password" placeholder="Repeat password" />
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
      <Button onClick={setNextPage}>
        Continue
      </Button>
    </div>
  </form>
);

export default RecoveryNewPassword;
