import classNames from 'classnames';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import Flag from '../../../../../../../../components/Flag/Flag';

const PrematchMenuDropdown = ({ countries }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const onCountryClick = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="sidebar__country">
      <ul className="sidebar__countryList">
        <li className="sidebar__countryItem">
          <button onClick={onCountryClick} className={classNames('sidebar__countryButton', { active: isOpen })}>
            <div className="country__title">
              <div className="sidebar__countryFlag">
                <Flag code={'EN'} />
              </div>
              <div className="sidebar__countryName">England</div>
            </div>
            <span className="sidebar__countryInfo">
              <div className="sidebar__countryQuantity">200</div>
              <span className="sidebar__countryMore">
                <svg className="sidebar__countrySvg">
                  <use xlinkHref="#arrow-bottom" />
                </svg>
              </span>
            </span>
          </button>
          {isOpen && (
            <div className="sidebar__ligue">
              <ul className="sidebar__ligueList">
                <li className="sidebar__ligueItem active">
                  <div className="sidebar__ligueName">Premier League</div>
                  <div className="sidebar__ligueQuantity">200</div>
                </li>
                <li className="sidebar__ligueItem">
                  <div className="sidebar__ligueName">Premier League</div>
                  <div className="sidebar__ligueQuantity">200</div>
                </li>
                <li className="sidebar__ligueItem">
                  <div className="sidebar__ligueName">Premier League</div>
                  <div className="sidebar__ligueQuantity">200</div>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default PrematchMenuDropdown;
