import { useCounterStore } from "./counter-store"

export function CounterActions() {

   const increment = useCounterStore((state) => state.increment)
   const decrement = useCounterStore((state) => state.decrement)
   const enabled = useCounterStore((state) => state.enabled)

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