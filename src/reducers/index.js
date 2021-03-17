// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import cart from "./cart";
import menu from "./menu";
import checkout from "./checkout";

export default combineReducers({ cart, menu, checkout });
