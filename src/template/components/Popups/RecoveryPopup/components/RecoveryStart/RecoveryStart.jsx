import { useForm } from 'react-hook-form';
import { PHONE_REGEX } from '../../../../../../helpers/regex.helpers';
import { validateEmail } from '../../../../../../helpers/utils';
import { Button, Input } from '../../../../UI';
import { RECOVERY_TABS_IDS } from '../../constants/recovery.constants';

const { EMAIL, PHONE } = RECOVERY_TABS_IDS;

const RecoveryStart = ({ changeTab, setUserInfo }) => {
  const {
    register, handleSubmit, formState: { errors }, setError,
  } = useForm();

  const onSubmit = (data) => {
    const { value } = data;
    if (PHONE_REGEX.test(value)) {
      setUserInfo(value);
      changeTab(PHONE);
    } else if (validateEmail(value)) {
      setUserInfo(value);
      changeTab(EMAIL);
    } else {
      setError('value', { message: 'Please enter a valid info' });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="popup-recover__title">
        Please, enter your Phone number
        <br />
        or Email address
      </div>
      <div className="popup__form">
        <div className="popup__line popup__line--password">
          <Input
            controllProps={register('value', { required: true })}
            placeholder='Phone number or Email'
            error={errors.value}
             />
        </div>
      </div>
      <div className="popup-forgot__submit">
        <Button>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default RecoveryStart;
