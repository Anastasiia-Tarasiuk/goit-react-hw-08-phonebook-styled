import { createApi } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import Notiflix from "notiflix";

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
        baseUrl: 'https://connections-api.herokuapp.com/',
    }),
        
    tagTypes: ['Contact'],
    refetchOnMountOrArgChange: true,
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
              isSuccess: Notiflix.Notify.success('Contact was deleted'),
            }),
            invalidatesTags: ['Contact'],
        }),
        addContact: builder.mutation({
          query: newContact => {
            return ({
              url: 'contacts',
              method: 'POST',
              data: newContact,
              isSuccess: Notiflix.Notify.success('Contact was added'),
            })
          },
            invalidatesTags: ['Contact'],
        }),
    }),
});



export const { useGetContactsQuery, useDeleteContactMutation, useAddContactMutation} = contactsApi;