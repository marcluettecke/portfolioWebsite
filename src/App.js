import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NavigationMenu from './components/UI/NavigationMenu';
// import IconLabelTabs from './components/IconLabelTabs';
import Partners from './components/Partners';
import SectionSeparation from './components/UI/SectionSeparation';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Stack from './components/Stack';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Loader from './components/UI/Loader';

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
	faFilePdf,
	faBorderAll,
	faProjectDiagram,
	faUserCheck,
	faLaptopCode,
	faThumbsUp
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
	faFilePdf,
	faBorderAll,
	faProjectDiagram,
	faUserCheck,
	faLaptopCode,
	faThumbsUp
);

const App = () => {
	const [formIsShown, setFormIsShown] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

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
		setTimeout(() => {
			setIsLoading(false);
		}, 1500);
	}, []);
	return (
		<ThemeProvider theme={theme}>
			{isLoading && <Loader />}
			{!isLoading && formIsShown && <ContactForm onClose={hideFormHandler} />}
			{!isLoading && (
				<div>
					<Navigation onShowForm={showFormHandler} />
					<NavigationMenu />
					<Header onClose={hideFormHandler} onLinkToCv={linkToCvHandler} />
					<SectionSeparation
						shortText={'Projects'}
						longText={'Projects I contributed to'}
						direction={'left'}
						id={'projects_nav'}
					/>
					<Projects category={'all'} />
					<SectionSeparation
						shortText={'Partners'}
						longText={'Partners who have trusted me in the past'}
						direction={'right'}
						id={'partners_nav'}
					/>
					<Partners category={'all'} />
					<SectionSeparation
						shortText={'Technologies'}
						longText={'Technologies I have worked with'}
						direction={'left'}
						id={'technologies_nav'}
					/>

					<Stack />
					<SectionSeparation
						shortText={'Testimonials'}
						longText={'Testimnonials by former employers'}
						direction={'right'}
						id={'testimonials_nav'}
					/>
					<Testimonials />
					<Footer onShowForm={showFormHandler} />
				</div>
			)}
		</ThemeProvider>
	);
};

export default App;
