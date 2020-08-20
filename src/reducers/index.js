import { combineReducers } from "redux";
import countsReducer from "./countsReducer";
import show from "./showsReducer";

const rootReducer = combineReducers({
  output: countsReducer,
  show,
});

export default rootReducer;
