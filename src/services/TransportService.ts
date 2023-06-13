import {ICategories, ITransport} from './../models/index';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export const transportsAPI = createApi({
  reducerPath: 'transportsAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'http://10.0.2.2:8080'}),
  tagTypes: ['Transports'],
  endpoints: build => ({
    fetchAllTransports: build.query<ITransport[], number>({
      query: id => ({
        url: id > 0 ? `/transports?categoryId=${id}` : '/transports',
      }),
    }),
    fetchTransportById: build.query<ITransport, number>({
      query: id => ({
        url: `/transports/${id}`,
      }),
    }),
    fetchCategories: build.query<ICategories[], void>({
      query: () => ({
        url: '/categories',
      }),
    }),
  }),
});
