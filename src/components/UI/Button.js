import React from 'react';
import './Button.scss';

const Button = props => {
	return (
		// <a href={props.linkTo}>
		<div className={`button-container-1 w-${props.width}`}>
			<span className='mas'>{props.text}</span>
			<button id='work' type='button' name='Hover' onClick={props.onClick}>
				{props.text}
			</button>
		</div>
		// </a>
	);
};
export default Button;
