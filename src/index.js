import React from "react";
import ReactDOM from "react-dom";
import "./css/main.css";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*
import { createStore } from "redux";
//Action
const addBoard = () => {
	return {
		type: "ADDBOARD"
	};
};

const removeBoard = () => {
	return {
		type: "REMOVEBOARD"
	};
};

const addList = () => {
	return {
		type: "ADDLIST"
	};
};

const removeList = () => {
	return {
		type: "REMOVELIST"
	};
};

const addCard = () => {
	return {
		type: "ADDCARD"
	};
};

const removeCard = () => {
	return {
		type: "REMOVECARD"
	};
};

//Reducer
const boards = (state = {}, action) => {
	switch (action.type) {
		case "ADDBOARD":
	}
};

//Store
let store = createStore(boards);
//Dispatch

*/
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
