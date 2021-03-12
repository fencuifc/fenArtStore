/* global document */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import 'babel-polyfill';

//**********************
render( // By using <Provider />, the store will be made available for all the components in your application.
    <Provider store={store}>
    	<App />
  	</Provider>,
    document.getElementById("root")
);

/*var test = false;
if(!test){

}else{
	render(
	    <Counter step = {1} />,
	  document.getElementById("test")
	);
}*/

//***********************