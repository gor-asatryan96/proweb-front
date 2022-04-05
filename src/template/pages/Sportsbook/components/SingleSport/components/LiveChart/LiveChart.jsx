const LiveChart = () => (
  <div className="bet-match__col bet-match__col_progress active">
    <div className="bet-progress">
      <ul className="bet-progress__list">
        <li className="bet-progress__item">
          <div className="bet-progress__title">
            Dangerous attack
          </div>
          <div className="bet-progress__line">
            <div className="bet-progress__step bet-progress__step--start">
              08
            </div>
            <div className="bet-progress__bar">
              <div className="bet-progress__bar-value" style={{ width: '50%' }} />
            </div>
            <div className="bet-progress__step bet-progress__step--end">
              08
            </div>
          </div>
        </li>
        <li className="bet-progress__item">
          <div className="bet-progress__title">
            Shot on target
          </div>
          <div className="bet-progress__line">
            <div className="bet-progress__step bet-progress__step--start">
              04
            </div>
            <div className="bet-progress__bar">
              <div className="bet-progress__bar-value" style={{ width: '30%' }} />
            </div>
            <div className="bet-progress__step bet-progress__step--end">
              08
            </div>
          </div>
        </li>
        <li className="bet-progress__item">
          <div className="bet-progress__title">
            Shot off target
          </div>
          <div className="bet-progress__line">
            <div className="bet-progress__step bet-progress__step--start">
              07
            </div>
            <div className="bet-progress__bar">
              <div className="bet-progress__bar-value" style={{ width: '90%' }} />
            </div>
            <div className="bet-progress__step bet-progress__step--end">
              08
            </div>
          </div>
        </li>
        <li className="bet-progress__item">
          <div className="bet-progress__title">
            Corner kick
          </div>
          <div className="bet-progress__line">
            <div className="bet-progress__step bet-progress__step--start">
              08
            </div>
            <div className="bet-progress__bar">
              <div className="bet-progress__bar-value" style={{ width: '99%' }} />
            </div>
            <div className="bet-progress__step bet-progress__step--end">
              08
            </div>
          </div>
        </li>
        <li className="bet-progress__item">
          <div className="bet-progress__title">
            Yellow card
          </div>
          <div className="bet-progress__line">
            <div className="bet-progress__step bet-progress__step--start">
              04
            </div>
            <div className="bet-progress__bar">
              <div className="bet-progress__bar-value" style={{ width: '35%' }} />
            </div>
            <div className="bet-progress__step bet-progress__step--end">
              08
            </div>
          </div>
        </li>
        <li className="bet-progress__item">
          <div className="bet-progress__title">
            Red card
          </div>
          <div className="bet-progress__line">
            <div className="bet-progress__step bet-progress__step--start">
              04
            </div>
            <div className="bet-progress__bar">
              <div className="bet-progress__bar-value" style={{ width: '45%' }} />
            </div>
            <div className="bet-progress__step bet-progress__step--end">
              08
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

export default LiveChart;
