import { GIFTS } from './constants/giftInfo.constants';
import GiftInfoHeader from './components/GiftInfoHeader/GiftInfoHeader';

const GiftInfo = ({ goBack, isDesktop }) => <div className="gifts-info__block">
  <GiftInfoHeader goBack={goBack} isDesktop={isDesktop} />
  <div className="menu-inner">
    <div className="gift__game-block">
      {
          GIFTS.map(({
            icon, alt, title, used, id,
          }) => (
            <div key={id} className="gift__game-out">
              <div className="gift__game-cover">
                <div className="gift__game-img">
                  <div className="img-container">
                    <img src={icon} alt={alt} />
                  </div>
                </div>
                <div className="gift__game-title">{title}</div>
              </div>
              <button type="button" className="gift__game-btn" disabled={used}>
                {used ? 'Used' : 'Use'}
              </button>
            </div>
          ))
        }
    </div>
  </div>
</div>;
export default GiftInfo;
