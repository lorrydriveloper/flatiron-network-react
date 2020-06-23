import { combineReducers } from "redux";
import userReducers from "./usersReducer";

const rootReducer = combineReducers({
  users: userReducers
});

export default rootReducer;
