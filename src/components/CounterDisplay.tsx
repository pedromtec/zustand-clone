import { useStore } from '../lib/zustand/react';
import { counterStore } from '../stores/counter-store';

export function CounterDisplay() {
  const { count } = useStore(counterStore);

  return <span>Counter: {count}</span>;
}
