// src/redux/api/apiSlice.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUriBackend } from "@/redux/endPoints/url";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUriBackend,
  }),
  endpoints: () => ({}),
});
