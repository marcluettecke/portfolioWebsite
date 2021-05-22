import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import content from '../content/index';

const Footer = props => {
	return (
		<div className='footer-basic text-gray-500 flex justify-center'>
			<footer>
				<div class='social'>
					<a href='#'>
						<FontAwesomeIcon icon='desktop' />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={['fab', 'github']} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={['fab', 'linkedin']} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={['fab', 'xing']} />
					</a>
				</div>
				<p className='copyright max-w-lg'>{content.footer.text}</p>
			</footer>
		</div>
	);
};
export default Footer;
