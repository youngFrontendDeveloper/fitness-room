// app/providers/StoreProvider.tsx
'use client'; // ОБЯЗАТЕЛЬНО!

import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { store } from './store';

export function StoreProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
