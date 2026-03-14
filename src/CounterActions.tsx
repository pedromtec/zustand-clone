export function CounterActions() {
   const enabled = true
   const increment = () => {}
   const decrement = () => {}
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