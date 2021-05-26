import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
// import IconLabelTabs from './components/IconLabelTabs';
import Partners from './components/Partners';
import SectionSeparation from './components/UI/SectionSeparation';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

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
	faPhone,
	faMapMarkerAlt,
	faCode,
	faFilePdf
} from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	typography: {
		fontFamily: ['Dosis'].join(',')
	}
});

library.add(
	fab,
	far,
	faGlobe,
	faChartBar,
	faDesktop,
	faDumbbell,
	faChevronUp,
	faPhone,
	faMapMarkerAlt,
	faCode,
	faFilePdf
);

const App = () => {
	const [formIsShown, setFormIsShown] = useState(false);

	const hideFormHandler = () => {
		setFormIsShown(false);
	};
	const showFormHandler = () => {
		setFormIsShown(true);
	};
	const linkToCvHandler = () => {
		window.open('https://cvmarcluettecke.netlify.app/');
	};

	useEffect(() => {
		AOS.init({
			duration: 2000
		});
	}, []);
	return (
		<ThemeProvider theme={theme}>
			{formIsShown && <ContactForm onClose={hideFormHandler} />}
			<Navigation onShowForm={showFormHandler} />
			<Header onClose={hideFormHandler} onLinkToCv={linkToCvHandler} />
			<SectionSeparation text={'Projects'} direction={'left'} />
			<Projects category={'all'} />
			<SectionSeparation text={'Partners'} direction={'right'} />
			<Partners category={'all'} />
			<SectionSeparation text={'Technologies'} direction={'left'} />

			<Stack />
			<SectionSeparation text={'Testimonials'} direction={'right'} />
			<Testimonials />
			<Footer onShowForm={showFormHandler} />
		</ThemeProvider>
	);
};

export default App;
