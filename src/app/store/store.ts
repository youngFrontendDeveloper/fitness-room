import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { tariffsApi } from '../../features/tariffs/model/tariffsApi';
import timerReducer from '../../features/timer/model/slices/timerSlice';

export const store = configureStore({
  reducer: {
    [tariffsApi.reducerPath]: tariffsApi.reducer,
    timer: timerReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tariffsApi.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof configureStore>;
