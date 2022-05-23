import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { replaceSpaces } from '../../../../../../../../../../helpers/utils';
import { SPORT_TABS_URLS } from '../../../../../../constants/sport.constants';

const { PRE_MATCH } = SPORT_TABS_URLS;

const PrematchMenuLigaItem = ({ league, active }) => {
  const navigate = useNavigate();
  const onLeagueClick = () => {
    if (active) return;
    navigate(`/Sport/${PRE_MATCH}/${replaceSpaces(league.sportName)}/${replaceSpaces(league.country)}/${
      replaceSpaces(league.competitionName)}`);
  };

  return (
    <li onClick={onLeagueClick} className={classNames('sidebar__ligueItem', { active })}>
      <div className="sidebar__ligueName">{league.competitionName}</div>
      <div className="sidebar__ligueQuantity">{league.eventsCount}</div>
    </li>
  );
};

export default PrematchMenuLigaItem;
