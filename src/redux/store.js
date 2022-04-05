import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { reducers } from './reducers';

const persistConfigs = {
  key: 'root',
  storage,
  whitelist: [ 'favorites' ],
};

const persistedReducer = persistReducer(persistConfigs, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
