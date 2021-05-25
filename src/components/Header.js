import React, { useEffect, useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Typical from 'react-typical';
import Button from './UI/Button';

import content from '../content/index';

export default function Header(props) {
	const [animated, setAnimated] = useState(false);
	useEffect(() => {
		setAnimated(true);
	}, []);

	return (
		<div
			className='min-h-screen flex items-center justify-center'
			style={{
				background: '#091c29'
			}}
		>
			<div className='w-9/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
				<div className='w-full md:w-2/5 flex justify-center '>
					<img src={content.header.img} alt={content.header.imgAlt} />
				</div>
				<div className='text-white font-dosis text-center md:text-left'>
					<h2
						className={`${
							animated ? '' : 'translate-y-10 opacity-0'
						}  transform transition duration-2000 ease-in-out text-3xl md:text-5xl font-bold`}
					>
						{content.header.text[0]}
						<br />
						{content.header.text[1]}
					</h2>
					<h1
						className={`${
							animated ? '' : 'translate-y-10 opacity-0'
						}  transform transition duration-2000 ease-in-out font-bold text-2xl text-gray-500`}
					>
						{content.header.text[2]}{' '}
						<Typical
							steps={content.header.typical}
							loop={Infinity}
							className='inline-block'
						/>
					</h1>
					<div className='flex justify-center sm:inline-block  space-x-4 mb-10'>
						<div className='mt-10'>
							<Button
								linkTo={'https://cvmarcluettecke.netlify.app/'}
								text={content.header.btnTextLeft}
								width={content.header.btnTwWidth}
								onClick={props.onLinkToCv}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
