import { useCounterStore } from '../stores/counter-store';

export function EnableCounter() {
  const enabled = useCounterStore((state) => state.enabled);
  const toggleEnabled = useCounterStore((state) => state.toggleEnabled);

  return (
    <div className="enable-counter">
      <label htmlFor="enable-counter">Enable Counter</label>
      <input
        id="enable-counter"
        type="checkbox"
        checked={enabled}
        onChange={toggleEnabled}
      />
    </div>
  );
}
