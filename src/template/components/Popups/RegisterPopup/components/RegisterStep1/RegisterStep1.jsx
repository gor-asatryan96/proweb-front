import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { allowOnlyNumber, validateEmail } from '../../../../../../helpers/utils';
import { Input } from '../../../../UI';
import { REGISTER_TABS_IDS } from '../../constants/register.constants';
import RegisterFooter from '../RegisterFooter/RegisterFooter';

const RegisterStep1 = ({
  changeTab, isTermsAccepted, setIsTermsAccepted,
}) => {
  const {
    register, handleSubmit, formState: { errors }, setValue, getValues,
  } = useForm();

  const onSubmit = (data) => {
    const { confirm, ...restForm } = data;
    changeTab(REGISTER_TABS_IDS.SKIP, restForm);
  };

  const onFullClick = (data) => {
    const { confirm, ...restForm } = data;
    changeTab(REGISTER_TABS_IDS.STEP_2, restForm);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="popup__row">
        <div className="popup__row__line">
          <div className="popup__name">
            Contact information
          </div>
          <div className="popup__line">
            <Input
              controllProps={register('email', {
                required: true,
                validate: {
                  email: val => validateEmail(val),
                },
              })}
              placeholder='Enter your e-mail address'
              error={errors.email}
            />
          </div>
          <div className="popup-create__line">
            <div className="popup__line popup-create__code">
              <input disabled className="popup__input input" value="+374" />
            </div>
            <div className="popup__line popup-create__tel">
              <Input
                controllProps={register('number', {
                  required: true,
                  onChange: e => setValue('number', allowOnlyNumber(e.target.value)),
                })}
                placeholder='Enter your contact number'
                error={errors.number}
              />
            </div>
          </div>
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Promo code (If you have one)
          </div>
          <div className="popup__line">
            <Input controllProps={register('promo')} placeholder="Enter promo code" />
          </div>
        </div>
        <div className="popup__row__line">
          <div className="popup__name">
            Create a password
          </div>
          <div className="popup__line popup__line--password">
            <Input
              controllProps={register('password', { required: true })}
              type='password'
              eye
              placeholder='Create your password'
              error={errors.password} />
          </div>
        </div>
        <div className="popup__row__line popup__row__line--last">
          <div className="popup__name">
            Confirm your password
          </div>
          <div className="popup__line popup__line--password">
            <Input
              controllProps={register('confirm', {
                required: true,
                validate: {
                  confirm: val => val === getValues('password'),
                },
              })}
              type='password'
              eye
              placeholder='Confirm your password'
              error={errors.confirm} />
          </div>
        </div>
      </div>
      <RegisterFooter isTermsAccepted={isTermsAccepted} setIsTermsAccepted={setIsTermsAccepted} />
      <div className="popup-skip__full full-registration-field">
        <div
          onClick={isTermsAccepted && handleSubmit(onFullClick)}
          className={classNames('popup-skip__full__btn', { disabled: !isTermsAccepted })}>
          Go to Full Registration
        </div>
      </div>
    </form>
  );
};

export default RegisterStep1;
