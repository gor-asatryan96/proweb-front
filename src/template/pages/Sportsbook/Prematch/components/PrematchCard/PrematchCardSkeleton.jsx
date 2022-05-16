import classNames from 'classnames';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';
import s from './PrematchCard.module.scss';

const PrematchCardSkeleton = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <li className={classNames('bet-rate__item', s.skeletonRoot)}>
      <ContentLoader
        speed={2}
        width='100%'
        height='100%'
        backgroundColor="var(--pmbet-blue-sky)"
        foregroundColor='var(--pmbet-blue-lighter)'
        >
        <rect x="0" y="2.5%" width="40%" height="16%" rx="2px" ry="2px" />
        {isDesktop && <>
          <rect x="74%" y="0" width="5%" height="21%" rx="2px" ry="2px" />
          <rect x="84%" y="0" width="5%" height="21%" rx="2px" ry="2px" />
          <rect x="94%" y="0" width="6%" height="21%" rx="2px" ry="2px" />
        </>}

        <rect
          x="0"
          y={isDesktop ? '38%' : '30%'}
          width="20%"
          height="20%"
          rx="2px"
          ry="2px" />
        <rect
          x="0"
          y={isDesktop ? '72%' : '58%'}
          width="25%"
          height="20%"
          rx="2px"
          ry="2px" />

        <rect
          x={isDesktop ? '68%' : '50%'}
          y={isDesktop ? '33%' : '1%'}
          width={isDesktop ? '10%' : '16%'}
          height={isDesktop ? '65%' : '96%'}
          rx="8px"
          ry="8px" />
        <rect
          x={isDesktop ? '79%' : '67%'}
          y={isDesktop ? '33%' : '1%'}
          width={isDesktop ? '10%' : '16%'}
          height={isDesktop ? '65%' : '96%'}
          rx="8px"
          ry="8px" />
        <rect
          x={isDesktop ? '90%' : '84%'}
          y={isDesktop ? '33%' : '1%'}
          width={isDesktop ? '10%' : '16%'}
          height={isDesktop ? '65%' : '96%'}
          rx="8px"
          ry="8px" />

        {!isDesktop && <>
          <rect x='32%' y='84%' width='16%' height='12%' rx="2px" ry="2px" />
          <rect x='0' y='84%' width='8%' height='12%' rx="2px" ry="2px" />
          </>}
      </ContentLoader>
    </li>
  );
};

export default PrematchCardSkeleton;
