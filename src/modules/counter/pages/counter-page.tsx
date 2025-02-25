import { CounterControl, CounterView } from '../components';
import { CounterStoreProvider } from '../store/counterStore';

export const CounterPage = () => {
  return (
    <CounterStoreProvider initialCount={0}>
      <h2>Zustand with React Context</h2>
      <CounterView />
      <CounterControl />
    </CounterStoreProvider>
  );
};
