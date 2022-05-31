import RowSkeleton from '../../../../../../../../../components/Skeletons/RowSkeleton/RowSkeleton';

const PrematchMenuCountryItemSkeleton = () => (
  <li className="sidebar__countryItem skeleton">
    <div className='sidebar__countryButton'>
      <div className="country__title">
        <div className="sidebar__countryFlag">
          <RowSkeleton />
        </div>
        <div className="sidebar__countryName">
          <RowSkeleton />
        </div>
      </div>
      <span className="sidebar__countryInfo">
        <div className="sidebar__countryQuantity">
          <RowSkeleton />
        </div>
        <span className="sidebar__countryMore">
          <RowSkeleton />
        </span>
      </span>
    </div>
  </li>
);

export default PrematchMenuCountryItemSkeleton;
