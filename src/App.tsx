import { useState } from 'react';
import { CounterActions } from './components/CounterActions';
import { CounterDisplay } from './components/CounterDisplay';
import { EnableCounter } from './components/EnableCounter';
import './App.css';

export function App() {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="app">
      <div className="counter">
        <CounterDisplay count={count} />
        <CounterActions
          enabled={enabled}
          onIncrement={() => setCount((current) => current + 1)}
          onDecrement={() => setCount((current) => current - 1)}
        />
        <EnableCounter
          enabled={enabled}
          onToggle={() => setEnabled((current) => !current)}
        />
      </div>
    </div>
  );
}
