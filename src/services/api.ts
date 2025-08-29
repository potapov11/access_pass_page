import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/vars';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getConfirmPersons: builder.query({
      query: () => '/confirm_persons',
    }),
    addVisitorForm: builder.mutation({
      query: (visitorData) => ({
        url: '/visitor_forms',
        method: 'POST',
        body: visitorData,
      }),
    }),
  }),
  reducerPath: 'api',
});

export const {
  useGetConfirmPersonsQuery,
  useLazyGetConfirmPersonsQuery,
  useAddVisitorFormMutation,
} = apiSlice;
