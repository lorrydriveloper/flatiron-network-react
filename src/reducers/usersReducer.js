export default function userReducers(state = {}, action) {
  switch (action.type) {
    case "STORAGE_USER":
      return action.payload;

    default:
      return state;
  }
}
