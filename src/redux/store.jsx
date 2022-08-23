import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterSlice } from './filterSlice';
import { authSlice } from 'auth/authSlice';


export const store = configureStore({
    reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
      [filterSlice.name]: filterSlice.reducer,
      [authSlice.name] : authSlice.reducer,
      
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
    ]
});

setupListeners(store.dispatch);

