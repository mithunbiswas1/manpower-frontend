// src/redux/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiSlice.middleware),
});
