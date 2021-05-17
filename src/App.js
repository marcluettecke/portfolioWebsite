import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Stack from './components/Stack';

function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<Projects />
			<Stack />
		</div>
	);
}

export default App;
