import { API_URL } from '@/app/constant/apiUrl';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/card',
      transformResponse: (response) => response.reverse(),
    providesTags:[ 'User'],
    }),
  
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/card/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags:["User"]
    }),
    addUser: builder.mutation({
      query: (data) => ({
        url: `/card/`,
        method: 'POST',
        body: data,
      }),    
      invalidatesTags:["User"]
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/card/${id}`,
        method: 'DELETE',
      }),  
      invalidatesTags:["User"]  
    }),
  }),
});

export const { useGetUsersQuery, useUpdateUserMutation, useAddUserMutation, useDeleteUserMutation } = userSlice;
