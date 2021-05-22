import React from 'react';
import './Button.scss';

const Button = props => {
	return (
		<div class='button-container-1'>
			<span class='mas'>{props.text}</span>
			<button id='work' type='button' name='Hover'>
				{props.text}
			</button>
		</div>
	);
};
export default Button;
