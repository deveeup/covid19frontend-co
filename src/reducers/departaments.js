const initialState = {};
export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_BASIC_DATA":
      return {
        ...state,
        departaments: action.payload,
      };
    case "REMOVE_BASIC_DATA":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
