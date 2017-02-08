import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.jsx";


// object containing user name
const person = {
	firstName: "Jill",
	lastName: "Robinson"
};

// JSX element with JS injection
// const element = (
// 	<h1>
// 		Hello, {formatName(user)}
// 	</h1>
// );

// render element in container
ReactDOM.render(< App user = {person}/>, document.getElementById("container"));
