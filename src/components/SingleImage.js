import React from 'react';
// import classes from './SingleImage.module.css';

const SingleImage = props => {
	return (
		<a href='https://google.com'>
			<img src={props.website.screenshotLink} alt={props.website.name} />
		</a>
	);
};
export default SingleImage;
