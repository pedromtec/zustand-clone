
type Listener = () => void
type SetState<T> = (newState: Partial<T> | ((state: T) => Partial<T>)) => void
type CreateState<T> = (set: SetState<T>) => T

export function createStore<T>(createState: CreateState<T>) {
  let state: T
  let listeners: Set<Listener> = new Set()

  const getState = () => {
    return state
  }

  const setState: SetState<T> = (newState) => {
    const nextState = typeof newState === 'function' ? newState(state) : newState 
    state = {
        ...state, 
        ...nextState
    }
    listeners.forEach(listener => listener())
  }

  const subscribe = (listener: Listener) => {
    listeners.add(listener)

    return () => {
         listeners.delete(listener)
    }
  }

  state = createState(setState)

  return {
    getState,
    setState,
    subscribe
  }
}





