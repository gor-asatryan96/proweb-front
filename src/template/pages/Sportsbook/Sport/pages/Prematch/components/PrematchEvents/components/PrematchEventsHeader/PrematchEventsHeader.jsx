import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MEDIA_QUERIES } from '../../../../../../../../../../constants/mediaQuery.constants';
import s from './PrematchEventsHeader.module.scss';
import Flag from '../../../../../../../../../../components/Flag/Flag';
import { selectIsPrematchEventsLoading, selectPrematchActiveLeague } from '../../../../../../../../../../redux/reducers/sport/sport.slice';
import PrematchEventsHeaderSkeleton from './PrematchEventsHeaderSkeleton';
import PrematchEventsFilters from '../PrematchEventsFilters/PrematchEventsFilters';
import { SPORT_TABS } from '../../../../../../constants/sport.constants';
import { useSportParams } from '../../../../../../hooks/sport.hooks';

const { PRE_MATCH } = SPORT_TABS;

const PrematchEventsHeader = () => {
  const navigate = useNavigate();
  const { sportName } = useSportParams();
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const leagueInfo = useSelector(selectPrematchActiveLeague);
  const isEventsLoading = useSelector(selectIsPrematchEventsLoading);

  if (!leagueInfo || isEventsLoading) return <PrematchEventsHeaderSkeleton />;

  const { eventsCount, country, competitionName } = leagueInfo;

  const onBackClick = () => {
    navigate(`/Sport/${PRE_MATCH}/${sportName}`);
  };

  return (
    <div className='bet-filter__block'>
      <div className={s.prematchHeader}>
        {!isDesktop && <div className={classNames(s.prematchHeader__back, { [s.mobile]: !isDesktop })}>
          <div onClick={onBackClick} className={s.prematchHeaderBack__button}>
            <svg className={s.prematchHeaderBack__svg}>
              <use xlinkHref="#menu-arrow-left" />
            </svg>
          </div>
        </div>}
        <div className={classNames(s.prematchHeader__info, { [s.mobile]: !isDesktop })}>
          <div className={s.prematchHeader__flag}>
            <Flag country={country} />
          </div>
          <div className={s.prematchHeader__country}>{country}</div>
          <div className={s.prematchHeader__league}>{competitionName}</div>
        </div>
        <div className={s.prematchHeader__count}>{eventsCount}</div>
      </div>
      <PrematchEventsFilters />
    </div>
  );
};

export default PrematchEventsHeader;
