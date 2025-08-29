import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/vars';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getConfirmPersons: builder.query({
      query: () => '/confirm_persons',
    }),

    //forms
    addForm: builder.mutation({
      query: (form) => ({
        url: '/forms',
        method: 'POST',
        body: form,
      }),
    }),
    getForms: builder.query({
      query: () => '/forms',
    }),
    getFormsById: builder.query({
      query: (id) => `/forms/${id}`,
    }),
  }),
  reducerPath: 'api',
});

export const {
  useGetConfirmPersonsQuery,
  useLazyGetConfirmPersonsQuery,
  //forms
  useAddFormMutation,
  useGetFormsQuery,
  useLazyGetFormsByIdQuery,
} = apiSlice;
