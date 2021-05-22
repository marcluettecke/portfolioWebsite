import React from 'react';
import classes from './SectionSeparation.module.css';

const SectionSeparation = props => {
	return (
		<div className='container w-8/12 pl-5'>
			<h2 className={`mt-10 mb-10 text-4xl text-gray-500 w-full ${classes.header_separator}`}>
				<span className='bg-white px-5'>{props.text}</span>
			</h2>
		</div>
	);
};
export default SectionSeparation;
