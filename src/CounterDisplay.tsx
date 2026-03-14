import {  useCounterStore } from "./counter-store"

export function CounterDisplay() {  
   const { count } = useCounterStore()
   return (
     <span>Counter: {count}</span>
   )
}