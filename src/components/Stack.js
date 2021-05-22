import React from 'react';
import content from '../content';

import TechLogo from './UI/TechLogo';

export default function Stack() {
	return (
		<div
			className='mb-20'
			style={
				{
					// background: '#091c29'
				}
			}
		>
			<div
				className='container mx-auto max-w-screen-lg'
				data-aos='fade-up'
				data-aos-mirror='true'
				data-aos-delay='200'
				data-aos-duration='6000'
			>
				<div
					className='flex flex-col items-center justify-around font-dosis'
					// className='min-h-screen text-white flex flex-col items-center justify-around font-dosis'
					id='stack'
				>
					{/* <h1 className='text-5xl font-bold text-center'>Techs I worked with</h1> */}
					<div className='flex flex-wrap justify-center mt-10'>
						{content.stack.tech.map((tech, index) => {
							return <TechLogo index={index} image={tech.img} alt={tech.alt} />;
						})}
					</div>
					{/* <p className='w-11/12 md:max-w-xl text-xl text-center mt-10'>
						{content.stack.desc}
					</p> */}
				</div>
			</div>
		</div>
	);
}
