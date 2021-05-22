import React, { Fragment } from 'react';
import { isMobile, isDesktop, isTablet } from 'react-device-detect';
import SingleImage from './SingleImage';
import content from '../content';
import classes from './Projects.module.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Projects = props => {
	let slides;
	if (props.category === 'all') {
		slides = content.projects.websites.map(el => {
			return <SingleImage key={el.name} website={el} />;
		});
	} else {
		slides = content.projects.websites
			.filter(website => {
				return website.type === props.category;
			})
			.map(el => {
				return <SingleImage key={el.name} website={el} />;
			});
	}

	// let header = (
	// 	<h1 className='text-5xl font-bold mt-5'>
	// 		<span className='text-indigo-500'>All</span> my past projects
	// 	</h1>
	// );
	// if (props.category === 'dataScience') {
	// 	header = (
	// 		<h1 className='text-5xl font-bold mt-5'>
	// 			Projects in <span className='text-indigo-500'>Data Science</span>
	// 		</h1>
	// 	);
	// }

	// if (props.category === 'frontend') {
	// 	header = (
	// 		<h1 className='text-5xl font-bold mt-5'>
	// 			Projects in <span className='text-indigo-500'>Front End Development</span>
	// 		</h1>
	// 	);
	// }

	// if (props.category === 'practice') {
	// 	header = (
	// 		<h1 className='text-5xl font-bold mt-5'>
	// 			Practice projects for <span className='text-indigo-500'>FrontEndMentor</span>
	// 		</h1>
	// 	);
	// }

	let deviceType;
	if (isDesktop) {
		deviceType = 'desktop';
	}
	if (isTablet) {
		deviceType = 'tablet';
	}
	if (isMobile) {
		deviceType = 'mobile';
	}

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
			// slidesToSlide: 3, // optional, default to 1.,
			// partialVisibilityGutter: 40
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
			// slidesToSlide: 2, // optional, default to 1.
			// partialVisibilityGutter: 30
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
			// slidesToSlide: 1, // optional, default to 1.
			// partialVisibilityGutter: 0
		}
	};
	return (
		<Fragment>
			<div className='min-h-3/4 font-dosis text-center' id='projects'>
				{/* {header} */}
				<div className='mt-10'>
					{/* <Carousel slides={slides} autoplay={false} interval={5000} /> */}
					<Carousel
						swipeable={true}
						draggable={true}
						showDots={false}
						responsive={responsive}
						partialVisbile={deviceType !== 'mobile' ? true : false}
						centerMode={deviceType === 'mobile' ? true : false}
						// partialVisbile={true}
						ssr={true} // means to render carousel on server-side.
						// infinite={true}
						// autoPlay={deviceType !== 'mobile' ? true : false}
						// autoPlaySpeed={3000}
						keyBoardControl={true}
						// customTransition='all .7'
						// transitionDuration={700}
						containerClass='carousel-container'
						// removeArrowOnDeviceType={['mobile']}
						// deviceType={deviceType}
						dotListClass='custom-dot-list-style'
						itemClass='mb-20 mx-10'
						className={classes.carousel_container}
						// focusOnSelect={true}
						data-aos='fade-up'
						data-aos-mirror='true'
						data-aos-delay='200'
						data-aos-duration='6000'
					>
						{slides}
					</Carousel>
				</div>
			</div>
		</Fragment>
	);
};
export default Projects;
