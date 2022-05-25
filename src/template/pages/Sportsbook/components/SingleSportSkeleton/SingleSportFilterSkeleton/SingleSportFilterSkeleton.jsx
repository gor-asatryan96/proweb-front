import classNames from 'classnames';
import { LOADING_ITEMS } from '../../../../../../helpers/utils';
import RowSkeleton from '../../../../../components/Skeletons/RowSkeleton/RowSkeleton';

const filterItems = LOADING_ITEMS.slice(0, 8);

const SingleSportFilterSkeleton = () => (

  <div className={classNames('bet-filter__block', 'skeleton')}>
    <div className="bet-filter__upcoming active">
      <div className="bet-filter__config__line bet-filter__config__line--type">
        <ul className="bet-type__list">
          {filterItems.map((_, i) => (
            <div key={i} className='bet-filter__skeleton'>
              <RowSkeleton />
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default SingleSportFilterSkeleton;
