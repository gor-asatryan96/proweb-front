import { useEffect, useState } from 'react';
import { allowOnlyNumber } from '../../../../../../helpers/utils';
import { REGISTER_TABS_IDS } from '../../../RegisterPopup/constants/register.constants';
import { RECOVERY_TABS_IDS } from '../../constants/recovery.constants';

const RecoveryPhoneCode = ({ changeTab, isRegister, userInfo }) => {
  const [ digits, setDigits ] = useState(Array(4).fill(''));

  const localCode = digits.join('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (value === '' || allowOnlyNumber(value)) {
      setDigits((prev) => {
        const copyArr = [ ...prev ];
        copyArr[name] = value;
        return copyArr;
      });
    }
  };

  useEffect(() => {
    let index = -1;
    for (let i = 0; i < digits.length; i += 1) {
      if (!digits[i]) {
        index = i;
        break;
      }
    }
    if (index > -1) {
      const currentInput = document.querySelector(`#codeInput${index}`);
      currentInput.focus();
    }
  }, [ digits ]);

  useEffect(() => {
    if (localCode.length === 4) {
      changeTab(isRegister ? REGISTER_TABS_IDS.SUCCESSFUL : RECOVERY_TABS_IDS.SUCCESSFUL);
    }
  }, [ localCode ]);

  return (
    <form action="">
      <div className="popup-confirm__caption">
        Enter {isRegister ? 'confirm' : 'recovery'} code
      </div>
      <div className="popup-confirm__info">
        The {isRegister ? 'confirm' : 'recovery'} code was sent to your
        <br />
        Phone number.
        <br />
        <span>
          {userInfo}
        </span>
        <br />
        Please, enter the code
      </div>
      <div className="popup-confirm__code">
        <ul className="popup-confirm__code__list">
          {digits.map((item, i) => (
            <li key={i} className="popup-confirm__code__item">
              <input
                className="popup-confirm__code__value"
                name={i}
                id={`codeInput${i}`}
                type="tel"
                maxLength={1}
                value={item}
                onChange={handleInput} />
            </li>
          ))}
        </ul>
      </div>
      <div className="popup-confirm__again">
        <div className="popup-confirm__again__link">
          Send again
        </div>
      </div>
    </form>
  );
};

export default RecoveryPhoneCode;
