import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import IconLabelTabs from './components/IconLabelTabs';
import Stack from './components/Stack';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faGlobe,
	faChartBar,
	faDesktop,
	faDumbbell,
	faChevronUp
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Dosis'].join(',')
	}
});

library.add(fab, faGlobe, faChartBar, faDesktop, faDumbbell, faChevronUp);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navigation />
			<Header />
			<IconLabelTabs />
			<Stack />
		</ThemeProvider>
	);
}

export default App;
