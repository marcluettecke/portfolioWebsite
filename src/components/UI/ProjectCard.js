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
				width={'3.5rem'}
				height={'3.5rem'}
				marginX={''}
				marginY={'25'}
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
						<h3 className='text-white w-3/5'>{props.websites.name}</h3>
						<div className='techlogos flex justify-end'>{logos}</div>
					</div>
				</div>
			</div>
			<div className='face face2'>
				<div className='content'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque
						minus iste veritatis provident at. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cum cumque minus iste veritatis provident at. Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus
						iste veritatis provident at. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Quas cum cumque minus iste veritatis provident at. iste
						veritatis provident at. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Quas cum cumque minus iste veritatis provident at. iste veritatis
						provident at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
						cum cumque minus iste veritatis provident at.
					</p>
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
