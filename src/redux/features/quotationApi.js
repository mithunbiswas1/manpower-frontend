// src/redux/features/cvApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { CREATE_QUOTATION_URL } from "@/redux/endPoints/url";

export const quotationApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createquotationApi: builder.mutation({
      query: (formData) => ({
        url: CREATE_QUOTATION_URL,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreatequotationApiMutation } = quotationApi;
