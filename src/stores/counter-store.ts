import { createStore } from '../lib/zustand/vanilla';

type CounterStore = {
  count: number;
  enabled: boolean;
  increment: () => void;
  decrement: () => void;
  toggleEnabled: () => void;
};

export const counterStore = createStore<CounterStore>((set, get) => ({
  count: 0,
  enabled: true,
  increment: () => {
    const { enabled } = get();
    if (!enabled) {
      return;
    }
    set((previousState) => ({ count: previousState.count + 1 }));
  },
  decrement: () => {
    const { enabled } = get();
    if (!enabled) {
      return;
    }
    set((previousState) => ({ count: previousState.count - 1 }));
  },

  toggleEnabled: () => {
    set((previousState) => ({ enabled: !previousState.enabled }));
  },
}));

counterStore.subscribe(() => {
  console.log('Listener 2:', counterStore.getState().enabled);
});
