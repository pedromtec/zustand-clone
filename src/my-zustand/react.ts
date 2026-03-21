import { useEffect, useState } from 'react';
import {
  type CreateState,
  type CreateStoreReturn,
  createStore,
} from './vanilla';

type Store<T> = CreateStoreReturn<T>;

type Selector<T, U> = (state: T) => U;

export function useStore<T, U>(store: Store<T>, selector: Selector<T, U>): U {
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

export function create<T>(
  createState: CreateState<T>,
): <U>(selector?: Selector<T, U>) => U {
  const store = createStore(createState);

  return <U>(
    selector: Selector<T, U> = (state: T) => state as unknown as U,
  ) => {
    return useStore(store, selector);
  };
}
