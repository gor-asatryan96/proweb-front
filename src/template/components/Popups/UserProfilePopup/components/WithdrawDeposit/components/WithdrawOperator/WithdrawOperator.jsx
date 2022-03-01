import GoBackHeader from '../../../../../components/GoBackHeader';

const WithdrawOperator = ({ goBack, data }) => <>
  <GoBackHeader goBack={goBack} title='WITHDRAW' />
  <div className="withdraw__sign-content active">
    <div className="withdraw__sign-icon-box">
      <div className="img-container">
        <img src={data.image} alt="vodafone logo" className="withdraw__sign-icon" />
      </div>
    </div>
    <form className="withdraw__form">
      <label className="withdraw__label">
        <input type="number" className="withdraw__input withdraw__input_num" placeholder="Phone Number" />
      </label>
      <label className="withdraw__label">
        <input type="number" className="withdraw__input withdraw__input_amount" placeholder="Amount" />
        <span className="withdraw__input-amount-text">Min 1000Tzs</span>
      </label>
      <button type="button" className="withdraw__form-btn">Withdraw</button>
    </form>
  </div>
</>;

export default WithdrawOperator;
