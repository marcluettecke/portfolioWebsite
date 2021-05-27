import React from 'react';
import content from '../content';
import './Stack.css';

import TechLogo from './UI/TechLogo';

export default function Stack() {
	return (
		<div className='stack_container'>
			<div className='flex flex-col justify-center' id='stack_logos'>
				<div className='flex flex-wrap justify-center align-middle'>
					{content.stack.tech.map((tech, index) => {
						return (
							<TechLogo
								index={index}
								image={tech.img}
								alt={tech.alt}
								key={tech.alt}
								section={'stack'}
								// width={'7.5rem'}
								// height={'7.5rem'}
								// marginX={'20'}
								// marginY={'48'}
								documentation={tech.documentation}
							/>
						);
					})}
				</div>
			</div>
			<div className='pr-20 ml-10 layoutImage_stack_container'>
				<img src={content.stack.layoutImage} alt='Test' className='layoutImage_stack' />
			</div>
		</div>
	);
}
