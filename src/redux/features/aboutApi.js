// src/redux/features/aboutApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { ABOUT_URL } from "@/redux/endPoints/url";

export const aboutApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllAbout: builder.query({
      query: () => ({
        url: ABOUT_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllAboutQuery } = aboutApi;
