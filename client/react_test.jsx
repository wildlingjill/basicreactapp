import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App.jsx";


// object containing user name
const person = {
	firstName: "Jill",
	lastName: "Robinson"
};

// render element in container
ReactDOM.render(< App user = {person}/>, document.getElementById("container"));
