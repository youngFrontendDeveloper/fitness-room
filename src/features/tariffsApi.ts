import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tariffsApi = createApi({
  reducerPath: 'tariffsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://t-core.fit-hub.pro/' }),
  endpoints: builder => ({
    getTariffs: builder.query<string, void>({
      query: () => `Test/GetTariffs/`,
    }),
  }),
});

export const { useGetTariffsQuery } = tariffsApi;
