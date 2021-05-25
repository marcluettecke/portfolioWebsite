import React from 'react';
import './TechLogo.css';

const TechLogo = props => {
	return (
		<span
			key={props.index}
			style={{
				// margin: `${generateRandomPadding()}px ${generateRandomPadding()}px ${generateRandomPadding()}px ${generateRandomPadding()}px`,
				width: '7.5rem',
				height: '7.5rem'
			}}
			className={`logo_img w-24 h-24 mx-12 my-5 bg-white hover:translate-y-7 m-2 rounded-full flex items-center`}
		>
			<img src={props.image} alt={props.alt} className='' />
		</span>
	);
};
export default TechLogo;
