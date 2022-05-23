const PrematchTimeFilters = () => (
  <div className="sidebar__betTypeTime">
    <div className="sidebar__betTypeHour">
      <button type="button" className="sidebar__betTypeTimeButton active">All</button>
    </div>
    <div className="sidebar__betTypeHour">
      <button type="button" className="sidebar__betTypeTimeButton">3 hrs</button>
    </div>
    <div className="sidebar__betTypeHour">
      <button type="button" className="sidebar__betTypeTimeButton">6 hrs</button>
    </div>
    <div className="sidebar__betTypeHour">
      <button type="button" className="sidebar__betTypeTimeButton">12 hrs</button>
    </div>
    <div className="sidebar__betTypeHour">
      <button type="button" className="sidebar__betTypeTimeButton">24 hrs</button>
    </div>
  </div>
);

export default PrematchTimeFilters;
