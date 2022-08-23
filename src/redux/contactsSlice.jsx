import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://62fca9546e617f88de9b3751.mockapi.io/',
    }),
        
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => ({
                url: 'contacts',
                method: 'GET',
            }),
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
        }),
    }),
});

export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi;