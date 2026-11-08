type SetState<State> = (
  partial: Partial<State> | ((previous: State) => Partial<State>),
) => void;

export const createStore = <State>(initialState: State) => {
  let state = initialState;

  const getState = () => {
    return state;
  };

  const setState: SetState<State> = (partial) => {
    const changes = typeof partial === 'function' ? partial(state) : partial;
    state = {
      ...state,
      ...changes,
    };
  };

  return {
    getState,
    setState,
  };
};

const countStore = createStore({
  count: 0,
  enabled: true,
});

countStore.setState((previousState) => ({
  count: previousState.count + 2,
}));

console.log(countStore.getState());
