import type { CreateState, GetState, Listener, SetState, Store } from './types';

export const createStore = <State extends Record<string, unknown>>(
  createState: CreateState<State>,
): Store<State> => {
  let state: State;
  const listeners = new Set<Listener>();

  const getState: GetState<State> = () => {
    return state;
  };

  const setState: SetState<State> = (partial) => {
    const changes = typeof partial === 'function' ? partial(state) : partial;
    state = {
      ...state,
      ...changes,
    };

    listeners.forEach((listener) => {
      listener();
    });
  };

  const subscribe = (listener: Listener) => {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  };

  state = createState(setState, getState);

  return {
    getState,
    setState,
    subscribe,
  };
};
