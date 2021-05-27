import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Testimonials.css';
import content from '../content';
import TestimonalCard from './UI/TestimonialCard';

const Testimonials = () => {
	const testimonials = content.testimonials.people.map(el => {
		return (
			<TestimonalCard
				key={el.name}
				image={el.image}
				name={el.name}
				job={el.job}
				text={el.text}
			/>
		);
	});

	return (
		<Carousel
			swipeable={true}
			showArrows={true}
			// infiniteLoop={true}
			showThumbs={false}
			showStatus={false}
			// autoPlay={true}
			// interval={8000}
			className='mb-20'
		>
			{testimonials}
		</Carousel>
	);
};
export default Testimonials;
