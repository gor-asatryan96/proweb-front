import classNames from 'classnames';
import RowSkeleton from '../../../../../components/Skeletons/RowSkeleton/RowSkeleton';

const SingleSportMarketSkeleton = ({ isDouble, count }) => (
  <li className={classNames('bet-ratio__extra__item', 'skeleton')}>
    <div className='bet-ratio__nav active'>
      <span className="bet-ratio__nav__title">
        <RowSkeleton />
      </span>
      <span className="bet-ratio__nav__arrow arrow-bottom">
        <RowSkeleton />
      </span>
    </div>
    <ul className='bet-ratio__extra__more active'>
      <li className={'bet-ratio__extra__row'}>
        {new Array(count).fill(null).map((_, i) => (
          <div key={i} className={isDouble ? 'bet-ratio__extra__btn' : 'bet-ratio__match__btn'}>
            <RowSkeleton />
          </div>
        ))}
      </li>
    </ul>
  </li>
);

export default SingleSportMarketSkeleton;
