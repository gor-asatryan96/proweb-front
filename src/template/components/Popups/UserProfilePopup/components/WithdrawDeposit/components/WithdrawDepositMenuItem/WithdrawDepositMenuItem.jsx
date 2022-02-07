const WithdrawDepositMenuItem = ({ data, setActiveItem }) => (
  <li onClick={() => setActiveItem(data)} className="withdraw__item">
    <div className="withdraw__link">
      <div className="withdraw__img-container">
        <div className={`img-container ${data.class}`}>
          <img src={data.image} alt={data.name} />
        </div>
      </div>
      <div className="withdraw__title">
        {data.name}
      </div>
    </div>
  </li>
);

export default WithdrawDepositMenuItem;
