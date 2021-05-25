import React from 'react';
import classes from './TestimonialCard.module.css';

const TestimonialCard = props => {
	return (
		<div>
			<img
				src={props.image}
				alt={props.name}
				// src={content.testimonials.people[0].image}
				// alt={content.testimonials.people[0].name}
			/>
			<div className={classes.myCarousel}>
				<h3>{props.name}</h3>
				<h4>{props.job}</h4>
				<p>{props.text}</p>
			</div>
		</div>
	);
};
export default TestimonialCard;
