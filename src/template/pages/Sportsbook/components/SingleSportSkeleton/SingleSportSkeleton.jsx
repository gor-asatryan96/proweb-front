import SingleSportFilterSkeleton from './SingleSportFilterSkeleton/SingleSportFilterSkeleton';
import SingleSportHeaderSkeleton from './SingleSportHeaderSkeleton/SingleSportHeaderSkeleton';
import SingleSportMarketSkeleton from './SingleSportMarketSkeleton/SingleSportMarketSkeleton';

const skeletonTemplate = [
  { isDouble: false, count: 3 },
  { isDouble: true, count: 2 },
  { isDouble: false, count: 11 },
  { isDouble: false, count: 3 },
  { isDouble: true, count: 7 },
  { isDouble: false, count: 3 },
  { isDouble: true, count: 2 },
  { isDouble: false, count: 11 },
];

const SingleSportSkeleton = () => (
  <section className="bet bet-game">
    <div className="container bet__container">
      <SingleSportHeaderSkeleton />
      <SingleSportFilterSkeleton />
      <div className="bet-ratio">
        <ul className="bet-ratio__extra">
          {skeletonTemplate.map((item, i) => (
            <SingleSportMarketSkeleton key={i} isDouble={item.isDouble} count={item.count} />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default SingleSportSkeleton;
