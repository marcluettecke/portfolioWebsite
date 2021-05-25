import React, { useState } from 'react';
import Modal from './UI/Modal';
import './ContactForm.css';
import content from '../content/index';
import Button from './UI/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useInput from '../hooks/user-input';

import { init, sendForm } from 'emailjs-com';
init('user_m5g3KSnpy7zAvQ06SPcTj');

const validateEmail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

const ContactForm = props => {
	const [contactNumber, setContactNumber] = useState('000000');

	const generateContactNumber = () => {
		const numStr = '000000' + ((Math.random() * 1000000) | 0);
		setContactNumber(numStr.substring(numStr.length - 6));
	};

	const [enteredPhone, setEnteredPhone] = useState('');

	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstName
	} = useInput(value => value.trim() !== '');
	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastName
	} = useInput(value => value.trim() !== '');
	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmail
	} = useInput(value => validateEmail(value));
	const {
		value: enteredMessage,
		isValid: enteredMessageIsValid,
		hasError: messageHasError,
		valueChangeHandler: messageChangeHandler,
		inputBlurHandler: messageBlurHandler,
		reset: resetMessage
	} = useInput(value => value.trim() !== '');

	const phoneChangeHandler = e => {
		setEnteredPhone(e.target.value);
	};

	let formIsValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid &&
		enteredMessageIsValid
	) {
		formIsValid = true;
	}

	const formSubmissionHandler = e => {
		e.preventDefault();

		if (
			!enteredFirstNameIsValid &&
			!enteredLastNameIsValid &&
			!enteredEmailIsValid &&
			!enteredMessageIsValid
		) {
			return;
		}

		generateContactNumber();
		sendForm('default_service', 'template_330lnwi', '#contact_form').then(
			function (response) {
				console.log('SUCCESS!', response.status, response.text);
			},
			function (error) {
				console.log('FAILED...', error);
			}
		);
		// console.log(enteredFirstName);
		// console.log(enteredLastName);
		// console.log(enteredEmail);
		// console.log(enteredMessage);

		resetFirstName();
		resetLastName();
		resetEmail();
		setEnteredPhone('');
		resetMessage();
	};

	const firstNameInputClasses = firstNameHasError ? 'form-group invalid' : 'form-group';
	const lastNameInputClasses = lastNameHasError ? 'form-group invalid' : 'form-group';
	const emailInputClasses = emailHasError ? 'form-group invalid' : 'form-group';
	const messageInputClasses = messageHasError ? 'form-group invalid' : 'form-group';

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
				<form id='contact_form'>
					<div className={firstNameInputClasses} id='first_name_field'>
						<label htmlFor='firstname'>First Name</label>
						<input
							type='text'
							id='firstname'
							name='firstname'
							onChange={firstNameChangeHandler}
							onBlur={firstNameBlurHandler}
							value={enteredFirstName}
						/>
						{firstNameHasError && (
							<p className='error-text'>Please enter a valid first name</p>
						)}
					</div>
					<div className={lastNameInputClasses} id='last_name_field'>
						<label htmlFor='lastname'>Last Name</label>
						<input
							type='text'
							id='lastname'
							name='lastname'
							onChange={lastNameChangeHandler}
							onBlur={lastNameBlurHandler}
							value={enteredLastName}
						/>
						{lastNameHasError && (
							<p className='error-text'>Please enter a valid last name</p>
						)}
					</div>

					<div className={emailInputClasses} id='email_field'>
						<label htmlFor='email'>E-Mail</label>
						<input
							type='email'
							id='email'
							name='email'
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={enteredEmail}
						/>
						{emailHasError && <p className='error-text'>Please enter a valid email</p>}
					</div>
					<div className='form-group' id='phone_field'>
						<label htmlFor='phone'>Phone # (optional)</label>
						<input
							type='tel'
							id='phone'
							name='phone'
							onChange={phoneChangeHandler}
							value={enteredPhone}
						/>
					</div>
					<div className={messageInputClasses} id='message_field'>
						<label htmlFor='message'>Message</label>
						<textarea
							style={{ fontSize: '1.5rem', color: 'white', fontWeight: '500' }}
							id='message'
							name='message'
							onChange={messageChangeHandler}
							onBlur={messageBlurHandler}
							value={enteredMessage}
						/>
						{messageHasError && (
							<p className='error-text-message'>Please enter a valid message</p>
						)}
					</div>
					<input type='hidden' name='contact_number' value={contactNumber} />
					<div id='button_field' className='right'>
						<Button
							text={content.contactForm.buttonText}
							width={content.contactForm.buttonTwWidth}
							onClick={formSubmissionHandler}
							disabled={!formIsValid}
						/>
					</div>
				</form>
			</div>
		</Modal>
	);
};
export default ContactForm;
