import React from 'react';

function Loader(props) {
	return (
		<div class='ui active dimmer'>
			<div class='ui big text loader'>{props.message}</div>
		</div>
	);
}

// if we dont pass in a message prop, defaults to
Loader.defaultProps = {
    message: 'Loading...'
}

export default Loader;
