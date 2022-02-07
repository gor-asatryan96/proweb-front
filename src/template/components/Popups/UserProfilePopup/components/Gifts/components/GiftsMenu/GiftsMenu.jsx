import GiftsMenuItem from './components/GiftsMenuItem';

const items = [
  {
    id: 1, title: 'Birthday gift', date: new Date(), status: '4/12',
  },
  {
    id: 2, title: 'Christmas gift', date: new Date(), status: 'Unuse',
  },
  {
    id: 3, title: 'Summer gift', date: new Date(), status: 'Expired',
  },
];

const GiftsMenu = ({ goBack, setActiveGift }) => <>
  <div className="gift__filter">
    <div className="gift__filter-inner">
      <div className="menu-back">
        <button type="button" onClick={goBack} className="menu-back__icon-box">
          <span className="img-container">
            <svg className="menu-back__icon" width="30" height="26">
              <use xlinkHref="#menu-arrow-left" />
            </svg>
          </span>

        </button>
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
      </div>
      <form className="gifts__filter-form">
        <div className="gifts__filter-column gifts__filter-column_input">
          <label className="gifts__filter-label">
            <span>Receiving date</span>
            <input type="text" className="gifts__filter-input" />
          </label>
        </div>
        <div className="gifts__filter-column gifts__filter-column_input">
          <label className="gifts__filter-label">
            <span>Status</span>
            <select className="gifts__filter-select">
              <option>All</option>
            </select>
          </label>
        </div>
        <div className="gifts__filter-column gifts__filter-column_btn">
          <button className="gifts__filter-btn gifts__filter-btn_submit" type="submit">OK</button>
        </div>
        <div className="gifts__filter-column gifts__filter-column_btn">
          <button className="gifts__filter-btn gifts__filter-btn_delete" type="submit">RESET</button>
        </div>
      </form>
    </div>
  </div>
  <div className="menu-inner">
    <div className="gift__block">
      {items.map(item => (
        <GiftsMenuItem key={item.id} data={item} setActiveGift={setActiveGift} />
      ))}
    </div>
  </div>
</>;

export default GiftsMenu;
