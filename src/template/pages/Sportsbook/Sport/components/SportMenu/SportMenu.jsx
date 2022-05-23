import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { selectIsPrematchSportsLoading } from '../../../../../../redux/reducers/sport/sport.slice';
import PrematchMenuSports from './components/PrematchMenuSports/PrematchMenuSports';
import SportMenuTabs from './components/SportMenuTabs/SportMenuTabs';

const PrematchMenu = () => {
  const isSportsLoading = useSelector(selectIsPrematchSportsLoading);

  return (
    <section className={classNames('sidebar', { sidebar__loading: isSportsLoading })}>
      <SportMenuTabs />
      <PrematchMenuSports />
    </section>
  );
};

export default PrematchMenu;
