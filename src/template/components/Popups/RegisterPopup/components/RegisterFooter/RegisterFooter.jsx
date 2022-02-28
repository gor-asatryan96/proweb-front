const RegisterFooter = ({
  buttonText = 'Register', isTermsAccepted, setIsTermsAccepted,
}) => (
  <>
    <div className="popup__term">
      <div className="popup__term__info">
        by clicking button bellow, you agree to our
        <div className="popup__term__link">
          termS & conditions
        </div>
        <div className="popup__term__link">
          privacy policy
        </div>
        and
        <div className="popup__term__link">
          cookies policy
        </div>
      </div>
      <div className="checkbox">
        <input className="checkbox__btn" type="checkbox" checked={isTermsAccepted} onChange={e => setIsTermsAccepted(e.target.checked)} />
        <span className="checkbox__bg" />
        <span className="checkbox__round" />
      </div>
    </div>
    <div className="popup-create__accept">
      <button disabled={!isTermsAccepted} type="submit" className="popup__btn">
        {buttonText}
      </button>
    </div></>
);

export default RegisterFooter;
