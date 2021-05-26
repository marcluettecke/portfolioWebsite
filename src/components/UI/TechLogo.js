import React from 'react';
import './TechLogo.css';

const TechLogo = props => {
	return (
		<span
			key={props.index}
			style={{
				width: `${props.width}`,
				height: `${props.height}`,
				margin: `${props.marginY}px ${props.marginX}px`
			}}
			className={`logo_img hover:translate-y-7 m-2 rounded-full flex items-center`}
		>
			<a href={props.documentation} target='_blank' rel='noopener noreferrer'>
				<img src={props.image} alt={props.alt} className='' />
			</a>
		</span>
	);
};
export default TechLogo;
