import React, { useState, useCallback } from 'react';
import './NavigationMenu.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import content from '../../content/index';

const NavigationMenu = () => {
	const [menuOpen, setMenuOpen] = useState(true);

	const onMenuClickHandler = useCallback(() => {
		setMenuOpen(!menuOpen);
		const navList = document.getElementById('nav__list');
		if (menuOpen) {
			navList.classList.add('active');
		} else {
			navList.classList.remove('active');
		}
	}, [menuOpen]);

	return (
		<div className='navMenu'>
			<div className='front my-3'>
				<img
					src={content.nav.logoDark}
					alt=''
					className='w-12 h-12 inline-block rounded-full ml-5'
				/>
				<div onClick={onMenuClickHandler}>
					<FontAwesomeIcon icon='border-all' className='grid_logo' size='2x' />
				</div>
			</div>
			<ul className='nav__list' id='nav__list'>
				<li className='nav__item'>
					<Link
						activeClass='test'
						to='projects_nav'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<div className='nav__link active-link'>
							<FontAwesomeIcon icon='project-diagram' size='2x' />
							<p>Projects</p>
						</div>
					</Link>
				</li>
				<li className='nav__item'>
					<Link
						activeClass='test'
						to='partners_nav'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<div className='nav__link'>
							<FontAwesomeIcon icon='user-check' size='2x' />
							<p>Partners</p>
						</div>
					</Link>
				</li>
				<li className='nav__item'>
					<Link
						activeClass='test'
						to='technologies_nav'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<div className='nav__link'>
							<FontAwesomeIcon icon='laptop-code' size='2x' />
							<p>Technologies</p>
						</div>
					</Link>
				</li>
				<li className='nav__item'>
					<Link
						activeClass='test'
						to='testimonials_nav'
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
					>
						<div className='nav__link'>
							<FontAwesomeIcon icon='thumbs-up' size='2x' />
							<p>Testimonials</p>
						</div>
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default NavigationMenu;
