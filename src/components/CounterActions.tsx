import { useStore } from '../lib/zustand/react';
import { counterStore } from '../stores/counter-store';

export function CounterActions() {
  const { increment, decrement, enabled } = useStore(counterStore);

  return (
    <div className="counter-actions">
      <button
        disabled={!enabled}
        onClick={() => increment()}
        type="button"
        className="action-button"
      >
        Increment
      </button>
      <button
        disabled={!enabled}
        onClick={() => decrement()}
        type="button"
        className="action-button"
      >
        Decrement
      </button>
    </div>
  );
}
