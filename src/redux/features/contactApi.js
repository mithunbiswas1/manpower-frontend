// src/redux/features/contactApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { CREATE_CONTACT_URL } from "@/redux/endPoints/url";

export const contactApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createContactApi: builder.mutation({
      query: (formData) => ({
        url: CREATE_CONTACT_URL,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreateContactApiMutation } = contactApi;
