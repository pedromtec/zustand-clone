import { useEffect, useState } from 'react';

export const useStore = (store: any) => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState());
    });
  }, [store]);

  return state;
};
