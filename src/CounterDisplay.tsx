import { useCounterStore } from './counter-store';

export function CounterDisplay() {
  const count = useCounterStore((state) => state.count);
  return <span>Counter: {count}</span>;
}
