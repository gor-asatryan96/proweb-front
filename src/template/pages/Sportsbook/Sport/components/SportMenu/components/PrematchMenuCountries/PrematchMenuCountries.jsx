import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../../../../../../constants/mediaQuery.constants';
import PrematchMenuCountryItem from './components/PrematchMenuCountryItem/PrematchMenuCountryItem';

const PrematchMenuCountries = ({ countries }) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);

  return (
    <div className="sidebar__country">
      <ul className="sidebar__countryList">
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
        <PrematchMenuCountryItem />
      </ul>
    </div>
  );
};

export default PrematchMenuCountries;
