import { Popup } from '../../UI';
import casinoImage from '../../../assets/images/casinoGames/casino2.png';

const FavouritesPopup = () => (
  <Popup className='popup_favourite favourite active'>
    <div className="favourite__header">
      <div className="favourite__title">
        Favourites
        &nbsp;
        <span className="favourites__count">10</span>
      </div>
      <button className="favourite__closeButton" aria-label="close favourite popup">
        <span className="favourite__closeButtonContainer">
          <svg className="favourite__closeButtonSvg" viewBox="0 0 16.275 16.275">
            <use xlinkHref="#close-icon" />
          </svg>
        </span>
      </button>
    </div>
    <div className="favourite__container">
      {/* <!-- TODO if the container is empty use this 'favourite__emptyContainer' -->
        <!--        <div className="favourite__emptyContainer">-->
        <!--          Favorites is empty-->
        <!--        </div>--> */}

      <ul className="resetList favourite__list">
        <li className="favourite__item">
          <div className="favourite__itemDate">Added in
            <time datetime="2020-11-10">10.11.2020</time>
          </div>
          <ul className="resetList favourite__itemFields">
            <li className="favourite__itemField">
              <div className="betRate__setTicket betRate__setTicket_marked">
                <div className="bet-rate__set">
                  <div className="bet-rate__set__info">
                    <div className="bet-rate__set__time">
                      Europe / UEFA Euro CUP Cualification
                    </div>
                    <div className="bet-rate__set__team__block">
                      <div className="bet-rate__set__team">
                        Napoli
                      </div>
                      <div className="bet-rate__set__team">
                        Atalanta
                      </div>
                    </div>
                    <div className="bet-rate__set__desc">
                      {/* <!-- TODO: add className active --> */}
                      <div className="bet-rate__set__quantity active">
                        +367
                      </div>
                      <div className="bet-rate__set__date">
                        <span className="bet-rate__set__date__month">
                          08 Oct
                        </span>
                        <span className="bet-rate__set__date__time">
                          22:00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bet-rate__set__nav">
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        1
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.53
                      </span>
                    </button>
                    {/* <!-- TODO: add className hot for burn icon--> */}
                    <button className="bet-rate__set__btn hot">
                      <span className="bet-rate__set__number">
                        X
                      </span>
                      <span className="bet-rate__set__coefficient">
                        3.85
                      </span>
                    </button>
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        2
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.52
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="favourite__itemField">
              <div className="betRate__setTicket betRate__setTicket_marked">
                <div className="bet-rate__set">
                  <div className="bet-rate__set__info">
                    <div className="bet-rate__set__time">
                      Europe / UEFA Euro CUP Cualification
                    </div>
                    <div className="bet-rate__set__team__block">
                      <div className="bet-rate__set__team">
                        Napoli
                      </div>
                      <div className="bet-rate__set__team">
                        Atalanta
                      </div>
                    </div>
                    <div className="bet-rate__set__desc">
                      {/* <!--  TODO: add className active --> */}
                      <div className="bet-rate__set__quantity active">
                        +367
                      </div>
                      <div className="bet-rate__set__date">
                        <span className="bet-rate__set__date__month">
                          08 Oct
                        </span>
                        <span className="bet-rate__set__date__time">
                          22:00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bet-rate__set__nav">
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        1
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.53
                      </span>
                    </button>
                    {/* <!-- TODO: add className hot for burn icon--> */}
                    <button className="bet-rate__set__btn hot">
                      <span className="bet-rate__set__number">
                        X
                      </span>
                      <span className="bet-rate__set__coefficient">
                        3.85
                      </span>
                    </button>
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        2
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.52
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="favourite__itemField">
              <div className="betRate__setTicket betRate__setTicket_marked">
                <div className="bet-rate__set">
                  <div className="bet-rate__set__info">
                    <div className="bet-rate__set__time">
                      Europe / UEFA Euro CUP Cualification
                    </div>
                    <div className="bet-rate__set__team__block">
                      <div className="bet-rate__set__team">
                        Napoli
                      </div>
                      <div className="bet-rate__set__team">
                        Atalanta
                      </div>
                    </div>
                    <div className="bet-rate__set__desc">
                      {/* <!-- TODO: add className active --> */}
                      <div className="bet-rate__set__quantity active">
                        +367
                      </div>
                      <div className="bet-rate__set__date">
                        <span className="bet-rate__set__date__month">
                          08 Oct
                        </span>
                        <span className="bet-rate__set__date__time">
                          22:00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bet-rate__set__nav">
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        1
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.53
                      </span>
                    </button>
                    {/* <!-- TODO: add className hot for burn icon--> */}
                    <button className="bet-rate__set__btn hot">
                      <span className="bet-rate__set__number">
                        X
                      </span>
                      <span className="bet-rate__set__coefficient">
                        3.85
                      </span>
                    </button>
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        2
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.52
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li className="favourite__item">
          <div className="favourite__itemDate">Added in
            <time datetime="2020-11-10">10.11.2020</time>
          </div>
          <ul className="resetList favourite__itemFields">
            <li className="favourite__itemField">
              <div className="betRate__setTicket betRate__setTicket_marked">
                <div className="bet-rate__set">
                  <div className="bet-rate__set__info">
                    <div className="bet-rate__set__time">
                      Europe / UEFA Euro CUP Cualification
                    </div>
                    <div className="bet-rate__set__team__block">
                      <div className="bet-rate__set__team">
                        Napoli
                      </div>
                      <div className="bet-rate__set__team">
                        Atalanta
                      </div>
                    </div>
                    <div className="bet-rate__set__desc">
                      {/* <!--  TODO: add className active --> */}
                      <div className="bet-rate__set__quantity active">
                        +367
                      </div>
                      <div className="bet-rate__set__date">
                        <span className="bet-rate__set__date__month">
                          08 Oct
                        </span>
                        <span className="bet-rate__set__date__time">
                          22:00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bet-rate__set__nav">
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        1
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.53
                      </span>
                    </button>
                    {/* <!-- TODO: add className hot for burn icon--> */}
                    <button className="bet-rate__set__btn hot">
                      <span className="bet-rate__set__number">
                        X
                      </span>
                      <span className="bet-rate__set__coefficient">
                        3.85
                      </span>
                    </button>
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        2
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.52
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="favourite__itemField">
              <div className="favourite__casinoField">
                <div className="favourite__casinoFieldImg">
                  <img src={casinoImage} alt="casino image" className="favourite__casinoFieldImgTag" />
                </div>
                <div className="favourite__casinoFieldInfo">
                  <div className="favourite__casinoFieldTitle">Casino</div>
                  <div className="favourite__casinoFiledGameName">Dragon Throne</div>
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
            <li className="favourite__itemField">
              <div className="betRate__setTicket betRate__setTicket_marked">
                <div className="bet-rate__set">
                  <div className="bet-rate__set__info">
                    <div className="bet-rate__set__time">
                      Europe / UEFA Euro CUP Cualification
                    </div>
                    <div className="bet-rate__set__team__block">
                      <div className="bet-rate__set__team">
                        Napoli
                      </div>
                      <div className="bet-rate__set__team">
                        Atalanta
                      </div>
                    </div>
                    <div className="bet-rate__set__desc">
                      {/* <!-- TODO: add className active --> */}
                      <div className="bet-rate__set__quantity active">
                        +367
                      </div>
                      <div className="bet-rate__set__date">
                        <span className="bet-rate__set__date__month">
                          08 Oct
                        </span>
                        <span className="bet-rate__set__date__time">
                          22:00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bet-rate__set__nav">
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        1
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.53
                      </span>
                    </button>
                    {/* <!--TODO: add className hot for burn icon--> */}
                    <button className="bet-rate__set__btn hot">
                      <span className="bet-rate__set__number">
                        X
                      </span>
                      <span className="bet-rate__set__coefficient">
                        3.85
                      </span>
                    </button>
                    <button className="bet-rate__set__btn">
                      <span className="bet-rate__set__number">
                        2
                      </span>
                      <span className="bet-rate__set__coefficient">
                        2.52
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
            <li className="favourite__itemField">
              <div className="favourite__casinoField">
                <div className="favourite__casinoFieldImg">
                  <img src={casinoImage} alt="casino" className="favourite__casinoFieldImgTag" />
                </div>
                <div className="favourite__casinoFieldInfo">
                  <div className="favourite__casinoFieldTitle">Casino</div>
                  <div className="favourite__casinoFiledGameName">Dragon Throne</div>
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
            <li className="favourite__itemField">
              <div className="favourite__casinoField">
                <div className="favourite__casinoFieldImg">
                  <img src={casinoImage} alt="casino" className="favourite__casinoFieldImgTag" />
                </div>
                <div className="favourite__casinoFieldInfo">
                  <div className="favourite__casinoFieldTitle">Casino</div>
                  <div className="favourite__casinoFiledGameName">Dragon Throne</div>
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

          </ul>
        </li>
      </ul>
    </div>
    <div className="favourite__filters">
      <div className="favourite__filtersTitle">
        <svg className="favourite__filterSvg" viewBox="0 0 12.84 13.16">
          <use xlinkHref="#filterIcon" />
        </svg>
        My filters
      </div>
      <ul className="resetList favourite__listFilter">
        <li className="favourite__itemFilter">
          <div className="favourite__filterItem">
            <time className="favourite__filterTime" datetime="2020-11-10">2020.11.10</time>
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
        <li className="favourite__itemFilter">
          <div className="favourite__filterItem">
            <time className="favourite__filterTime" datetime="2020-11-10">2020.11.10</time>
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
                  <span className="favourite__flag flag flag_germany" />
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
        <li className="favourite__itemFilter">
          <div className="favourite__filterItem">
            <time className="favourite__filterTime" datetime="2020-11-10">2020.11.10</time>
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
        <li className="favourite__itemFilter">
          <div className="favourite__filterItem">
            <time className="favourite__filterTime" datetime="2020-11-10">2020.11.10</time>
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
                  <span className="favourite__flag flag flag_germany" />
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
      </ul>
      {/* <!-- TODO if the container is empty use this 'favourite__empty' -->
        <!--        <div className="favourite__empty">-->
        <!--          You have no filter saved-->
        <!--        </div> --> */}
    </div>
  </Popup>
);

export default FavouritesPopup;
