import { counterStore } from "./counter-store"

export function CounterActions() {
   const enabled = true

   const increment = () => {
     counterStore.getState().increment()
   }
   const decrement = () => {
     counterStore.getState().decrement()
   }

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