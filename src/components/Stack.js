import React from 'react';
import content from '../content';
import './Stack.css';

import TechLogo from './UI/TechLogo';

export default function Stack() {
	return (
		<div className='stack_container'>
			<div className='mx-auto max-w-screen-lg' id='stack'>
				<div className='flex flex-col items-center justify-around font-dosis'>
					<div className='flex flex-wrap justify-center mt-10'>
						{content.stack.tech.map((tech, index) => {
							return <TechLogo index={index} image={tech.img} alt={tech.alt} />;
						})}
					</div>
				</div>
			</div>
			<div className='pr-20 ml-10'>
				<img src={content.stack.layoutImage} alt='Test' className='layoutImage_stack' />
			</div>
		</div>
	);
}
