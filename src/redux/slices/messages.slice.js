import { createSlice } from '@reduxjs/toolkit';
import { messagesExtraReducers } from '../thunks/messages.thunk';

const initialState = {
  messages: [],
};

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages: (state, { payload }) => {
      state.messages = payload;
    },
    setMessagesRead: (state, { payload }) => {
      state.messages.forEach((item) => {
        if (payload.includes(item.id)) {
          item.read = true;
        }
      });
    },
    deleteMessage: (state, { payload }) => {
      state.messages = state.messages.filter(item => item.id !== payload);
    },
  },
  extraReducers: (builder) => {
    messagesExtraReducers(builder);
  },
});

// ACTIONS

export const { setMessages, setMessagesRead, deleteMessage } = messagesSlice.actions;

// SELECTORS

export const selectMessages = state => state.messages.messages;

export default messagesSlice.reducer;
