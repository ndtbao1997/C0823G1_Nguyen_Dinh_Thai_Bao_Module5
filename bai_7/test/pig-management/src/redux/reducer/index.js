import { combineReducers } from "redux";
import { pigsReducer } from "./pigs";

const rootReducer = combineReducers({
  pigs: pigsReducer,
});
export default rootReducer;
