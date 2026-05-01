import { cartReducer } from "./cartReducer.js";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  cartReducer
})

export default allReducer;