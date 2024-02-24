import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setMessagesRead } from './messages.slice';

// export const messagesThunk = createAsyncThunk(
//   'messages/getMessages',
//   async () => {
//     const response = await promise(messagesMock);
//     return response;
//   },
// );

export const getMessagesThunk = createAsyncThunk(
  'messages/getMessages',
  async () => {
    const response = await axios.get('messages/all/0/50');
    return response.responseData.result;
  },
);

export const messagesReadThunk = createAsyncThunk(
  'meessages/read',
  async (messageId, { dispatch }) => {
    dispatch(setMessagesRead(messageId));
    const response = await axios.get(`messages/read/${messageId}`);
    console.log('response', response);
    return response;
  },
);

const messagesThunkFulfilled = (state, { payload }) => ({
  messages: payload,
});

export const messagesExtraReducers = (builder) => {
  builder
    .addCase(getMessagesThunk.fulfilled, messagesThunkFulfilled);
};
