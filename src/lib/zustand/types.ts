export type SetState<State extends Record<string, unknown>> = (
  partial: Partial<State> | ((previous: State) => Partial<State>),
) => void;

export type GetState<State extends Record<string, unknown>> = () => State;

export type CreateState<State extends Record<string, unknown>> = (
  set: SetState<State>,
  get: GetState<State>,
) => State;

export type Listener = () => void;

export type Store<State extends Record<string, unknown>> = {
  getState: GetState<State>;
  setState: SetState<State>;
  subscribe: (listener: Listener) => () => void;
};
