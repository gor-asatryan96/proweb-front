const FavouritsCasinoItem = ({ data }) => (
  <li className="favourite__itemField">
    <div className="favourite__casinoField">
      <div className="favourite__casinoFieldImg">
        <img src={data.image} alt="casino" className="favourite__casinoFieldImgTag" />
      </div>
      <div className="favourite__casinoFieldInfo">
        <div className="favourite__casinoFieldTitle">Casino</div>
        <div className="favourite__casinoFiledGameName">{data.name}</div>
      </div>
      <div className="favourite__casinoFieldButtonContainer">
        <button type="button" className="favourite__casinoFieldButton" aria-label="favourite button">
          <span className="favourite__casinoFieldButtonIcon">
            <svg className="favourite__casinoFieldButtonIconSvg" viewBox="0 0 21.5 20.5">
              <use xlinkHref="#starCircle" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </li>
);

export default FavouritsCasinoItem;
