import { type JSX } from 'react';

import { useCounterStore } from '../store/counterStore';

export const CounterControl = (): JSX.Element => {
  const increment = useCounterStore((s) => s.increment);

  const handleIncrement = () => increment();

  console.log('Render CounterControl');

  return (
    <div className="control">
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};
