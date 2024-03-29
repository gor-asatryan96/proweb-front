import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { FAKE_SERVER_CONFIGS } from '../../../fakeData';

// GET SPORTS LIST
export const getServerConfigsThunk = createAsyncThunk(
  'serverConfigs/get',
  async () => {
    const response = await axios.get('/config');
    return { ...response, ...FAKE_SERVER_CONFIGS };
  },
);

export const serverConfigsExtraReducers = (builder) => {
  builder
    .addCase(getServerConfigsThunk.pending, (state) => {
      state.isServerConfigsLoading = true;
    })
    .addCase(getServerConfigsThunk.fulfilled, (_, { payload }) => ({
      isServerConfigsLoading: false,
      ...payload,
    }))
    .addCase(getServerConfigsThunk.rejected, (state) => {
      state.isServerConfigsLoading = false;
    });
};
