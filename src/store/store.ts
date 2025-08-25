import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services/api';
import formReducer from '../services/slices/pass_from_slice';

const store = configureStore({
  reducer: {
    form: formReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
