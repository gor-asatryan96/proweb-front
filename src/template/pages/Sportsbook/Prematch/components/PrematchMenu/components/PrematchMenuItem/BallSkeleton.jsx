import { useMediaQuery } from 'react-responsive';
import ContentLoader from 'react-content-loader';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';

const BallSkeleton = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <ContentLoader
      speed={2}
      width='100%'
      height='100%'
      backgroundColor="var(--pmbet-blue-dark)"
      foregroundColor='var(--pmbet-blue-darker)'
        >
      <circle
        cx='50%'
        cy='50%'
        r='50%' />
    </ContentLoader>
  );
};

export default BallSkeleton;
