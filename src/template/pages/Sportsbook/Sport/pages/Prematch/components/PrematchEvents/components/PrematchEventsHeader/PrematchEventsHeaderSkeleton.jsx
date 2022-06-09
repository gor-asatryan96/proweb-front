import classNames from 'classnames';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../../../constants/mediaQuery.constants';
import RowSkeleton from '../../../../../../../../../components/Skeletons/RowSkeleton/RowSkeleton';
import s from './PrematchEventsHeader.module.scss';

const PrematchEventsHeaderSkeleton = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  return (
    <div className={classNames('bet-filter__block', s.skeleton)}>
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
            <RowSkeleton />
          </div>
          <div className={s.prematchHeader__country}>
            <RowSkeleton />
          </div>
          <div className={s.prematchHeader__league}>
            <RowSkeleton />
          </div>
        </div>
        <div className={s.prematchHeader__count}>
          <RowSkeleton />
        </div>
      </div>
      <div className="bet-filter__more">
        <div className={classNames('bet-filter__select', s.skeletonSelect)}>
          <div><RowSkeleton /></div>
          <div><RowSkeleton /></div>
        </div>
        <div className="bet-filter__sides">
          <div className={s.skeletonMarketType}>
            <RowSkeleton />
          </div>
          <div className={s.skeletonMarketType}>
            <RowSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrematchEventsHeaderSkeleton;
