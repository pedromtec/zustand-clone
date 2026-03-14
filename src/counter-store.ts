import { createStore } from "./my-zustand/vanilla";

type CounterState = {
    count: number
    enabled: boolean
    increment: () => void
    decrement: () => void
}

export const counterStore = createStore<CounterState>((set) => {
    return {
        count: 0,
        enabled: false,
        increment: () => {
            set((previousState) => ({ count: previousState.count+1}))
        },
        decrement: () => {
            set((previousState) => ({ count: previousState.count-1}))
        }
    }
})
