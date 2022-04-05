const MyBetsHistoryItemInfo = ({ goBack, isDesktop }) => <>
  {
    !isDesktop && <>
      <div className="menu-back">
        <div className="menu-back__icon-block">
          <div onClick={goBack} className="menu-back__icon-box">
            <div className="img-container">
              <svg className="menu-back__icon">
                <use xlinkHref="#menu-arrow-left" />
              </svg>
            </div>
          </div>
          <div className="menu-back__icon-text">Multiple</div>
        </div>
        <div className="menu-back__title" />
      </div>
    </>
  }
  <div className="menu-inner">
    {
      !isDesktop && <>
        <div className="history__row history__row_fixed history__row_inner">
          <div className="history__col history__col_date">Date</div>
          <div className="history__col history__col_id">ID</div>
          <div className="history__col history__col_type">Type</div>
          <div className="history__col history__col_amount">Amount</div>
        </div>
        <div className="history__in history__in_event">
          <div className="history__row">
            <div className="history__col history__col_date">
              <div>01.01.2021</div>
              <div>16:30</div>
            </div>
            <div className="history__col history__col_id">123456789</div>
            <div className="history__col history__col_type">Single</div>
            <div className="history__col history__col_amount">12345.00Tzs</div>
          </div>
          <div className="history__row-line" />
          <div className="history__row_bottom">
            <div className="history__col_bottom">
              <div>Odds</div>
              <div className="history_loser">LOST</div>
            </div>
            <div className="history__col_bottom history__col_bottom_coef">
              <div>X8.47</div>
              <div className="history_loser">0.00</div>
            </div>
          </div>
          {/* <div className="history__col history__col_icon">
        <div className="img-container">
          <svg className="icon">
            <use xlinkHref="#menu-arrow-right" />
          </svg>
        </div>
      </div> */}
        </div>
      </>
    }
    {!isDesktop && (
    <div className="history__event">
      <div className="history__event-header">Events</div>
      <div className="history__event-in">
        <div className="history__event-row history__event-row_top">
          <div className="history__event-title">
            <span>AC Milan</span>
            <span className="history_winner history__event-title_vs">Vs</span>
            <span>Inter Milan</span>
          </div>
          <div className="history__event-status history_winner">WON</div>
        </div>
        <div className="history__event-row history__event-row_middle">
          <div className="history__event-series"><strong>Italy</strong>-Serie A</div>
          <div className="history__event__date">
            <div className="history__event-year">01.01.2021 </div>
            <div className="history__event-time">16:30</div>
          </div>
          <div className="history__event-total">
            <span className="history__event-total-text">Total Goals </span>
            <div className="history__event__total-in">
              <strong>Over(1.5)</strong>
              <strong>1.92</strong>
            </div>
          </div>
        </div>
        <div className="history__event-row history__event-row_bottom">
          <div className="history__event-score"><strong>Score</strong>: 0:1(0:1) 12m</div>
          <div className="history__event-result"><strong>Result</strong>: 0:2(0:1)</div>
        </div>
      </div>
      <div className="history__event-in">
        <div className="history__event-row history__event-row_top">
          <div className="history__event-title">
            <span>Chelsea</span>
            <span className="history_winner history__event-title_vs">Vs</span>
            <span>Newcastle United</span>
          </div>
          <div className="history__event-status history_loser">LOST</div>
        </div>
        <div className="history__event-row history__event-row_middle">
          <div className="history__event-series"><strong>Italy</strong>-Serie A</div>
          <div className="history__event__date">
            <div className="history__event-year">01.01.2021 </div>
            <div className="history__event-time">16:30</div>
          </div>
          <div className="history__event-total">
            <span className="history__event-total-text">Total Goals </span>
            <div className="history__event__total-in">
              <strong>Over(4)</strong>
              <strong>1.92</strong>
            </div>
          </div>
        </div>
        <div className="history__event-row history__event-row_bottom">
          <div className="history__event-score"><strong>Score</strong>: 2:1 (1:1),(1:0) 64m</div>
          <div className="history__event-result"><strong>Result</strong>: 2:1(1:1)</div>
        </div>
      </div>
      <div className="history__event-in">
        <div className="history__event-row history__event-row_top">
          <div className="history__event-title">
            <span>Fulham</span>
            <span className="history_winner history__event-title_vs">Vs</span>
            <span>Leeds United</span>
          </div>
          <div className="history__event-status history_winner">WON</div>
        </div>
        <div className="history__event-row history__event-row_middle">
          <div className="history__event-series"><strong>Italy</strong>-Serie A</div>
          <div className="history__event__date">
            <div className="history__event-year">01.01.2021 </div>
            <div className="history__event-time">16:30</div>
          </div>
          <div className="history__event-total">
            <span className="history__event-total-text">Total Goals </span>
            <div className="history__event__total-in">
              <strong>Over(2.5)</strong>
              <strong>1.92</strong>
            </div>
          </div>
        </div>
        <div className="history__event-row history__event-row_bottom">
          <div className="history__event-score"><strong>Score</strong>: 0:1(0:1) 12m</div>
          <div className="history__event-result"><strong>Result</strong>: 0:1(0:2)</div>
        </div>
      </div>
      <div className="history__event-in">
        <div className="history__event-row history__event-row_top">
          <div className="history__event-title">
            <span>Liverpool </span>
            <span className="history_winner history__event-title_vs">Vs</span>
            <span>Arsenal</span>
          </div>
          <div className="history__event-status history_winner">RETURNED</div>
        </div>
        <div className="history__event-row history__event-row_middle">
          <div className="history__event-series"><strong>Italy</strong>-Serie A</div>
          <div className="history__event__date">
            <div className="history__event-year">01.01.2021 </div>
            <div className="history__event-time">16:30</div>
          </div>
          <div className="history__event-total">
            <span className="history__event-total-text">Total Goals </span>
            <div className="history__event__total-in">
              <strong>Over(3)</strong>
              <strong>1.92</strong>
            </div>
          </div>
        </div>
        <div className="history__event-row history__event-row_bottom">
          <div className="history__event-score"><strong>Score</strong>: 0:1(0:1) 12m</div>
          <div className="history__event-result"><strong>Result</strong>: 0:3(0:2)</div>
        </div>
      </div>
      <div className="history__event-in">
        <div className="history__event-row history__event-row_top">
          <div className="history__event-title">
            <span>Lazio</span>
            <span className="history_winner history__event-title_vs">Vs</span>
            <span>FC Crotone</span>
          </div>
          <div className="history__event-status history_winner">WON</div>
        </div>
        <div className="history__event-row history__event-row_middle">
          <div className="history__event-series"><strong>Italy</strong>-Serie A</div>
          <div className="history__event__date">
            <div className="history__event-year">01.01.2021 </div>
            <div className="history__event-time">16:30</div>
          </div>
          <div className="history__event-total">
            <span className="history__event-total-text">Total Goals </span>
            <div className="history__event__total-in">
              <strong>Over(2)</strong>
              <strong>1.92</strong>
            </div>
          </div>
        </div>
        <div className="history__event-row history__event-row_bottom">
          <div className="history__event-score"><strong>Score</strong>: 0:1(0:1) 12m</div>
          <div className="history__event-result"><strong>Result</strong>: 0:2(0:1)</div>
        </div>
      </div>
    </div>
    )}
    {isDesktop && (
    <div className="popup-profile__history-event">
      <div className="popup-profile__history-title">
        Events
      </div>
      <ul className="popup-profile__history-list">
        <li className="popup-profile__history-item popup-profile__history-item--win">
          <div className="popup-profile__history-item__column popup-profile__history-item__column--team">
            <span className="popup-profile__history-item__team">
              AC Milan
            </span>
            <span className="popup-profile__history-item__separate">
              Vs
            </span>
            <span className="popup-profile__history-item__team">
              Inter Milan
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--date">
            <span className="popup-profile__history-item__year">
              01.01.2021
            </span>
            <span className="popup-profile__history-item__time">
              16:30
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--serie">
            <strong>
              Italy
            </strong>
            -Serie A
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--result">
            <strong>
              Result:
            </strong>
            0:2(0:1)
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--goal">
            <span className="popup-profile__history-item__goal">
              Total Goals
            </span>
            <strong>
              Over(1.5)
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--bet">
            <strong>
              x1.92
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--status">
            <strong>
              WON
            </strong>
          </div>
        </li>
        <li className="popup-profile__history-item popup-profile__history-item--lost">
          <div className="popup-profile__history-item__column popup-profile__history-item__column--team">
            <span className="popup-profile__history-item__team">
              Chelsea
            </span>
            <span className="popup-profile__history-item__separate">
              Vs
            </span>
            <span className="popup-profile__history-item__team">
              Newcastle United
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--date">
            <span className="popup-profile__history-item__year">
              01.01.2021
            </span>
            <span className="popup-profile__history-item__time">
              16:30
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--serie">
            <strong>
              Italy
            </strong>
            -Serie A
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--result">
            <strong>
              Score:
            </strong>
            2:1(1:0) 64m
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--goal">
            <span className="popup-profile__history-item__goal">
              Total Goals
            </span>
            <strong>
              Over(4)
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--bet">
            <strong>
              x1.92
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--status">
            <strong>
              LOST
            </strong>
          </div>
        </li>
        <li className="popup-profile__history-item popup-profile__history-item--win">
          <div className="popup-profile__history-item__column popup-profile__history-item__column--team">
            <span className="popup-profile__history-item__team">
              Fulham
            </span>
            <span className="popup-profile__history-item__separate">
              Vs
            </span>
            <span className="popup-profile__history-item__team">
              Leeds United
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--date">
            <span className="popup-profile__history-item__year">
              01.01.2021
            </span>
            <span className="popup-profile__history-item__time">
              16:30
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--serie">
            <strong>
              Italy
            </strong>
            -Serie A
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--result">
            <strong>
              Result:
            </strong>
            0:1(0:2)
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--goal">
            <span className="popup-profile__history-item__goal">
              Total Goals
            </span>
            <strong>
              Over(2.5)
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--bet">
            <strong>
              x1.92
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--status">
            <strong>
              WON
            </strong>
          </div>
        </li>
        <li className="popup-profile__history-item popup-profile__history-item--win">
          <div className="popup-profile__history-item__column popup-profile__history-item__column--team">
            <span className="popup-profile__history-item__team">
              Liverpool
            </span>
            <span className="popup-profile__history-item__separate">
              Vs
            </span>
            <span className="popup-profile__history-item__team">
              Arsenal
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--date">
            <span className="popup-profile__history-item__year">
              01.01.2021
            </span>
            <span className="popup-profile__history-item__time">
              16:30
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--serie">
            <strong>
              Italy
            </strong>
            -Serie A
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--result">
            <strong>
              Score:
            </strong>
            0:1(0:1) 12m
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--goal">
            <span className="popup-profile__history-item__goal">
              Total Goals
            </span>
            <strong>
              Over(3)
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--bet">
            <strong>
              x1.92
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--status">
            <strong>
              RETURNED
            </strong>
          </div>
        </li>
        <li className="popup-profile__history-item popup-profile__history-item--lost">
          <div className="popup-profile__history-item__column popup-profile__history-item__column--team">
            <span className="popup-profile__history-item__team">
              Lazio
            </span>
            <span className="popup-profile__history-item__separate">
              Vs
            </span>
            <span className="popup-profile__history-item__team">
              FC Crotone
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--date">
            <span className="popup-profile__history-item__year">
              01.01.2021
            </span>
            <span className="popup-profile__history-item__time">
              16:30
            </span>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--serie">
            <strong>
              Italy
            </strong>
            -Serie A
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--result">
            <strong>
              Result:
            </strong>
            0:3(0:2)
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--goal">
            <span className="popup-profile__history-item__goal">
              Total Goals
            </span>
            <strong>
              Over(3)
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--bet">
            <strong>
              x1.92
            </strong>
          </div>
          <div className="popup-profile__history-item__column popup-profile__history-item__column--status">
            <strong>
              LOST
            </strong>
          </div>
        </li>
      </ul>
    </div>
    )
    }

  </div>
</>;

export default MyBetsHistoryItemInfo;
