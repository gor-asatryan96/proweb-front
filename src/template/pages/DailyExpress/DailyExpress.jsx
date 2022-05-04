import { useMediaQuery } from 'react-responsive';
import { MEDIA_QUERIES } from '../../../constants/mediaQuery.constants';

const DailyExpress = () => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.DESKTOP);
  return (
    <section className="content-section">
      {!isDesktop && (
      <div className="menu-back">
        <div className="menu-back__title">Daily express</div>
      </div>
      )}
      <div className="content-section__inner">
        <div className="express__box">
          {isDesktop && (
          <div className="express__box-title">
            DAILY EXPRESS
          </div>
          )}
          <div className="express__box-text express__box-text_title">Package-ID:998-S813459794</div>
          <div className="express__box-text">
            Use This Package To Get Extra Bonus <span className="express__box-text_green">3500 Units</span>
          </div>
          <div className="express__box-btn-container">
            <a href="/" className="express__box-btn">Use</a>
          </div>
        </div>
        <div className="express__alert-text">Attention. You Must Place 1000 TZS/Unit Or More To Participate Indaily
          Express.
        </div>
      </div>
    </section>
  );
};

export default DailyExpress;
