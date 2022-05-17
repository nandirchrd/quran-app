import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	return (
		<nav className='w-full mt-5 mb-5 text-lg font-medium'>
			{/* NAV CONTAINER */}
			<div className='container grid grid-cols-3 mx-auto p-4'>
				<span className='flex items-center justify-start'>
					<GiHamburgerMenu />
				</span>
				<span className='flex min-w-max items-center justify-center'>
					QURAN APP
				</span>
				<span className='flex items-center justify-end'></span>
			</div>
		</nav>
	);
};

export default Navbar;
