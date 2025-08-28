// src/redux/features/applicationApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { CREATE_APPLICATION_URL } from "@/redux/endPoints/url";

export const applicationApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createApplicationApi: builder.mutation({
      query: (formData) => ({
        url: CREATE_APPLICATION_URL,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreateApplicationApiMutation } = applicationApi;
