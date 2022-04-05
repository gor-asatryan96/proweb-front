import { EMAIL_REGEX, NUMBER_REGEX } from './regex.helpers';

export function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

export function allowOnlyNumber(value) {
  return value.replace(NUMBER_REGEX, '');
}

export function fixedTo2(num) {
  return Number(num).toFixed(2);
}
