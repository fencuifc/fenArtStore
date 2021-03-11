// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import cart from "./cart";
import menu from "./menu";
// import secondCounter from './exampleReducer';

export default combineReducers({cart,menu});

// Example for combining multiple reducers:
// export default combineReducers({ count, secondCounter });
