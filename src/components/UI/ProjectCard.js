import React from 'react';
import './ProjectCard.css';
import TechLogo from './TechLogo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectCard = props => {
	const logos = props.websites.technologies.map(el => {
		return (
			<TechLogo
				index={'1'}
				image={el.img}
				alt={el.alt}
				key={el.alt}
				section={'projects'}
				documentation={el.documentation}
			/>
		);
	});
	let firstButton;
	if (props.websites.type === 'frontend') {
		firstButton = (
			<a href={props.websites.websiteLink} target='_blank' rel='noopener noreferrer'>
				<FontAwesomeIcon icon='desktop' />
			</a>
		);
	} else if (props.websites.type === 'document') {
		firstButton = (
			<a href={props.websites.documentDownloadLink} download>
				<FontAwesomeIcon icon='file-pdf' />
			</a>
		);
	} else if (props.websites.type === 'both') {
		firstButton = (
			<div className='flex'>
				<a href={props.websites.documentDownloadLink} download>
					<FontAwesomeIcon icon='file-pdf' />
				</a>
				<a href={props.websites.websiteLink} target='_blank' rel='noopener noreferrer'>
					<FontAwesomeIcon icon='desktop' />
				</a>
			</div>
		);
	} else {
		firstButton = '';
	}

	return (
		<div className='card'>
			<div className='face face1'>
				<div className='content'>
					<img src={props.websites.screenshotLink} alt='test' />
					<div className='heading_container flex justify-between'>
						<h3 className='text-white w-1/2'>{props.websites.name}</h3>
						<div className='techlogos flex justify-center flex-wrap'>{logos}</div>
					</div>
				</div>
			</div>
			<div className='face face2'>
				<div className='content'>
					<p>{props.websites.description}</p>
					<div className='actions flex justify-end'>
						{firstButton}
						<a href={props.websites.github} target='_blank' rel='noopener noreferrer'>
							<FontAwesomeIcon icon='code' />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
