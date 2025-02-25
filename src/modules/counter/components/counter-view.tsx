import { type JSX } from 'react';

import { useCounterStore } from '../store/counterStore';

export const CounterView = (): JSX.Element => {
  const count = useCounterStore((s) => s.count);

  console.log('Render CounterView');

  return <h3>Count is {count}</h3>;
};
