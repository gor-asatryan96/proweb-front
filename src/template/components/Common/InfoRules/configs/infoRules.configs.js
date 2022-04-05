import AboutUs from '../AboutUs/AboutUs';
import AccountRules from '../AccountRules/AccountRules';
import { INFO_RULES_TAB_NAMES } from '../constants/infoRules.constants';
import Contacts from '../Contacts/Contacts';
import CookiesPolicy from '../CookiesPolicy/CookiesPolicy';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import TermsConditions from '../TermsConditions/TermsConditions';

const {
  ABOUT_US, ACCOUNT_RULES, CONTACTS, COOKIES_POLICY, PRIVACY_POLICY, TERMS,
} = INFO_RULES_TAB_NAMES;

export const INFO_RULES_CONFIGS = {
  [ABOUT_US]: { Component: AboutUs },
  [ACCOUNT_RULES]: { Component: AccountRules },
  [CONTACTS]: { Component: Contacts },
  [COOKIES_POLICY]: { Component: CookiesPolicy },
  [PRIVACY_POLICY]: { Component: PrivacyPolicy },
  [TERMS]: { Component: TermsConditions },
};
