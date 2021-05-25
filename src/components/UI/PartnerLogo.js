import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './PartnerLogo.css';

const PartnerLogo = props => {
	return (
		// className={`${props.index % 2 === 0 ? ' mt-32' : ' '} w-${props.width} h-${
		// 	props.height
		// } rounded-full flex items-center p-2`}
		// data-aos='fade-up'
		// data-aos-mirror='true'
		// data-aos-delay='200'
		// data-aos-duration='6000'
		<div
			style={{
				backgroundImage: `url(${props.image})`,
				width: `${props.widthLg}px`
			}}
			className='img ml-2 mr-3 mt-10 flex align-middle'
		></div>
	);
};
export default PartnerLogo;
