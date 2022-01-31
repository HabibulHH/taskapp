import { combineReducers } from "redux";
import taskReducer from "./reducer";

const rootReducer = combineReducers({
  taskStore: taskReducer,
});

export default rootReducer;
