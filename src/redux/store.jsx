import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsSlice';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
      [contactsApi.reducerPath]: contactsApi.reducer,
      // [filterSlice.name]: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      contactsApi.middleware,
    ]
});

setupListeners(store.dispatch);

