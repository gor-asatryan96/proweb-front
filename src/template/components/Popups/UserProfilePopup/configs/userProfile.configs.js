import CouponCheck from '../components/CouponCheck/CouponCheck';
import Gifts from '../components/Gifts/Gifts';
import Messages from '../components/Messages/Messages';
import MyBetsHistory from '../components/MyBetsHistory/MyBetsHistory';
import MyProfile from '../components/MyProfile/MyProfile';
import Transaction from '../components/Transaction/Transaction';
import Deposit from '../components/WithdrawDeposit/Deposit';
import Withdraw from '../components/WithdrawDeposit/Withdraw';
import { USER_PROFILE_TABS_NAMES } from '../constants/userProfile.constants';

const {
  MY_PROFILE, MESSAGES, GIFTS, MY_BETS_HISTORY, WITHDRAW, TRANSACTION, COUPON_CHECK, DEPOSIT,
} = USER_PROFILE_TABS_NAMES;

export const USER_PROFILE_TABS = {
  [MY_PROFILE]: {
    name: MY_PROFILE, icon: 'userIconInfo', Component: MyProfile, class: 'profile',
  },
  [MESSAGES]: {
    name: MESSAGES, icon: 'message', Component: Messages, class: 'message',
  },
  [GIFTS]: {
    name: GIFTS, icon: 'profile-gift', Component: Gifts, class: 'gifts',
  },
  [MY_BETS_HISTORY]: {
    name: MY_BETS_HISTORY, icon: 'profile-history', Component: MyBetsHistory, class: 'history',
  },
  [WITHDRAW]: {
    name: WITHDRAW, icon: 'withdraw', Component: Withdraw, class: 'withdraw',
  },
  [DEPOSIT]: {
    name: DEPOSIT, icon: '', Component: Deposit, class: 'withdraw',
  },
  [TRANSACTION]: {
    name: TRANSACTION, icon: 'transaction', Component: Transaction, class: 'transaction transaction_none',
  },
  [COUPON_CHECK]: {
    name: COUPON_CHECK, icon: 'coupon-icon', Component: CouponCheck, class: 'coupon',
  },
};
