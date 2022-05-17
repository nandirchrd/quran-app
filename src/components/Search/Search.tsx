import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
	return (
		<form className='search mb-5'>
			<div className='container mx-auto px-4 relative'>
				<input
					className='w-full rounded-xl py-1 px-2 focus:outline-none'
					type='text'
					placeholder='Search Surah'
				/>
				<button className='absolute right-6 top-1/2 -translate-y-[50%]'>
					<BsSearch />
				</button>
			</div>
		</form>
	);
};

export default Search;
