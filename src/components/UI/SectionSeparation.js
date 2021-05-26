import React from 'react';
import classes from './SectionSeparation.module.css';

const SectionSeparation = props => {
	let directionProperties;

	props.direction === 'left'
		? (directionProperties = {
				paddingDirection: 'l',
				flexDirection: '',
				animation: 'fade-left',
				textAlignment: 'text-left'
		  })
		: (directionProperties = {
				paddingDirection: 'r',
				flexDirection: 'justify-end',
				animation: 'fade-right',
				textAlignment: 'text-right'
		  });

	return (
		<div className={`w-full flex ${directionProperties.flexDirection}`}>
			<div className={`w-8/12 p${directionProperties.paddingDirection}-5 font-dosis`}>
				<h2
					data-aos={`${directionProperties.animation}`}
					className={`md:mt-20 md:mb-10 text-3xl md:text-4xl mt-16 mb-8 text-gray-600 w-full ${directionProperties.textAlignment} ${classes.header_separator}`}
				>
					<span className='bg-white  px-5'>{props.text}</span>
				</h2>
			</div>
		</div>
	);
};
export default SectionSeparation;
