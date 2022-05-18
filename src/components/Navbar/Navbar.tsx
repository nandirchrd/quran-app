import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Search from '../Search/Search';

interface IProps {
	back?: boolean;
}
const Navbar: React.FC<IProps> = ({ back }) => {
	const navigate = useNavigate();
	const [toggleSearch, setToggleSearch] = useState(false);

	const handleToggleSearch = () => {
		setToggleSearch(!toggleSearch);
	};
	return (
		<nav className='w-full mt-5 mb-5 text-lg font-medium'>
			{/* NAV CONTAINER */}
			<div className='container grid grid-cols-3 mx-auto p-4'>
				<span className='flex items-center justify-start'>
					{back ? (
						<BiArrowBack
							cursor='pointer'
							onClick={() => navigate('/')}
							size={25}
						/>
					) : (
						<GiHamburgerMenu />
					)}
				</span>
				<span className='flex min-w-max items-center justify-center'>
					QURAN APP
				</span>
				<span className='flex items-center justify-end'>
					{back && toggleSearch && (
						<MdClose onClick={handleToggleSearch} />
					)}
					{back && !toggleSearch && (
						<BsSearch onClick={handleToggleSearch} />
					)}
				</span>
			</div>
			{toggleSearch && <Search />}
		</nav>
	);
};

export default Navbar;
