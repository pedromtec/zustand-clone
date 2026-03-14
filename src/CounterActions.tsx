import { useCounterStore } from "./counter-store"

export function CounterActions() {

   const { increment, decrement } = useCounterStore()
   const enabled = true

   return (
     <div className="counter-actions">
       <button className="action-button" onClick={increment} disabled={!enabled}>
         Increment
       </button>
       <button className="action-button" onClick={decrement} disabled={!enabled}>
         Decrement
       </button>
     </div>
   )
}