import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { GENDER_TYPES } from '../../../../../../constants/gender.constants';
import { Input } from '../../../../UI';
import { REGISTER_TABS_IDS } from '../../constants/register.constants';
import RegisterFooter from '../RegisterFooter/RegisterFooter';

const RegisterStep2 = ({ changeTab, isTermsAccepted, setIsTermsAccepted }) => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('MyProfileInfo', data);
    changeTab(REGISTER_TABS_IDS.STEP_3, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="popup__row">
        <div className="popup__row__line">
          <div className="popup__name">
            Personal information
          </div>
          <div className="popup__line">
            <select {...register('gender')} className="popup__select select">
              {Object.keys(GENDER_TYPES).map(gender => (
                <option className="popup__option option" value={gender}>{GENDER_TYPES[gender]}</option>
              ))}
            </select>
          </div>
          <div className="popup__line">
            <Input
              controllProps={register('name', { required: 'Enter your personal information' })}
              placeholder="Name, Surename"
              error={errors.name} />
            {/* <!-- TODO: add className error--> */}
            {/* <input className="popup__input input" type="email" placeholder="Name, Surename" /> */}
          </div>
          {/* <div className="popup__error">
            Enter your personal information
          </div> */}
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Date of birth
          </div>
          <div className="popup-personal__row">
            <div className="popup-personal__column">
              <div className="popup__line">
                <select {...register('month', { required: true })} className={classNames('popup__select select', { error: errors.month })} >
                  <option className="popup__option option" value='' disabled selected>Month</option>
                  <option className="popup__option option" value="0">January</option>
                  <option className="popup__option option" value="1">February</option>
                  <option className="popup__option option" value="2">March</option>
                  <option className="popup__option option" value="3">April</option>
                  <option className="popup__option option" value="4">May</option>
                  <option className="popup__option option" value="5">June</option>
                  <option className="popup__option option" value="6">July</option>
                  <option className="popup__option option" value="7">August</option>
                  <option className="popup__option option" value="8">September</option>
                  <option className="popup__option option" value="9">October</option>
                  <option className="popup__option option" value="10">November</option>
                  <option className="popup__option option" value="11">December</option>
                </select>
              </div>
            </div>
            <div className="popup-personal__column">
              <div className="popup__line">
                <select {...register('day', { required: true })} className={classNames('popup__select select', { error: errors.day })}>
                  <option className="popup__option option" value="" disabled selected>Day</option>
                  <option className="popup__option option" value="1">1</option>
                  <option className="popup__option option" value="2">2</option>
                  <option className="popup__option option" value="3">3</option>
                  <option className="popup__option option" value="4">4</option>
                  <option className="popup__option option" value="5">5</option>
                  <option className="popup__option option" value="6">6</option>
                  <option className="popup__option option" value="7">7</option>
                  <option className="popup__option option" value="8">8</option>
                  <option className="popup__option option" value="9">9</option>
                  <option className="popup__option option" value="10">10</option>
                  <option className="popup__option option" value="11">11</option>
                  <option className="popup__option option" value="12">12</option>
                  <option className="popup__option option" value="13">13</option>
                  <option className="popup__option option" value="14">14</option>
                  <option className="popup__option option" value="15">15</option>
                  <option className="popup__option option" value="16">16</option>
                  <option className="popup__option option" value="17">17</option>
                  <option className="popup__option option" value="18">18</option>
                  <option className="popup__option option" value="19">19</option>
                  <option className="popup__option option" value="20">20</option>
                  <option className="popup__option option" value="21">21</option>
                  <option className="popup__option option" value="22">22</option>
                  <option className="popup__option option" value="23">23</option>
                  <option className="popup__option option" value="24">24</option>
                  <option className="popup__option option" value="25">25</option>
                  <option className="popup__option option" value="26">26</option>
                  <option className="popup__option option" value="27">27</option>
                  <option className="popup__option option" value="28">28</option>
                  <option className="popup__option option" value="29">29</option>
                  <option className="popup__option option" value="30">30</option>
                </select>
              </div>
            </div>
            <div className="popup-personal__column">
              <div className="popup__line">
                <select {...register('year', { required: true })} className={classNames('popup__select select', { error: errors.year })}>
                  <option className="popup__option option" value="" disabled selected>Year</option>
                  <option className="popup__option option" value="2020">2020</option>
                  <option className="popup__option option" value="2019">2019</option>
                  <option className="popup__option option" value="2018">2018</option>
                  <option className="popup__option option" value="2017">2017</option>
                  <option className="popup__option option" value="2016">2016</option>
                  <option className="popup__option option" value="2015">2015</option>
                </select>
              </div>
            </div>
          </div>
          <div className="popup__error__block">
            {errors.month && <div className="popup__error">
              Select your birth month.
            </div>}
            {errors.day && <div className="popup__error">
              Enter a valid day of the month.
            </div>}
            {errors.year && <div className="popup__error">
              Enter a valid year.
            </div>}
          </div>
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Country of residence
          </div>
          <div className="popup__line">
            <select
              {...register('country', { required: true })}
              className={classNames('popup__select select', { error: errors.country })}>
              <option className="popup__option option" value="" disabled selected>Country</option>
              <option className="popup__option option" value="Armenia">Armenia</option>
              <option className="popup__option option" value="Russia">Russia</option>
              <option className="popup__option option" value="United States">United States</option>
              <option className="popup__option option" value="United Kingdom">United Kingdom</option>
              <option className="popup__option option" value="Mexico">Mexico</option>
              <option className="popup__option option" value="Spain">Spain</option>
            </select>
          </div>
          {errors.country && <div className="popup__error">
            Enter your country of residence
          </div>}
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Address
          </div>
          <div className="popup__line">
            {/* <!-- TODO: add className error--> */}
            <Input
              controllProps={register('address', { required: 'Enter your address' })}
              placeholder="Addres"
              error={errors.address} />
          </div>
        </div>
      </div>
      <RegisterFooter buttonText='Next' isTermsAccepted={isTermsAccepted} setIsTermsAccepted={setIsTermsAccepted} />
    </form>
  );
};

export default RegisterStep2;
