import React, { useEffect, useState } from 'react';

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

export const ApiText = () => {

	const [data, setData] = useState('');

	useEffect(() => {

		(async function () {
			const { text } = await (await fetch(`/api/message`)).json();
			setData(text);
		})();

		// setData("text");

	});

	return (
		<div className='textContainer'>
			<h1>
				{data}
			</h1>
		</div>
	);
}

function App() {

	return (
		<>
			<WelcomeText />
			<hr />
			<ApiText />
		</>
	)
}

export default App;
