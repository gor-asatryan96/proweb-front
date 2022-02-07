const RecoverySuccessful = ({ setNextPage }) => (
  <form action="">
    <div className="popup-reset__caption">
      Password reset successful
    </div>
    <div className="popup-reset__info">
      You have successful reset
      <br />
      your password.
      <br />
      Please use your new password when
      <br />
      logging in
    </div>
    <div className="popup-forgot__submit">
      <button onClick={setNextPage} className="popup__btn">
        Continue
      </button>
    </div>
  </form>
);

export default RecoverySuccessful;
