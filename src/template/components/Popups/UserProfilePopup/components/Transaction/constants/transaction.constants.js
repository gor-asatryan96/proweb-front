export const TRANSACTION_HEADERS = {
  DATE: { name: 'Date', classNaming: 'transaction__column_date' },
  ID: { name: 'ID', classNaming: 'transaction__column_id' },
  TYPE: { name: 'Type', classNaming: 'transaction__column_type' },
  SYSTEM: { name: 'System', classNaming: 'transaction__column_system' },
  AMOUNT: { name: 'Amount', classNaming: 'transaction__column_amount' },
  BALANCE: { name: 'Balance', classNaming: 'transaction__column_balance' },
  STATUS: { name: 'Status', classNaming: 'transaction__column_status' },
};

const {
  ID, TYPE, BALANCE, ...restKeys
} = TRANSACTION_HEADERS;

export const TRANSACTION_MOBILE_HEADERS = restKeys;
