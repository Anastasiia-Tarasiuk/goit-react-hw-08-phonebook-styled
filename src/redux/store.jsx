import { configureStore, createSlice} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: JSON.parse(localStorage.getItem('contacts')) ?? [],
        filter: "",
    },
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        filteredValue(state, action) {
            state.filter = action.payload;
        },
        removeContact(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
})

export const { addContact, filteredValue, removeContact} = contactsSlice.actions; 

export const store = configureStore({
    reducer: {
      contacts: contactsSlice.reducer,
  },
})