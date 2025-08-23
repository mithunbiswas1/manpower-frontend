// src/redux/features/testimonialsApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { TESTIMONIALS_URL } from "@/redux/endPoints/url";

export const testimonialsApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getAllTestimonials: builder.query({
      query: () => ({
        url: TESTIMONIALS_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTestimonialsQuery } = testimonialsApi;
