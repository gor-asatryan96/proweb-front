export const promise = (value, delay = 2000) => new Promise(resolve => setTimeout(resolve, delay, value));

export const FAKE_USER = {
  id: 33033,
  name: 'Angelina Jolie',
  gender: 2,
  balance: 307050,
  units: '10',
  date: new Date(),
  country: 'Armenia',
  address: 'Yerevan',
  currency: 'TZS',
  email: 'test_mail@gmail.com',
  number: '099789789',
  documentType: '1',
  documentNumber: 'AQ456545',
  token: 'dsfsdfk-8sd8g7gs4df84s1dg8s7d-8r45r-ew45rw4er5r4',
  isVerified: false,
};
