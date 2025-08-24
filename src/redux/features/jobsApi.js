// src/redux/features/clientsApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { JOBS_URL } from "@/redux/endPoints/url";

export const jobsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: JOBS_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllJobsQuery } = jobsApi;
