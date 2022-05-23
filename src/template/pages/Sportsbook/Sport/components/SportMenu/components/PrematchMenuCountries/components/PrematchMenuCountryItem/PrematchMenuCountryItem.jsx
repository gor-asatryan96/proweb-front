import classNames from 'classnames';
import { useState } from 'react';
import Flag from '../../../../../../../../../../components/Flag/Flag';
import { replaceUnderscores } from '../../../../../../../../../../helpers/utils';
import { useSportParams } from '../../../../../../hooks/sport.hooks';
import PrematchMenuLigaItem from '../PrematchMenuLigaItem/PrematchMenuLigaItem';

const PrematchMenuCountryItem = ({ country }) => {
  const sportParams = useSportParams();
  const [ isOpen, setIsOpen ] = useState(false);

  const onCountryClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <li className="sidebar__countryItem">
      <button onClick={onCountryClick} className={classNames('sidebar__countryButton', { active: isOpen })}>
        <div className="country__title">
          <div className="sidebar__countryFlag">
            <Flag country={country.name} />
          </div>
          <div className="sidebar__countryName">{country.name}</div>
        </div>
        <span className="sidebar__countryInfo">
          <div className="sidebar__countryQuantity">{country.eventsCount}</div>
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
          {country.leagues.map((league) => {
            const isActive = league.competitionName === replaceUnderscores(sportParams.league)
            && league.country === replaceUnderscores(sportParams.country)
            && league.sportName === replaceUnderscores(sportParams.sportName);
            return (
              <PrematchMenuLigaItem
                key={league.competitionId}
                league={league}
                active={isActive} />
            );
          })}
        </ul>
      </div>
      )}
    </li>
  );
};

export default PrematchMenuCountryItem;
