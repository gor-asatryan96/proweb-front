export const getErrorMessage = (error) => {
  if (error?.message && error.message.includes('DOCTYPE')) {
    return error.message;
  }
  return 'Something went wrong';
};
