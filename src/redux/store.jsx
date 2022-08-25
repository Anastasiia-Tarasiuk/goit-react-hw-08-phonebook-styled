import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterSlice } from './filterSlice';
import { authSlice } from 'auth/authSlice';
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistAuthConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [authSlice.name]: persistReducer(persistAuthConfig, authSlice.reducer),
    // [authSlice.name] : authSlice.reducer,
    
  },

    
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          }
      }),
      contactsApi.middleware,
    ]
});
  
  
setupListeners(store.dispatch);
export const persistor = persistStore(store);
  
