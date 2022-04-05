const GiftsHeader = ({ goBack, isDesktop }) => (
  <div className="gift__filter">
    <div className="gift__filter-inner">
      <div className="menu-back">
        {
          !isDesktop && <>
            <button type="button" onClick={goBack} className="menu-back__icon-box">
              <span className="img-container">
                <svg className="menu-back__icon" width="30" height="26">
                  <use xlinkHref="#menu-arrow-left" />
                </svg>
              </span>
            </button>
          </>
        }
        <div className="menu-back__title">
          <div className="gifts__title-icon">
            <div className="img-container">
              <svg width="27" height="26">
                <use xlinkHref="#profile-gift" />
              </svg>
            </div>
          </div>
          GIFTS
        </div>
        {!isDesktop && (
        <div className="menu-back-search-block">
          <button type="button" className="menu-back__search-icon">
            <span className="img-container">
              <svg className="icon">
                <use xlinkHref="#search" />
              </svg>
            </span>
          </button>
          <form className="menu-back__search-form">
            <label>
              <input type="text" className="menu-back__search-input" placeholder="Search" />
              <button type="button" className="menu-back__search-back-btn">
                <span className="img-container">
                  <svg className="icon">
                    <use xlinkHref="#menu-close" />
                  </svg>
                </span>
              </button>
            </label>
          </form>
        </div>
        )}
      </div>
      <form className="gifts__filter-form">
        <div className="gifts__filter-column gifts__filter-column_input gifts__filter-column_input--date">
          <label className="gifts__filter-label">
            <span>Receiving date</span>
            <input type="text" className="gifts__filter-input" />
          </label>
        </div>
        <div className="gifts__filter-column gifts__filter-column_input gifts__filter-column_input--status">
          <label className="gifts__filter-label">
            <span>Status</span>
            <select className="gifts__filter-select">
              <option>All</option>
            </select>
          </label>
        </div>
        {
          isDesktop && <>
            <div
              className="gifts__filter-column gifts__filter-column_input gifts__filter-column_input--search"
              style={{ position: 'relative' }}>
              <label className="gifts__filter-label">
                <input type="text" className="gifts__filter-input" placeholder={'Search'} />
                {isDesktop && (
                <button className="popup-profile__gift-search__btn">
                  <div className="img-container">
                    <svg width="18" height="18">
                      <use xlinkHref="#search" />
                    </svg>
                  </div>
                </button>
                )}
              </label>
            </div>
          </>
        }
        <div className="gifts__filter-column gifts__filter-column_btn">
          <button className="gifts__filter-btn gifts__filter-btn_submit" type="submit">OK</button>
        </div>
        <div className="gifts__filter-column gifts__filter-column_btn">
          <button className="gifts__filter-btn gifts__filter-btn_delete" type="submit">RESET</button>
        </div>
      </form>
    </div>
  </div>
);

export default GiftsHeader;
