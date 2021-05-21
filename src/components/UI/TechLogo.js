import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TechLogo = props => {
	return (
		<span
			key={props.index}
			className={`${
				props.index % 2 === 0 ? ' animate-float' : ' animate-refloat'
			} w-40 h-40 bg-white shadow-2xl m-2 rounded-full flex items-center p-5 `}
		>
			<LazyLoadImage src={props.image} alt={props.alt} />
		</span>
	);
};
export default TechLogo;
