import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tariffsApi } from '../features/tariffsApi';

export const store = configureStore({
  reducer: {
    [tariffsApi.reducerPath]: tariffsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tariffsApi.middleware),
});

// Опционально: настройка listeners для refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;