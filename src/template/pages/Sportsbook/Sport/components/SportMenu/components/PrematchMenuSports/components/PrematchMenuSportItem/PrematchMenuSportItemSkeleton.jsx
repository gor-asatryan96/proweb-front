import { useMediaQuery } from 'react-responsive';
import ContentLoader from 'react-content-loader';
import { MEDIA_QUERIES } from '../../../../../../../../../../constants/mediaQuery.constants';

const PrematchMenuSportItemSkeleton = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <div className='sidebar__item sidebar__item_skeleton'>
      <ContentLoader
        speed={2}
        width='100%'
        height='100%'
        backgroundColor="var(--pmbet-blue-dark)"
        foregroundColor='var(--pmbet-blue-darker)'
        >
        <circle
          cx={isDesktop ? '8%' : '50%'}
          cy={isDesktop ? '50%' : '37%'}
          r={isDesktop ? '7%' : '17%'} />
        <rect
          x={isDesktop ? '19%' : '15%'}
          y={isDesktop ? '37%' : '70%'}
          width={isDesktop ? '30%' : '70%'}
          height={isDesktop ? '26%' : '18%'} />
        {isDesktop && <rect x="88%" y="37%" width="6%" height="26%" />}
      </ContentLoader>
    </div>
  );
};

export default PrematchMenuSportItemSkeleton;
