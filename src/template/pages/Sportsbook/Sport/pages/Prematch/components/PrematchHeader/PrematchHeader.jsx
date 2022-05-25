import classNames from 'classnames';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import { SPORT_TABS } from '../../../../constants/sport.constants';

const PrematchHeader = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <div className="bet-filter">
      PrematchHeader back header
    </div>
  );
};

export default PrematchHeader;
