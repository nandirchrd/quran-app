import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
	const [search, setSearch] = useState<string | undefined>('');

	const handleInputSearch = (
		event: React.ChangeEvent<HTMLInputElement> | undefined
	) => {
		setSearch(event?.target.value);
	};
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		// Preventing the page from reloading
		event.preventDefault();
	};
	return (
		<form className='search mb-5' onSubmit={handleSubmit}>
			<div className='container mx-auto px-4 relative'>
				<input
					className='w-full rounded-xl py-1 px-2 focus:outline-none'
					type='text'
					value={search}
					onChange={(e) => handleInputSearch(e)}
					placeholder='Search Surah'
				/>
				<button
					type='submit'
					className='absolute right-6 top-1/2 -translate-y-[50%]'>
					<BsSearch />
				</button>
			</div>
		</form>
	);
};

export default Search;
