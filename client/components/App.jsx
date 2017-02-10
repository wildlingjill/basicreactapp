import React from "react";
import { formatName, getJSON } from "../util.js";
// import { formatName } imports that function from util.js, can add other functions with formatName, getJSON etc.

// extends means inherits from React.Component
export class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello, {formatName(this.props.user)}</h1>
				<Button/>
			</div>
		);
	}
}

export class Button extends React.Component {

	constructor () {
		// super calls constructor method on base class (react component)
		super();
		this.state = {};
	}

	// 'this' needs to be kept through to anonymous function that sets state
	// can do with either bind(this), an arrow function where this refers to parent's this, or by setting a var to this and using the var

	handleClick () {
		getJSON().then(function(response) {
			this.setState({ response: response });

		}.bind(this))

	}

	render () {
		return (
			<div>
				<button onClick={this.handleClick.bind(this)}>Click me for data!</button>

				{/* pre is a preformatted text tag */}
				<pre>{JSON.stringify(this.state.response, null, 4)}</pre>
			</div>
		)
	}
}
