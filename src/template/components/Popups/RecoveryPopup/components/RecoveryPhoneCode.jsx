const RecoveryPhoneCode = ({ setNextPage, isRegister }) => (
  <form action="">
    <div className="popup-confirm__caption">
      Enter {isRegister ? 'confirm' : 'recovery'} code
    </div>
    <div className="popup-confirm__info">
      The {isRegister ? 'confirm' : 'recovery'} code was sent to your
      <br />
      Phone number.
      <br />
      <span>
        **********999
      </span>
      <br />
      Please, enter the code
    </div>
    <div className="popup-confirm__code">
      <ul className="popup-confirm__code__list">
        <li className="popup-confirm__code__item">
          <input
            className="popup-confirm__code__value"
            type="text"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
        </li>
        <li className="popup-confirm__code__item">
          <input
            className="popup-confirm__code__value"
            type="text"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
        </li>
        <li className="popup-confirm__code__item">
          <input
            className="popup-confirm__code__value"
            type="text"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
        </li>
        <li className="popup-confirm__code__item">
          <input
            className="popup-confirm__code__value"
            type="text"
            maxlength="1"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');" />
        </li>
      </ul>
    </div>
    <div className="popup-confirm__again">
      <div className="popup-confirm__again__link">
        Send again
      </div>
    </div>
  </form>
);

export default RecoveryPhoneCode;
