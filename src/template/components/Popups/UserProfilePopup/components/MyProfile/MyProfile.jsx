import GoBackHeader from '../../../components/GoBackHeader';

const MyProfile = ({ goBack, configs }) => (
  <>
    <GoBackHeader
      title={configs.name}
      goBack={goBack}
      icon={configs.icon} />
    <div className="menu-inner">
      {/* <!-- TODO: add className active /checked --> hastat chi */}
      <form className="profile__form">
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
        <div className="profile__form-block profile__form-block_password">
          <div className="profile__form-row">
            <label className="profile__label">
              <input type="password" className="profile__input" placeholder="Current password" />
              <button type="button" className="profile__label-icon">
                <span className="img-container">
                  <svg className="icon" width="20" height="13">
                    <use xlinkHref="#password-eye" />
                  </svg>
                </span>
              </button>
            </label>
          </div>
          <div className="profile__form-row">
            <label className="profile__label">
              <input type="password" className="profile__input" placeholder="New password" />
              <button type="button" className="profile__label-icon">
                <span className="img-container">
                  <svg className="icon" width="20" height="13">
                    <use xlinkHref="#password-eye" />
                  </svg>
                </span>
              </button>
            </label>
          </div>
          <div className="profile__form-row">
            <label className="profile__label">
              <input type="password" className="profile__input" placeholder="Confirm new password" />
              <button type="button" className="profile__label-icon">
                <span className="img-container">
                  <svg className="icon" width="20" height="13">
                    <use xlinkHref="#password-eye" />
                  </svg>
                </span>
              </button>
            </label>
          </div>
        </div>
        <div className="profile__form-block profile__form-block_btn">
          <button type="submit" className="profile__form-btn">save password</button>
        </div>
      </form>
      <form className="profile__form">
        <span className="profile__label-text">Personal information </span>
        <div className="profile__form-block profile__form-block_personal">
          <div className="profile__form-row">
            <select className="profile__select">
              <option className="profile__option">Mr</option>
              <option className="profile__option">Mrs</option>
            </select>
          </div>
          <div className="profile__form-row">
            <label className="profile__label">
              <input type="text" className="profile__input" placeholder="Henri Baghumyan" />
            </label>
          </div>
        </div>
        <span className="profile__label-text">Date of birth</span>
        <div className="profile__form-block profile__form-block_date">
          <div className="profile__form-row profile__form-row_2">
            <select className="profile__select profile__select_3">
              <option className="profile__option">August</option>
              <option className="profile__option">September</option>
            </select>
            <select className="profile__select profile__select_3">
              <option className="profile__option">13</option>
              <option className="profile__option">14</option>
            </select>
            <select className="profile__select profile__select_3">
              <option className="profile__option">1987</option>
              <option className="profile__option">1986</option>
            </select>
          </div>
        </div>
        <span className="profile__label-text">Country of residence</span>
        <div className="profile__form-block profile__form-block_city">
          <div className="profile__form-row">
            <select className="profile__select">
              <option className="profile__option">Armenia</option>
            </select>
          </div>
        </div>
        <span className="profile__label-text">Address</span>
        <div className="profile__form-block profile__form-block_address">
          <div className="profile__form-row">
            <select className="profile__select">
              <option className="profile__option">Komitas</option>
            </select>
          </div>
        </div>
        <span className="profile__label-text">Currency</span>
        <div className="profile__form-block profile__form-block_currency">
          <div className="profile__form-row">
            <select className="profile__select">
              <option className="profile__option">Euro</option>
            </select>
          </div>
        </div>
        <span className="profile__label-text">Document type</span>
        <div className="profile__form-block profile__form-block_type">
          <div className="profile__form-row">
            <select className="profile__select">
              <option className="profile__option">Passport</option>
            </select>
          </div>
          <div className="profile__form-row">
            <label className="profile__label">
              <input type="text" className="profile__input" placeholder="AS555144" />
            </label>
          </div>
        </div>
        <div className="profile__form-block">
          <button type="submit" className="profile__form-btn profile__form-btn_changes">save changes</button>
        </div>
      </form>
    </div>
  </>
);

export default MyProfile;
