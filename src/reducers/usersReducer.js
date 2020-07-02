export default function userReducers(
  state = { user: {}, users: [], filterUsers: [] },
  { type, payload }
) {
  switch (type) {
    case "STORAGE_USER":
      return {
        ...state,
        user: payload,
      };
    case "CREATE_USER":
      return {
        ...state,
        user: payload,
      };
    case "STORAGE_USERS":
      return {
        ...state,
        users: payload,
      };
    case "FILTER_USERS":
      return {
        ...state,
        filterUsers: filterUsers(state.users, payload),
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: payload,
        users: [],
      };
    default:
      return state;
  }
}

function filterUsers(array, filter) {
  switch (filter.searchBy) {
    case "cohort":
      return array.filter((item) => item.cohort.id === filter.cohort);
    case "course":
      return array.filter((item) => item.cohort.course.id === filter.course);
    case "campus":
      return array.filter((item) => item.cohort.campus.id === filter.campus);
    case "course & campus":
      return array.filter(
        (item) =>
          item.cohort.campus.id === filter.campus &&
          item.cohort.course.id === filter.course
      );
    default:
      return array;
  }
}
