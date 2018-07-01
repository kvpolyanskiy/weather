export const createReducer = (actionHandlers, initialState) => (
  state = initialState,
  action,
) => actionHandlers.has(action.type)
  ? actionHandlers.get(action.type)(state, action)
  : state;
