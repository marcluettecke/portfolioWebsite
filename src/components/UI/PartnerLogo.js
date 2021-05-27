import React from 'react';
import './PartnerLogo.css';

const PartnerLogo = props => {
	return (
		<a href={props.url} target='_blank' rel='noopener noreferrer'>
			<div
				style={{
					backgroundImage: `url(${props.image})`,
					width: `${props.widthLg}px`
				}}
				className='img ml-2 mr-3 mt-10 flex align-middle'
			></div>
		</a>
	);
};
export default PartnerLogo;
