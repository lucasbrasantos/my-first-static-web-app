import React from 'react';

export const WelcomeText = () => {

	const value = 'World';

	return (
		<div className='textContainer'>
			<h1>
				Hello {value}!
			</h1>
		</div>
	)
}

function App() {

	return (
		<WelcomeText />
	)
}

export default App;
