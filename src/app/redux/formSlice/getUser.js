import { API_URL } from '@/app/constant/apiUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define the API slice
export const userSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/card',
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/card/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: `/card/`,
        method: 'POST',
        body: data,
      }),    
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/card/${id}`,
        method: 'DELETE',
      }),    
    }),
  }),
});

// Export hooks for the queries and mutations
export const { useGetUsersQuery, useUpdateUserMutation, useAddUserMutation, useDeleteUserMutation } = userSlice;
