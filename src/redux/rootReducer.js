import { combineReducers } from "redux";
import counterReducer from "./reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
