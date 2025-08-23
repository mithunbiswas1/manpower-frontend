// src/redux/features/clientsApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { CLIENTS_URL } from "@/redux/endPoints/url";

export const clientsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllClients: builder.query({
      query: () => ({
        url: CLIENTS_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllClientsQuery } = clientsApi;
