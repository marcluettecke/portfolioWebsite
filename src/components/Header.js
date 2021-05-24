import React, { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
// import { Link as ScrollLink } from 'react-scroll';
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
				// background: 'linear-gradient(90deg, rgba(4,0,64,1) 65%, rgba(30,30,153,1) 100%)'
			}}
		>
			<div className='w-10/12 mx-auto flex flex-col md:flex-row-reverse items-center justify-between'>
				<div className='w-full md:w-2/5'>
					<LazyLoadImage
						src={content.header.img}
						// effect='blur'
					/>
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
					<div className='flex self-start space-x-4 mb-10'>
						{/* <ScrollLink to='#' smooth={true}> */}
						<div className='mt-10'>
							<Button
								linkTo={'https://cvmarcluettecke.netlify.app/'}
								text={content.header.btnTextLeft}
								width={content.header.btnTwWidth}
								onClick={props.onLinkToCv}
							/>
						</div>
						{/* <button className='bg-gray-500 hover:bg-gray-400 px-10 py-3 text-xl uppercase mt-10 rounded-lg'>
								{content.header.btnTextLeft}
							</button> */}
						{/* </ScrollLink> */}
					</div>
				</div>
			</div>
		</div>
	);
}
