import React from 'react';
// import classes from './SingleImage.module.css';
import ProjectCard from './UI/ProjectCard';

const SingleImage = props => {
	return (
		<ProjectCard
			imageLabel={props.website.name}
			imagePath={props.website.screenshotLink}
			description='This is a test description'
			title='This is a test title'
		/>
	);
};
export default SingleImage;
