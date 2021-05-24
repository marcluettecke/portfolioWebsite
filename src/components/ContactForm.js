import React from 'react';
import Modal from './UI/Modal';
import './ContactForm.css';
import content from '../content/index';
import Button from './UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import classes from './ContactForm.module.css';

const ContactForm = props => {
	return (
		<Modal onClose={props.onClose}>
			<div className='form-container'>
				<div className='contact_info'>
					<h4 className='contact_heading'>Contact information</h4>
					<p className='contact_text'>{content.contactForm.freeText}</p>
					<div className='icon_text'>
						<a href='tel:+4917621883495'>
							<FontAwesomeIcon icon='phone' className='icon' />
							<span className='contact_detail_text'>
								{content.contactForm.contactInfo.phone}
							</span>
						</a>
					</div>
					<div className='icon_text'>
						<a href='mailto:marc.luettecke1@gmail.com'>
							<FontAwesomeIcon icon={['far', 'envelope']} className='icon' />
							<span className='contact_detail_text'>
								{content.contactForm.contactInfo.email}
							</span>
						</a>
					</div>
					<div className='icon_text'>
						<a
							href='https://www.google.de/maps/place/Hamm/@51.6613332,7.7660211,12z/data=!3m1!4b1!4m5!3m4!1s0x47b9715892e844d5:0x427f28131548770!8m2!3d51.6738583!4d7.8159817'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FontAwesomeIcon icon='map-marker-alt' className='icon' />
							<span className='contact_detail_text'>
								{content.contactForm.contactInfo.address}
							</span>
						</a>
					</div>
					<div className='social_media'>
						<a
							href='https://github.com/marcluettecke'
							target='_blank'
							rel='noopener noreferrer'
							className='icon_circle'
						>
							<FontAwesomeIcon
								icon={['fab', 'github']}
								className='social_media_icon'
							/>
						</a>
						<a
							href='https://twitter.com/mluettecke1'
							target='_blank'
							rel='noopener noreferrer'
							className='icon_circle'
						>
							<FontAwesomeIcon
								icon={['fab', 'twitter']}
								className='social_media_icon'
							/>
						</a>
						<a
							href='https://www.linkedin.com/in/marc-luettecke/'
							target='_blank'
							rel='noopener noreferrer'
							className='icon_circle'
						>
							<FontAwesomeIcon
								icon={['fab', 'linkedin']}
								className='social_media_icon'
							/>
						</a>
						<a
							href='https://www.xing.com/profile/Marc_Luettecke2'
							target='_blank'
							rel='noopener noreferrer'
							className='icon_circle'
						>
							<FontAwesomeIcon icon={['fab', 'xing']} className='social_media_icon' />
						</a>
					</div>
				</div>
				<form>
					<div className='form-group' id='first_name_field'>
						<label htmlFor='firstname'>First Name</label>
						<input type='text' id='firstname' />
					</div>
					<div className='form-group' id='last_name_field'>
						<label htmlFor='lastname'>Last Name</label>
						<input type='text' id='lastname' />
					</div>
					<div className='form-group' id='email_field'>
						<label htmlFor='email'>E-Mail</label>
						<input type='email' id='email' />
					</div>
					<div className='form-group' id='phone_field'>
						<label htmlFor='phone'>Phone #</label>
						<input type='tel' id='phone' />
					</div>
					<div className='form-group' id='message_field'>
						<label htmlFor='message'>Message</label>
						<textarea id='message' />
					</div>
					<div id='button_field' className='right'>
						<Button
							linkTo={'https://cvmarcluettecke.netlify.app/'}
							text={content.contactForm.buttonText}
							width={content.contactForm.buttonTwWidth}
							onClick={props.onShowForm}
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};
export default ContactForm;
