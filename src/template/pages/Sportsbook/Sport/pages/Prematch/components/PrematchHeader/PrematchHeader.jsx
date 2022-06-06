import classNames from 'classnames';
import React, { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import s from './PrematchHeader.module.scss';
import Flag from '../../../../../../../../components/Flag/Flag';
import { useSportParams } from '../../../../hooks/sport.hooks';
import { selectPrematchSportsList } from '../../../../../../../../redux/reducers/sport/sport.slice';
import { replaceUnderscores } from '../../../../../../../../helpers/utils';

const PrematchHeader = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  const { sportName, country, league } = useSportParams();
  const sportList = useSelector(selectPrematchSportsList);

  const currentLeague = useMemo(() => {
    if (!sportList.length || !sportName || !country || !league) return null;
    const sportInfo = sportList.find(sport => sport.sportName === replaceUnderscores(sportName));
    if (!sportInfo) return null;
    const countryInfo = sportInfo.countries.find(item => item.name === replaceUnderscores(country));
    if (!countryInfo) return null;
    const leagueInfo = countryInfo.leagues.find(el => el.competitionName === replaceUnderscores(league));
    if (!leagueInfo) return null;
    return leagueInfo;
  }, [ sportList, sportName, country, league ]);

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
