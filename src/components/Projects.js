import React, { Fragment } from 'react';
import { Carousel } from '3d-react-carousal';
import SingleImage from './SingleImage';
import content from '../content';

const Projects = props => {
	let slides;
	if (props.category === 'all') {
		slides = content.projects.websites.map(el => {
			return <SingleImage key={el.name} website={el} />;
		});
	} else {
		slides = content.projects.websites
			.filter(website => {
				return website.type === props.category;
			})
			.map(el => {
				return <SingleImage key={el.name} website={el} />;
			});
	}

	let header = (
		<h1 className='text-5xl font-bold mt-20'>
			<span className='text-indigo-500'>All</span> my past projects
		</h1>
	);
	if (props.category === 'dataScience') {
		header = (
			<h1 className='text-5xl font-bold mt-20'>
				Projects in <span className='text-indigo-500'>Data Science</span>
			</h1>
		);
	}

	if (props.category === 'frontend') {
		header = (
			<h1 className='text-5xl font-bold mt-20'>
				Projects in <span className='text-indigo-500'>Front End Development</span>
			</h1>
		);
	}

	if (props.category === 'practice') {
		header = (
			<h1 className='text-5xl font-bold mt-20'>
				Practice projects for <span className='text-indigo-500'>FrontEndMentor</span>
			</h1>
		);
	}

	// let slides = content.projects.websites.map(website => {
	// 	return <SingleImage key={website.name} website={website} />;
	// });
	return (
		<Fragment>
			<div className='min-h-screen font-dosis text-center' id='projects'>
				{header}
				<div className='mt-10'>
					<Carousel slides={slides} autoplay={false} interval={5000} />
				</div>
			</div>
		</Fragment>
	);
};
export default Projects;
