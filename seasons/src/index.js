import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

class App extends Component {
	constructor(props) {
		// ref to parents contructor function
		super(props);
		// State object ONLY TIME we direct assign
		this.state = { lat: null, errorMessage: '' };

		// Getting current location
		window.navigator.geolocation.getCurrentPosition(
			//creating callbacks
			(position) => {
				console.log(position);
				// Call setState() to update state object
				this.setState({ lat: position.coords.latitude });
			},
			(err) => {
				console.log(err);
				this.setState({ errorMessage: err.message });
			}
		);
	}

	// Have to define render
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>{this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <div>Latitude:{this.state.lat}</div>;
		}
		if (!this.state.errorMessage && !this.state.lat) {
			return <div>Loading!</div>;
		}
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
