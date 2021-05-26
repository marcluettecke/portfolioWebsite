import React from 'react';
import './TechLogo.css';

const TechLogo = props => {
	let sectionClassName;
	if (props.section === 'stack') {
		sectionClassName = 'logo_img_stack';
	} else if (props.section === 'projects') {
		sectionClassName = 'logo_img_projects';
	}
	return (
		<span
			key={props.index}
			className={`logo_img ${sectionClassName} hover:translate-y-7 m-2 rounded-full flex items-center`}
		>
			<a href={props.documentation} target='_blank' rel='noopener noreferrer'>
				<img src={props.image} alt={props.alt} className='' />
			</a>
		</span>
	);
};
export default TechLogo;
