import React, { useEffect, useState } from 'react';
import classes from './SectionSeparation.module.css';

const SectionSeparation = props => {
	const [windowWidth, setWindowWidth] = useState(0);
	let directionProperties;

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	let separatorText;
	if (windowWidth < 768) {
		separatorText = <span className='bg-white uppercase  px-5'>{props.shortText}</span>;
	} else {
		separatorText = <span className='bg-white px-5'>{props.longText}</span>;
	}

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
					id={props.id}
				>
					{separatorText}
				</h2>
			</div>
		</div>
	);
};
export default SectionSeparation;
