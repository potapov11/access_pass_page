// src/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/vars';

// Определи API
export const apiSlice = createApi({
  // имя в store
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // замени на свой бэк
  endpoints: (builder) => ({
    // Пример: получение поста по ID
    getCategories: builder.query({
      query: () => '/products/categories',
    }),
    getProducts: builder.query({
      query: () => '/products',
    }),

    // Пример: получение списка постов
    getPosts: builder.query({
      query: () => '/posts',
    }),
  }),
  reducerPath: 'api',
});

// Экспортируем хуки: useGetPostsQuery, useGetPostByIdQuery
export const { useGetCategoriesQuery, useGetProductsQuery } = apiSlice;
