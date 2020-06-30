import { combineReducers } from "redux";
import userReducers from "./usersReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  usersStore: userReducers,
  auth: AuthReducer,
});

export default rootReducer;
