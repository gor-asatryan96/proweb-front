import { MAIN_BANNERS } from '../../../../../assets/images/banners';

const CongratulationUseStep = ({ onClose }) => <>
  <div className="popup-winner__desc">
    Orem Ipsum Dolor Sit Amet, Consectetur
    Adipiscing Elit, Sed Do Eiusmod Tempor
    Incididunt Ut Labore Et Dolore Magna
    Quis Nostrud Exercitation Ullamco
    Laboris Nisi Ut Aliquip Ex Ea Commodo
  </div>
  <div className="popup-winner__img-box">
    <div className="img-container">
      <div className='popup-banner-wrapper'>
        <img src={MAIN_BANNERS[0]} alt="" />
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="320"
        height="120"
        viewBox="0 0 320 120">
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_4218"
              data-name="Rectangle 4218"
              width="320"
              height="120"
              transform="translate(10359 1916)"
              fill="none"
              stroke="#707070"
              stroke-width="1" />
          </clipPath>
        </defs>
        <g
          id="Mask_Group_20"
          data-name="Mask Group 20"
          transform="translate(-10359 -1916)"
          clip-path="url(#clip-path)">
          <image
            id="Ololo_778X250"
            data-name="Ololo 778X250"
            width="591.93"
            height="190.209"
            transform="translate(10214.049 1881)" />
        </g>
      </svg> */}
    </div>
  </div>
  <div className="popup-gray__btn-container">
    <div className="popup-gray__btn popup-gray__btn-green ">Use</div>
    <div onClick={onClose} className="popup-gray__btn popup-gray__btn-white">Cancel</div>
  </div>
</>;

export default CongratulationUseStep;
