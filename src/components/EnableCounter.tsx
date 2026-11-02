type EnableCounterProps = {
  enabled: boolean;
  onToggle: () => void;
};

export function EnableCounter({ enabled, onToggle }: EnableCounterProps) {
  return (
    <div className="enable-counter">
      <label htmlFor="enable-counter">Enable Counter</label>
      <input
        id="enable-counter"
        type="checkbox"
        checked={enabled}
        onChange={onToggle}
      />
    </div>
  );
}
