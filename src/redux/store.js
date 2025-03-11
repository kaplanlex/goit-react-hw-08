import { persistReducer, persistStore } from 'redux-persist';

import { authReducer } from './auth/slice';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);