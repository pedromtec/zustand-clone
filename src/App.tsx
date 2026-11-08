import { CounterActions } from './components/CounterActions';
import { CounterDisplay } from './components/CounterDisplay';
import { EnableCounter } from './components/EnableCounter';
import './App.css';
import './lib/zustand/vanilla';

export function App() {
  return (
    <div className="app">
      <div className="counter">
        <CounterDisplay />
        <CounterActions />
        <EnableCounter />
      </div>
    </div>
  );
}
