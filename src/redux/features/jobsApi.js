// src/redux/features/clientsApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { JOBS_URL, JOBS_SINGLE_URL } from "@/redux/endPoints/url";

export const jobsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: JOBS_URL,
        method: "GET",
      }),
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `${JOBS_SINGLE_URL}/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, useGetSingleJobQuery } = jobsApi;
