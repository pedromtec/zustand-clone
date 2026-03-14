import { useEffect, useState } from "react"
import { counterStore } from "./counter-store"

export function CounterDisplay() {
   const [count, setCount] = useState(counterStore.getState().count)

   useEffect(() => {
    const unsubscribe = counterStore.subscribe(() => {
      setCount(counterStore.getState().count)
    })

    return unsubscribe
   }, [])

   return (
     <span>Counter: {count}</span>
   )
}