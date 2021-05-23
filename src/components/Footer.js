import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './UI/Button';
import content from '../content/index';

const Footer = props => {
	return (
		<div className='footer-basic text-gray-500 flex justify-center'>
			<footer>
				<div
					className='mb-10'
					data-aos='fade-up'
					data-aos-mirror='true'
					// data-aos-delay='200'
					data-aos-duration='3000'
				>
					<Button
						linkTo={'https://cvmarcluettecke.netlify.app/'}
						text={content.footer.buttonText}
						width={content.footer.buttonTwWidth}
					/>
				</div>
				<div
					className='social'
					data-aos='fade-up'
					data-aos-mirror='true'
					// data-aos-delay='200'
					data-aos-duration='3000'
				>
					<a href='mailto:marc.luettecke1@gmail.com'>
						<FontAwesomeIcon icon='envelope' />
					</a>
					<a href='tel:+4917621883495'>
						<FontAwesomeIcon icon='phone' />
					</a>
					<a href='https://github.com/marcluettecke'>
						<FontAwesomeIcon icon={['fab', 'github']} />
					</a>
					<a href='https://twitter.com/mluettecke1'>
						<FontAwesomeIcon icon={['fab', 'twitter']} />
					</a>
					<a href='https://www.linkedin.com/in/marc-luettecke/'>
						<FontAwesomeIcon icon={['fab', 'linkedin']} />
					</a>
					<a href='https://www.xing.com/profile/Marc_Luettecke2'>
						<FontAwesomeIcon icon={['fab', 'xing']} />
					</a>
				</div>

				<p className='copyright max-w-lg'>{content.footer.text}</p>
			</footer>
		</div>
	);
};
export default Footer;
