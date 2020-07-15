import { combineReducers } from "redux";
import session from "./sessionReducers";
import selection from "./selectionReducers";
import course from "./courseReducers";
import ui from "./uiReducers";

export default combineReducers({
  session,
  course,
  selection,
  ui,
});
