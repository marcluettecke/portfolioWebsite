import React from 'react';
import PartnerLogo from './UI/PartnerLogo';
import content from '../content';
import './Partners.css';

const Partners = props => {
	let slides = content.partners.logos.map((el, idx) => {
		return (
			<PartnerLogo
				key={el.alt}
				widthMd={el.widthMd}
				widthLg={el.widthLg}
				height={el.height}
				image={el.img}
				alt={el.alt}
				index={idx}
			/>
		);
	});

	return (
		<div className='partners_container'>
			{/* <div className='pr-20 ml-10'> */}
			<img src={content.partners.layoutImage} alt='Test' className='layoutImage_partners' />
			{/* </div> */}
			<div className='flex flex-wrap max-w-screen-xl justify-center brands'>{slides}</div>
		</div>
	);
};
export default Partners;
