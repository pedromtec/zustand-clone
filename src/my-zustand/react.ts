import { useEffect, useState } from "react";
import {createStore, type CreateState, type CreateStoreReturn } from "./vanilla";

type Store<T> = CreateStoreReturn<T>

export function useStore<T>(store: Store<T>): T {
    const [state, setState] = useState(store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
          setState(store.getState())
        })
        return unsubscribe
    }, [])

    return state
}

export function create<T>(createState: CreateState<T>): () => T {
   const store = createStore(createState)

   return () => useStore(store)
}