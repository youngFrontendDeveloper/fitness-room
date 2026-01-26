// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { tariff } from './types';

// export const tariffsApi = createApi({
//   reducerPath: 'tariffsApi',
//   baseQuery: fetchBaseQuery({ 
//     baseUrl: 'https://t-core.fit-hub.pro/' 
//   }),  
//   endpoints: (builder) => ({
//     getTariffs: builder.query<tariff[], void>({
//       query: () => `Test/GetTariffs/`,
//       transformResponse: (response: unknown): tariff[] => {
//         // Проверяем все возможные случаи
//         try {
//           // Случай 1: ответ undefined или null
//           if (response === undefined || response === null) {
//             console.warn('Response is undefined or null');
//             return [];
//           }
          
//           // Случай 2: ответ уже массив
//           if (Array.isArray(response)) {
//             return response as tariff[];
//           }
          
//           // Случай 3: ответ - строка
//           if (typeof response === 'string') {
//             // Проверяем, что строка не пустая
//             if (response.trim() === '') {
//               console.warn('Empty string response');
//               return [];
//             }
            
//             const parsed = JSON.parse(response);
            
//             if (Array.isArray(parsed)) {
//               return parsed as tariff[];
//             }
            
//             // Если распарсили объект, а не массив
//             if (parsed && typeof parsed === 'object') {
//               // Проверяем, есть ли данные внутри объекта
//               if (parsed.data && Array.isArray(parsed.data)) {
//                 return parsed.data as tariff[];
//               }
//             }
            
//             console.warn('Response is not an array:', parsed);
//             return [];
//           }
          
//           // Случай 4: любой другой тип
//           console.warn('Unexpected response type:', typeof response, response);
//           return [];
          
//         } catch (error) {
//           console.error('Failed to parse response:', error, 'Response:', response);
//           return [];
//         }
//       },
//     }),
//   }),
// });

// export const { useGetTariffsQuery } = tariffsApi


import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { tariff } from './types';

// Define a service using a base URL and expected endpoints
export const tariffsApi = createApi({
  reducerPath: 'tariffsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://t-core.fit-hub.pro/' }),  
  endpoints: (builder) => ({
    getTariffs: builder.query<tariff[], void>({
      query: () => `Test/GetTariffs/`,
      
    }),
  }),
})


export const { useGetTariffsQuery } = tariffsApi