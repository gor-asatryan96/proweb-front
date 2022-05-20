import classNames from 'classnames';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Flag from '../../../../../../../../../../components/Flag/Flag';
import { MEDIA_QUERIES } from '../../../../../../../../../../constants/mediaQuery.constants';
import PrematchMenuLigaItem from '../PrematchMenuLigaItem/PrematchMenuLigaItem';

const PrematchMenuCountryItem = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  const onCountryClick = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
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
          <PrematchMenuLigaItem active />
          <PrematchMenuLigaItem />
          <PrematchMenuLigaItem />
        </ul>
      </div>
      )}
    </li>
  );
};

export default PrematchMenuCountryItem;
