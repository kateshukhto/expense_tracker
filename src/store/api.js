import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URI = 'https://budget-tracker-ser.herokuapp.com/'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URI }),
  endpoints: buider => ({
    getCategories: buider.query({
      query: () => 'api/categories',
      providesTags: ['categories']
    }),
    getLabels: buider.query({
      query: () => 'api/label',
      providesTags: ['transaction']
    }),
    getTransactions: buider.query({
      query: () => 'api/transaction',
      providesTags: ['transaction']
    }),
    addTransaction: buider.mutation({
      query: (initialTransaction) => ({
        url: 'api/transaction',
        method: 'POST',
        body: initialTransaction
      }),
      invalidatesTags: ['transaction']
    }),
    deleteTransaction: buider.mutation({
      query: (id) => ({
        url: 'api/transaction',
        method: 'DELETE',
        body: id
      }),
      invalidatesTags: ['transaction']
    })
  })
})

export default api;