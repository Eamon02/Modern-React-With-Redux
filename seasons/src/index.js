import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import SeasonDisplay from './SeasonDisplay/SeasonDisplay';
import Loader from './Loader/Loader';

class App extends Component {
	// constructor(props) {
	// 	// ref to parents contructor function
	// 	super(props);
	// 	// State object ONLY TIME we direct assign
	// 	this.state = { lat: null, errorMessage: '' };
	// }

	// Refactored State
	state = { lat: null, errorMessage: '' };

	// Place to do data-loading
	componentDidMount() {
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

	// Place for data loading when state or props change
	componentDidUpdate() {
		// console.log('My component was updated and re-rendered');
	}

	// Place for non-react cleanup
	componentWillUnmount() {
		// console.log('cleanup for non-react stuff');
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>{this.state.errorMessage}</div>;
		}
		if (!this.state.errorMessage && this.state.lat) {
			// pass state object to SeasonDisplay
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Loader message='Please accept location request' />;
	}

	// Have to define render
	render() {
		return <div style={{border:'1px inset red'}}>{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
