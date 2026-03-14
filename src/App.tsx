import { CounterActions } from "./CounterActions";
import { CounterDisplay } from "./CounterDisplay";
import { EnableCounter } from "./EnableCounter";
import "./App.css";

export function App() {
  return (
    <div className="app">
      <div className="counter"> 
        <CounterDisplay />
        <CounterActions />
        <EnableCounter />
      </div> 
    </div>
  )
}


