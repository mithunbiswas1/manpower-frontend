// src/redux/features/projectsApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { BUSINESS_SETTINGS } from "@/redux/endPoints/url";

export const businessSettingApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllBusinessSetting: builder.query({
      query: () => ({
        url: BUSINESS_SETTINGS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBusinessSettingQuery } = businessSettingApi;
