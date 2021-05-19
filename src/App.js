import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import IconLabelTabs from './components/IconLabelTabs';
import Stack from './components/Stack';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faChartBar, faDesktop, faDumbbell } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faGlobe, faChartBar, faDesktop, faDumbbell);

function App() {
	return (
		<div>
			<Navigation />
			<Header />
			<IconLabelTabs />
			<Stack />
		</div>
	);
}

export default App;
