import { createSlice } from '@reduxjs/toolkit';
import { serverConfigsExtraReducers } from './serverConfigs.thunk';

const initialState = {
  isServerConfigsLoading: true,
  configs: {
    urls: {
      translations: '',
      images: '',
    },
  },
};

export const serverConfigsSlice = createSlice({
  name: 'serverConfigs',
  initialState,
  reducers: {
    resetServerConfigsSlice: () => initialState,
  },
  extraReducers: serverConfigsExtraReducers,
});

// ACTIONS
export const { resetServerConfigsSlice } = serverConfigsSlice.actions;

// SELECTORS
export const selectServerConfigs = state => state.serverConfigs.configs;
export const selectServerUrls = state => state.serverConfigs.configs.urls;
export const selectServerImageUrl = state => state.serverConfigs.configs.urls.images;
export const selectServerTranslationUrl = state => state.serverConfigs.configs.urls.translations;

export default serverConfigsSlice.reducer;
