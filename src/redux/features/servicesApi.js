// src/redux/features/servicesApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { SERVICES_URL } from "@/redux/endPoints/url";

export const servicesApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: SERVICES_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllServicesQuery } = servicesApi;
