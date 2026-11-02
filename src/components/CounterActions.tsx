type CounterActionsProps = {
  enabled: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
};

export function CounterActions({
  enabled,
  onIncrement,
  onDecrement,
}: CounterActionsProps) {
  return (
    <div className="counter-actions">
      <button
        type="button"
        className="action-button"
        onClick={onIncrement}
        disabled={!enabled}
      >
        Increment
      </button>
      <button
        type="button"
        className="action-button"
        onClick={onDecrement}
        disabled={!enabled}
      >
        Decrement
      </button>
    </div>
  );
}
