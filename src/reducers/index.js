import counterReducer from "./counter"; //import count
import loggeReducer from "./isLogged"; //import isLogged
import { combineReducers } from "redux"; //amde together

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggeReducer,
}); //obj with reducers

export default allReducers;
