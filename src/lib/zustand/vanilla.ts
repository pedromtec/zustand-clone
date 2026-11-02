type Listener = () => void;

export type StoreState = Record<string, unknown>;

type SetState<T extends StoreState> = (
  newState: Partial<T> | ((state: T) => Partial<T>),
) => void;
type GetState<T extends StoreState> = () => T;
type Subscribe = (listener: Listener) => () => void;

export type CreateState<T extends StoreState> = (set: SetState<T>) => T;

export type CreateStoreReturn<T extends StoreState> = {
  getState: GetState<T>;
  setState: SetState<T>;
  subscribe: Subscribe;
};

export function createStore<T extends StoreState>(
  createState: CreateState<T>,
): CreateStoreReturn<T> {
  let state: T | undefined;
  const listeners: Set<Listener> = new Set();

  const getState: GetState<T> = () => {
    if (state === undefined) {
      throw new Error('Cannot read store state before initialization finishes');
    }

    return state;
  };

  const setState: SetState<T> = (newState) => {
    if (state === undefined) {
      throw new Error(
        'Cannot update store state before initialization finishes',
      );
    }

    const partial = typeof newState === 'function' ? newState(state) : newState;
    state = {
      ...state,
      ...partial,
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
