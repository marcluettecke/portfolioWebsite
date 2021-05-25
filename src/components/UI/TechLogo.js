import React from 'react';
import './TechLogo.css';

const generateRandomPadding = () => {
	return `${Math.floor(Math.random() * 30)}`;
};

const generateRandomSize = () => {
	const randomIndex = Math.floor(Math.random() * 3);
	return `${[6, 7, 8][randomIndex]}`;
};

const TechLogo = props => {
	const randomSize = generateRandomSize();
	return (
		<span
			key={props.index}
			style={{
				margin: `${generateRandomPadding()}px ${generateRandomPadding()}px ${generateRandomPadding()}px ${generateRandomPadding()}px`,
				width: `${randomSize}rem`,
				height: `${randomSize}rem`
			}}
			className={`logo_img bg-white hover:translate-y-7 m-2 rounded-full flex items-center`}
			// className={`${
			// 	props.index % 2 === 0 ? ' animate-float' : ' animate-refloat'
			// } w-40 h-40 bg-white shadow-2xl hover:animate-float m-2 rounded-full flex items-center p-5 `}
		>
			<img src={props.image} alt={props.alt} className='' />
		</span>
	);
};
export default TechLogo;
