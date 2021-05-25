import React from 'react';
import content from '../content';
import './Navigation.css';

const Navigation = props => {
	return (
		<div
			style={{
				background: '#091c29'
				// background: 'linear-gradient(90deg, rgba(4,0,64,1) 65%, rgba(30,30,153,1) 100%)'
			}}
		>
			<div className='flex items-center justify-between w-10/12 mx-auto py-3 text-white font-dosis'>
				<img
					src={content.nav.logo}
					alt=''
					className='w-12 h-12 inline-block rounded-full'
				/>

				{/* <h1 className="text-3xl font-bold">
          {content.nav.logo}{' '}
          <span className="w-3 h-3 bg-red-500 inline-block rounded-full"></span> */}
				{/* </h1> */}
				<div>
					{content.nav.links.map((link, index) => {
						return (
							<span
								key={index}
								className='text-xl mr-4 hover:text-indigo-500'
								onClick={props.onShowForm}
								id='contact_form_link'
							>
								{link.text}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Navigation;
