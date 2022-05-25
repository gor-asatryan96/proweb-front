import classNames from 'classnames';
import ContentLoader from 'react-content-loader';
import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../constants/mediaQuery.constants';

const SingleSportHeaderSkeleton = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <div className={classNames('bet-match', 'skeleton')}>
      <ul className={classNames('bet-match__list', { 'bet-match__item--panel': true })}>
        <li className="bet-match__item bet-match__item--football">
          <div className='bet-match__bg'>
            <ContentLoader
              speed={2}
              width='100%'
              height='100%'
              backgroundColor="var(--pmbet-cream-5)"
              foregroundColor='var(--pmbet-cream)'
        >
              {/* header */}
              {!isDesktop && <circle cx='0.7rem' cy='0.7rem' r='0.7rem' />}
              <rect x={isDesktop ? '0' : '2.5rem'} y="0" width="1.85rem" height="1.32rem" rx="2px" ry="2px" />
              <rect x={isDesktop ? '2.278rem' : '4.8rem'} y="0.112rem" width="5rem" height="1.065rem" rx="2px" ry="2px" />
              <rect x="60%" y="0.112rem" width="5rem" height="1.065rem" rx="2px" ry="2px" />
              <rect x="calc(100% - 4.609rem)" y="0.062rem" width="1.509rem" height="1.165rem" rx="2px" ry="2px" />
              <rect x="calc(100% - 1.32rem)" y="0" width="1.32rem" height="1.32rem" rx="2px" ry="2px" />

              {/* teams */}
              <rect x="12%" y={isDesktop ? '2.6rem' : '1.8rem'} width="30%" height="1.4rem" rx="2px" ry="2px" />
              <rect x="46%" y={isDesktop ? '2.6rem' : '1.8rem'} width="8%" height="1.4rem" rx="2px" ry="2px" />
              <rect x="58%" y={isDesktop ? '2.6rem' : '1.8rem'} width="30%" height="1.4rem" rx="2px" ry="2px" />
            </ContentLoader>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SingleSportHeaderSkeleton;
