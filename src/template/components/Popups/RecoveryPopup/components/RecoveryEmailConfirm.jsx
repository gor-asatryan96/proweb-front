const RecoveryEmailConfirm = ({ setNextPage }) => (
  <form action="">
    <div className="popup-sent__caption">
      Please, go to the link
    </div>
    <div className="popup-sent__info">
      The link was sent to your
      <br />
      Emsil address.
      <br />
      <span>
        *********aaa@gmail.com
      </span>
    </div>
    <div className="popup-forgot__submit">
      <button onClick={setNextPage} className="popup__btn">
        Continue
      </button>
    </div>
  </form>
);

export default RecoveryEmailConfirm;
