import React from 'react';
import { createStore, type StoreApi, useStore } from 'zustand';

type CounterState = {
  count: number;

  increment: VoidFunction;
  decrement: VoidFunction;
  reset: VoidFunction;
};

const CounterStoreContext = React.createContext<StoreApi<CounterState>>(null!);

type CounterStoreProviderProps = {
  initialCount: number;
} & React.PropsWithChildren;

export const CounterStoreProvider = ({ children, initialCount }: CounterStoreProviderProps) => {
  const [store] = React.useState(() =>
    createStore<CounterState>((set) => ({
      count: initialCount,

      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    })),
  );

  return <CounterStoreContext.Provider value={store}>{children}</CounterStoreContext.Provider>;
};

export const useCounterStore = <T,>(selector: (state: CounterState) => T): T => {
  const store = React.useContext(CounterStoreContext);

  if (!store) {
    throw new Error('Missing CounterStoreProvider!');
  }

  return useStore(store, selector);
};
