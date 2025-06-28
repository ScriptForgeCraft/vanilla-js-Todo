export default function useTodoStore(reducer, initialState) {
  function dispatch(action) {
    return reducer(initialState, action);
  }

  return [initialState, dispatch];
}
