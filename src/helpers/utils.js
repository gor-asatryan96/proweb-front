import { EMAIL_REGEX, NUMBER_REGEX } from './regex.helpers';

export const LOADING_ITEMS = Array(40).fill(null);

export function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

export function allowOnlyNumber(value) {
  return value.replace(NUMBER_REGEX, '');
}

export function fixedTo2(num) {
  return Number(num).toFixed(2);
}

export function replaceAll(str, from, to) {
  if (typeof str !== 'string') return '';
  return str.replaceAll(from, to);
}

export function replaceSpaces(str) {
  return replaceAll(str, ' ', '-');
}

export function replaceUnderscores(str) {
  return replaceAll(str, '-', ' ');
}
