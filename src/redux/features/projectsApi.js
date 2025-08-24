// src/redux/features/projectsApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { PROJECTS_URL } from "@/redux/endPoints/url";

export const projectsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: PROJECTS_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectsApi;
