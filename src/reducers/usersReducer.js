export default function userReducers(
  state = { user: {}, users: [] },
  { type, payload }
) {
  switch (type) {
    case "STORAGE_USER":
      return {
        ...state,
        user: payload,
      };
    case "STORAGE_USERS":
      return {
        ...state,
        users: payload,
      };

    default:
      return state;
  }
}
