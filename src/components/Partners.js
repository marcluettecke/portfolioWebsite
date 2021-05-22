import React, { Fragment } from 'react';
// import { isMobile, isDesktop, isTablet } from 'react-device-detect';
import PartnerLogo from './UI/PartnerLogo';
import content from '../content';
import classes from './Projects.module.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Partners = props => {
	let slides = content.partners.logos.map((el, idx) => {
		return (
			<PartnerLogo
				key={el.alt}
				width={el.width}
				height={el.height}
				image={el.img}
				alt={el.alt}
				index={idx}
			/>
		);
	});

	// let deviceType;
	// if (isDesktop) {
	// 	deviceType = 'desktop';
	// }
	// if (isTablet) {
	// 	deviceType = 'tablet';
	// }
	// if (isMobile) {
	// 	deviceType = 'mobile';
	// }

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 7
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 5
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 4
		}
	};
	return (
		<Fragment>
			<div className='min-h-1/4 font-dosis text-center'>
				{/* <h2>Successful callobarions with industry and academic partners</h2> */}
				<div>
					{/* <div className='mt-10'> */}
					<Carousel
						swipeable={true}
						draggable={false}
						showDots={false}
						responsive={responsive}
						ssr={true} // means to render carousel on server-side.
						infinite={true}
						autoPlay={true}
						autoPlaySpeed={2000}
						containerClass='carousel-container'
						removeArrowOnDeviceType={['desktop', 'mobile', 'tablet']}
						dotListClass='custom-dot-list-style'
						itemClass='mb-10'
						className={classes.carousel_container}
					>
						{slides}
					</Carousel>
				</div>
			</div>
		</Fragment>
	);
};
export default Partners;
