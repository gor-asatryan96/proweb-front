import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { MEDIA_QUERIES } from '../../../../../../../../../../constants/mediaQuery.constants';
import s from './PrematchEventsHeader.module.scss';
import Flag from '../../../../../../../../../../components/Flag/Flag';
import { selectIsPrematchEventsLoading, selectPrematchActiveLeague } from '../../../../../../../../../../redux/reducers/sport/sport.slice';
import PrematchEventsHeaderSkeleton from './PrematchEventsHeaderSkeleton';
import PrematchEventsFilters from '../PrematchEventsFilters/PrematchEventsFilters';

const PrematchEventsHeader = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const leagueInfo = useSelector(selectPrematchActiveLeague);
  const isEventsLoading = useSelector(selectIsPrematchEventsLoading);

  if (!leagueInfo || isEventsLoading) return <PrematchEventsHeaderSkeleton />;

  return (
    <div className='bet-filter__block'>
      <div className={s.prematchHeader}>
        {!isDesktop && <div className={classNames(s.prematchHeader__back, { [s.mobile]: !isDesktop })}>
          <div className={s.prematchHeaderBack__button}>
            <svg className={s.prematchHeaderBack__svg}>
              <use xlinkHref="#menu-arrow-left" />
            </svg>
          </div>
        </div>}
        <div className={classNames(s.prematchHeader__info, { [s.mobile]: !isDesktop })}>
          <div className={s.prematchHeader__flag}>
            <Flag code={'EN'} />
          </div>
          <div className={s.prematchHeader__country}>England</div>
          <div className={s.prematchHeader__league}>Premer Legaue</div>
        </div>
        <div className={s.prematchHeader__count}>15</div>
      </div>
      <PrematchEventsFilters />
    </div>
  );
};

export default PrematchEventsHeader;