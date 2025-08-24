// src/redux/features/cvApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { CREATE_CV_URL } from "@/redux/endPoints/url";

export const cvApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createCvApi: builder.mutation({
      query: (formData) => ({
        url: CREATE_CV_URL,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreateCvApiMutation } = cvApi;
