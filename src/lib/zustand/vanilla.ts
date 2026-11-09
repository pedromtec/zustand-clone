type SetState<State> = (
  partial: Partial<State> | ((previous: State) => Partial<State>),
) => void;

type GetState<State> = () => State;

type CreateState<State> = (set: SetState<State>, get: GetState<State>) => State;

export const createStore = <State extends Record<string, unknown>>(
  createState: CreateState<State>,
) => {
  let state: State;

  const getState: GetState<State> = () => {
    return state;
  };

  const setState: SetState<State> = (partial) => {
    const changes = typeof partial === 'function' ? partial(state) : partial;
    state = {
      ...state,
      ...changes,
    };
  };

  state = createState(setState, getState);

  return {
    getState,
    setState,
  };
};

type CountStore = {
  count: number;
  enabled: boolean;
  increment: () => void;
};

const countStore = createStore<CountStore>((set, get) => ({
  count: 0,
  enabled: true,
  increment: () => {
    const { enabled } = get();
    if (!enabled) {
      return;
    }
    set((previousState) => ({ count: previousState.count + 1 }));
  },
}));

countStore.getState().increment();

console.log(countStore.getState());
