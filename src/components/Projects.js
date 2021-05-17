import React from 'react';
import { Carousel } from '3d-react-carousal';
import SingleImage from './SingleImage';
import content from '../content';

let slides = content.projects.websites.map(website => {
	return <SingleImage key={website.name} website={website} />;
});

const Projects = props => {
	return (
		<div className='min-h-screen font-dosis text-center' id='projects'>
			<h1 className='text-5xl font-bold mt-20'>My past projects</h1>
			<div className='mt-10'>
				<Carousel slides={slides} autoplay={true} interval={5000} />
			</div>
		</div>
	);
};
export default Projects;
