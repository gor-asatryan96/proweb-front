import { useForm } from 'react-hook-form';
import { Input } from '../../../../UI';
import { REGISTER_TABS_IDS } from '../../constants/register.constants';
import RegisterFooter from '../RegisterFooter/RegisterFooter';

const RegisterStep3 = ({ changeTab, isTermsAccepted, setIsTermsAccepted }) => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('MyProfileInfo', data);
    changeTab(REGISTER_TABS_IDS.CONFIRM, data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="popup__row">
        <div className="popup__row__line">
          <div className="popup__name">
            Currency
          </div>
          <div className="popup__line">
            <label />
            <select {...register('currency', { required: true })} className='popup__select select'>
              <option className="popup__option option" value="1">Euro</option>
              <option className="popup__option option" value="2">Usd</option>
              <option className="popup__option option" value="3">Gbp</option>
            </select>
          </div>
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Document type
          </div>
          <div className="popup__line">
            <select {...register('documentType', { required: true })} className="popup__select select">
              <option className="popup__option option" value="Passport">Passport</option>
              <option className="popup__option option" value="Driving Licence">Driving Licence</option>
            </select>
          </div>
          <div className="popup__line">
            <Input
              controllProps={register('documentNumber', { required: 'Enter your passport number' })}
              placeholder="Document Number"
              error={errors.documentNumber} />
          </div>
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Security question
          </div>
          <div className="popup__line">
            <select {...register('question')} className="popup__select select">
              <option className="popup__option option" value="1">What is your favorite book?</option>
            </select>
          </div>
          <div className="popup__line">
            <Input
              controllProps={register('answer', { required: 'Select security question' })}
              placeholder="Security answer"
              error={errors.answer} />
          </div>
        </div>
        <div className="popup__age">
          <div className="popup__age__checkbox checkbox-2">
            <input {...register('age')} className="checkbox-2__btn" type="checkbox" id="age" />
            <span className="checkbox-2__icon" />
          </div>
          <label className="popup__age__name" htmlFor="age">
            I am 18 years of age and have read and agree to the <a className="popup__age__link" href="/">Terms</a>
            <a className="popup__age__link" href="/">And Conditions</a> and    <a className="popup__age__link" href="/">Privacy Policy</a>
          </label>
        </div>
        {/* <div className="popup__error">
          Confirm you've read the terms
        </div> */}
      </div>
      <RegisterFooter isTermsAccepted={isTermsAccepted} setIsTermsAccepted={setIsTermsAccepted} />
    </form>
  );
};

export default RegisterStep3;
