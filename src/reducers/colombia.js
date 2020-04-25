const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        colombia: action.payload,
      };
    case "REMOVE_DATA":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
