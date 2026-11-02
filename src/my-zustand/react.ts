import { useEffect, useState } from 'react';
import {
  type CreateState,
  type CreateStoreReturn,
  createStore,
  type StoreState,
} from './vanilla';

type Store<T extends StoreState> = CreateStoreReturn<T>;

type Selector<T, U> = (state: T) => U;

type UseBoundStore<T> = {
  (): T;
  <U>(selector: Selector<T, U>): U;
};

export function useStore<T extends StoreState, U>(
  store: Store<T>,
  selector: Selector<T, U>,
): U {
  const [state, setState] = useState<U>(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const newState = selector(store.getState());

      setState((previousState) => {
        if (!Object.is(newState, previousState)) {
          return newState;
        }
        return previousState;
      });
    });

    return unsubscribe;
  }, [store, selector]);

  return state;
}

export function create<T extends StoreState>(
  createState: CreateState<T>,
): UseBoundStore<T> {
  const store = createStore(createState);
  const selectState: Selector<T, T> = (state) => state;

  function useBoundStore(): T;
  function useBoundStore<U>(selector: Selector<T, U>): U;
  function useBoundStore<U>(selector?: Selector<T, U>): T | U {
    const select: Selector<T, T | U> = selector ?? selectState;
    return useStore(store, select);
  }

  return useBoundStore;
}
