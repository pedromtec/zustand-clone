type Listener = () => void;
type SetState<T> = (newState: Partial<T> | ((state: T) => Partial<T>)) => void;
type GetState<T> = () => T;
type Subscribe = (listener: Listener) => () => void;

export type CreateState<T> = (set: SetState<T>) => T;

export type CreateStoreReturn<T> = {
  getState: GetState<T>;
  setState: SetState<T>;
  subscribe: Subscribe;
};

export function createStore<T>(
  createState: CreateState<T>,
): CreateStoreReturn<T> {
  let state: T;
  const listeners: Set<Listener> = new Set();

  const getState: GetState<T> = () => {
    return state;
  };

  const setState: SetState<T> = (newState) => {
    const nextState =
      typeof newState === 'function' ? newState(state) : newState;
    state = {
      ...state,
      ...nextState,
    };
    listeners.forEach((listener) => {
      listener();
    });
  };

  const subscribe: Subscribe = (listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  state = createState(setState);

  return {
    getState,
    setState,
    subscribe,
  };
}
