import React from 'react';
// import { isMobile, isDesktop, isTablet } from 'react-device-detect';
import SingleImage from './SingleImage';
import content from '../content';
import './Projects.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = () => {
	let slides;
	slides = content.projects.websites.map(el => {
		return <SingleImage key={el.name} website={el} style={{ marginLeft: '50px' }} />;
	});

	// if (isDesktop) {
	// 	let deviceType = 'desktop';
	// }else if (isTablet) {
	// 	let deviceType = 'tablet';
	// }else if (isMobile) {
	// 	let deviceType = 'mobile';
	// }

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	return (
		<div className='projects_container'>
			<div className='font-dosis text-center' id='projects'>
				<div className='mt-10'>
					<Carousel
						swipeable={true}
						draggable={true}
						responsive={responsive}
						infinite={true}
						// centerMode={true}
						ssr={true} // means to render carousel on server-side.
						// autoPlay={deviceType !== 'mobile' ? true : false}
						autoPlay={true}
						autoPlaySpeed={5000}
						keyBoardControl={true}
						containerClass='carousel-container'
						removeArrowOnDeviceType={['mobile']}
						// deviceType={deviceType}
						dotListClass='custom-dot-list-style'
						itemClass='mb-20'
						className='carousel_container'
					>
						{slides}
					</Carousel>
				</div>
			</div>
			<div className='pr-20 ml-10'>
				<img
					src={content.projects.layoutImage}
					alt='Test'
					className='layoutImage_projects'
				/>
			</div>
		</div>
	);
};
export default Projects;
