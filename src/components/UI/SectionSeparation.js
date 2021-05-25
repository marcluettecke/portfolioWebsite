import React from 'react';
import classes from './SectionSeparation.module.css';

const SectionSeparation = props => {
	let directionProperties;

	props.direction === 'left'
		? (directionProperties = {
				flexDirection: '',
				animation: 'fade-left',
				textAlignment: 'text-left'
		  })
		: (directionProperties = {
				flexDirection: 'justify-end',
				animation: 'fade-right',
				textAlignment: 'text-right'
		  });

	return (
		<div className={`w-full flex ${directionProperties.flexDirection}`}>
			<div className='w-8/12 pl-5 font-dosis'>
				<h2
					data-aos={`${directionProperties.animation}`}
					className={`mt-10 mb-10 text-4xl text-gray-500 w-full ${directionProperties.textAlignment} ${classes.header_separator}`}
				>
					<span className='bg-white px-5'>{props.text}</span>
				</h2>
			</div>
		</div>
	);
};
export default SectionSeparation;
