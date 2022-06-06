import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import s from './PrematchHeader.module.scss';
import Flag from '../../../../../../../../components/Flag/Flag';
import { selectIsPrematchEventsLoading, selectPrematchActiveLeague } from '../../../../../../../../redux/reducers/sport/sport.slice';
import PrematchHeaderSkeleton from './PrematchHeaderSkeleton';

const PrematchHeader = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const leagueInfo = useSelector(selectPrematchActiveLeague);
  const isEventsLoading = useSelector(selectIsPrematchEventsLoading);

  if (!leagueInfo || !isEventsLoading) return <PrematchHeaderSkeleton />;

  return (
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
  );
};

export default PrematchHeader;
