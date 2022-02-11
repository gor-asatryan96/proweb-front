import GoBackHeader from '../../../components/GoBackHeader';
import MyProfileInfo from './components/MyProfileInfo/MyProfileInfo';
import MyProfilePassword from './components/MyProfilePassword/MyProfilePassword';

const MyProfile = ({ goBack, configs }) => (
  <>
    <GoBackHeader
      title={configs.name}
      goBack={goBack}
      icon={configs.icon} />
    <div className="menu-inner">
      {/* <!-- TODO: add className active /checked --> hastat chi */}
      <div className="profile__form">
        <span className="profile__label-text">Contact information</span>
        <div className="profile__form-block profile__form-block_contact">
          <div className="profile__form-row">
            <label className="profile__label">
              <input type="text" className="profile__input" value="henri.baghumyan@gmail.com" disabled />
            </label>
          </div>
          <div className="profile__form-row profile__form-row_2">
            <label className="profile__label profile__label_code">
              <input type="number" className="profile__input" placeholder="+374" />
            </label>
            <label className="profile__label profile__label_number">
              <input type="number" className="profile__input" placeholder="093933394" />
            </label>
          </div>
        </div>
        <span className="profile__label-text">Password</span>
        <MyProfilePassword />
      </div>
      <MyProfileInfo />
    </div>
  </>
);

export default MyProfile;
