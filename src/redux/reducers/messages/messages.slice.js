import { createSlice } from '@reduxjs/toolkit';
import { messagesExtraReducers } from './messages.thunk';

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
      const index = state.messages.findIndex(item => item.message_id === payload);
      if (index !== -1) {
        state.messages[index].status = 'READ';
      }
    },
    deleteMessage: (state, { payload }) => {
      state.messages = state.messages.filter(item => item.message_id !== payload);
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
