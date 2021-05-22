import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css';
import content from '../content';
import TestimonalCard from './UI/TestimonialCard';

const Testimonials = () => {
	// export default class Testimonials extends Component {
	const testimonials = content.testimonials.people.map(el => {
		return <TestimonalCard image={el.image} name={el.name} job={el.job} text={el.text} />;
	});

	return (
		<Carousel
			showArrows={true}
			infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			autoPlay={true}
			interval={6000}
			className='mb-20'
		>
			{testimonials}
			{/* <div>
					<img
						src={content.testimonials.people[0].image}
						alt={content.testimonials.people[0].name}
					/>
					<div className='myCarousel'>
						<h3>Shirley Fultz</h3>
						<h4>Designer</h4>
						<p>
							It's freeing to be able to catch up on customized news and not be
							distracted by a social media element on the same site
						</p>
					</div>
				</div>

				<div> */}
		</Carousel>
	);
};
export default Testimonials;
