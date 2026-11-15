import { useStore } from '../lib/zustand/react';
import { counterStore } from '../stores/counter-store';

export function EnableCounter() {
  const { enabled, toggleEnabled } = useStore(counterStore);

  return (
    <div className="enable-counter">
      <label htmlFor="enable-counter">Enable Counter</label>
      <input
        checked={enabled}
        onChange={() => toggleEnabled()}
        id="enable-counter"
        type="checkbox"
      />
    </div>
  );
}
