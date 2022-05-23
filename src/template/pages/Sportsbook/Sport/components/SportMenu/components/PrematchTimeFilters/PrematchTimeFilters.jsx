import { useDispatch, useSelector } from 'react-redux';
import { selectPrematchTimeFilter, setPrematchTimeFilter } from '../../../../../../../../redux/reducers/sport/sport.slice';
import { SPORT_TIME_FILTERS } from '../../../../configs/sport.configs';
import PrematchTimeFilterItem from './components/PrematchTimeFilterItem';

const PrematchTimeFilters = () => {
  const dispatch = useDispatch();
  const activeTime = useSelector(selectPrematchTimeFilter);

  const onItemClick = (value) => {
    dispatch(setPrematchTimeFilter(value));
  };

  return (
    <div className="sidebar__betTypeTime">
      {SPORT_TIME_FILTERS.map((filter) => {
        const isActive = activeTime === filter.value;
        return (
          <PrematchTimeFilterItem
            key={filter.name}
            name={filter.name}
            active={isActive}
            onClick={() => !isActive && onItemClick(filter.value)} />
        );
      })}
    </div>
  );
};

export default PrematchTimeFilters;
