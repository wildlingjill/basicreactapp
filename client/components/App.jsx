import React from "react";
import { formatName } from "../util.js";
// import { formatName } imports that function from util.js, can add other functions with formatName, formatAge etc.

// extends means inherits from React.Component
export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, {formatName(this.props.user)}</h1>
			</div>
		);
	}
}
