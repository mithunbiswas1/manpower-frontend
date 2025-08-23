// src/redux/features/bannerApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { BANNER_URL } from "@/redux/endPoints/url";

export const bannerApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllBanner: builder.query({
      query: () => ({
        url: BANNER_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBannerQuery } = bannerApi;
