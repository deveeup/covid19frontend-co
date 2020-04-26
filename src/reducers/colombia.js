const initialState = {
  data: null,
  loading: true,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "REMOVE_DATA":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
