import React, { useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import IconLabelTabs from './components/IconLabelTabs';
import Partners from './components/Partners';
import SectionSeparation from './components/UI/SectionSeparation';
import Testimonials from './components/Testimonials';
import Stack from './components/Stack';
import Footer from './components/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
	faGlobe,
	faChartBar,
	faDesktop,
	faDumbbell,
	faChevronUp,
	faEnvelope,
	faPhone
} from '@fortawesome/free-solid-svg-icons';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Dosis'].join(',')
	}
});

library.add(fab, faGlobe, faChartBar, faDesktop, faDumbbell, faChevronUp, faEnvelope, faPhone);

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 2000
		});
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<Navigation />
			<Header />
			<SectionSeparation text={'Past projects'} />
			<IconLabelTabs />
			<SectionSeparation text={'Industry partners'} />
			<Partners category={'all'} />
			<SectionSeparation text={'Tech Stack'} />
			{/* <div data-aos='fade-up' className='max-w-4xl h-15 bg-blue-400'>
				Test
			</div> */}
			<Stack />
			<SectionSeparation text={'Testimonials'} />
			<Testimonials />
			<Footer />
		</ThemeProvider>
	);
};

export default App;
