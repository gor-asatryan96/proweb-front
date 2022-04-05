import { createAsyncThunk } from '@reduxjs/toolkit';
import { promise } from '../../fakeData';
import { messagesMock } from '../../template/components/Popups/UserProfilePopup/components/Messages/Messages';

export const messagesThunk = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const response = await promise(messagesMock);
    return response;
  },
);

const messagesThunkFulfilled = (state, { payload }) => ({
  messages: payload,
});

export const messagesExtraReducers = (builder) => {
  builder
    .addCase(messagesThunk.fulfilled, messagesThunkFulfilled);
};
