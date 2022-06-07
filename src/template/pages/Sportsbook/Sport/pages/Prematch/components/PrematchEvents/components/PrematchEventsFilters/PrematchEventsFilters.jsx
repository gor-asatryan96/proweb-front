import PrematchMarketSelect from './components/PrematchMarketSelect/PrmeatchMarketSelect';

const PrematchEventsFilters = () => (
  <div className="bet-filter__more">
    <div className="bet-filter__select">
      <PrematchMarketSelect />
    </div>
    <div className="bet-filter__sides">
      <div className="bet-filter__side">Home</div>
      <div className="bet-filter__side">Away</div>
    </div>
  </div>
);

export default PrematchEventsFilters;
