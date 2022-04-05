import React from 'react';

const FavouritsFilterItem = () => (
  <li className="favourite__itemFilter">
    <div className="favourite__filterItem">
      <time className="favourite__filterTime" dateTime="2020-11-10">2020.11.10</time>
      <div className="favourite__filterItemSquare">
        <div className="favorite__filterInfoTitle">
          <span>Sport|</span> <span className="favorite__filterInfoTitleGameName">Football</span>
        </div>
        <button
          type="button"
          className="favourite__casinoFieldButton favourite__casinoFieldButton_filter"
          aria-label="favourite button">
          <span className="favourite__casinoFieldButtonIcon">
            <svg className="favourite__casinoFieldButtonIconSvg" viewBox="0 0 21.5 20.5">
              <use xlinkHref="#starCircle" />
            </svg>
          </span>
        </button>
        <div className="favourite__filterColumn favourite__filterColumn_addMargin">
          <span className="favourite__filterCell favourite__filterCell_growOne">
            <span className="favourite__flag flag flag_england" />
            Premier League
          </span>
        </div>
        <div className="favourite__filterColumn">
          <span className="favourite__filterCell favourite__filterCell_growOne">
            Asian Handicap
          </span>
          <span className="favourite__filterCell">
            1 hrs
          </span>
        </div>
      </div>
    </div>
  </li>
);

export default FavouritsFilterItem;
