import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PartnerLogo = props => {
	return (
		<span
			key={props.index}
			className={`${props.index % 2 === 0 ? ' mt-32' : ' '} w-${props.width} h-${
				props.height
			} rounded-full flex items-center p-2`}
		>
			<LazyLoadImage src={props.image} alt={props.alt} />
		</span>
	);
};
export default PartnerLogo;
