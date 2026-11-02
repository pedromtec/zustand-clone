type CounterDisplayProps = {
  count: number;
};

export function CounterDisplay({ count }: CounterDisplayProps) {
  return <span>Counter: {count}</span>;
}
