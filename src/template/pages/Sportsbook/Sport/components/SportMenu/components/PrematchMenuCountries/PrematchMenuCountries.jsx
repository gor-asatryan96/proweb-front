import PrematchMenuCountryItem from './components/PrematchMenuCountryItem/PrematchMenuCountryItem';

const PrematchMenuCountries = ({ countries = []}) => (
  <div className="sidebar__country">
    <ul className="sidebar__countryList">
      {countries.map(country => (
        <PrematchMenuCountryItem key={country.name} country={country} />
      ))}
    </ul>
  </div>
);

export default PrematchMenuCountries;
