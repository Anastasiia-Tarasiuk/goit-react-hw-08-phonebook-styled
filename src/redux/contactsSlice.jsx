import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://62fca9546e617f88de9b3751.mockapi.io/' }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: contactId => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: newContact => ({
                url: 'contacts',
                method: 'POST',
                body: newContact,
            }),
            invalidatesTags: ['Contact'],
        })
    }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi;