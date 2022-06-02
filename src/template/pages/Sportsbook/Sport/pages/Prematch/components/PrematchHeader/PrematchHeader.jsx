import classNames from 'classnames';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { SPORT_TABS } from '../../../../constants/sport.constants';
import s from './PrematchHeader.module.scss';
import Flag from '../../../../../../../../components/Flag/Flag';

const PrematchHeader = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

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
