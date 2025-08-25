// src/redux/features/cvApi.js

import { apiSlice } from "@/redux/api/apiSlice";
import { CREATE_BOOKING_URL } from "@/redux/endPoints/url";

export const bookingApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    createBookingApi: builder.mutation({
      query: (formData) => ({
        url: CREATE_BOOKING_URL,
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useCreateBookingApiMutation  } = bookingApi;
