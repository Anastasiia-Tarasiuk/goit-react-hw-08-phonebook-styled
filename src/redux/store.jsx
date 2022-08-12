import { configureStore, } from '@reduxjs/toolkit';
import { persistStore} from 'redux-persist';
import { persistedContactsReducer } from './contactsSlice';


export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
    },
});

export const persistor = persistStore(store)