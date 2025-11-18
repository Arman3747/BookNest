import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:5000/api/books/6904272fbaf345efddc91366
// https://library-management-api-phi-nine.vercel.app/api

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  tagTypes: ["books", "borrow"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),

    getSingleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: (result, error, id) => [{ type: "books", id }],
    }),

    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),

    addNewBook: builder.mutation({
      query: (singleBook) => ({
        url: "/books",
        method: "POST",
        body: singleBook,
      }),
      invalidatesTags: ["books"],
    }),

    addNewBorrow: builder.mutation({
      query: (singleBorrow) => ({
        url: "/borrow",
        method: "POST",
        body: singleBorrow,
      }),
      invalidatesTags: ["books", "borrow"],
    }),

    editBook: builder.mutation({
      query: ({ id, updatedData }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: updatedData,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "books", id },
        "books",
      ],
    }),

    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "books", id }, "books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBookQuery,
  useGetBorrowSummaryQuery,
  useAddNewBookMutation,
  useAddNewBorrowMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = baseApi;


