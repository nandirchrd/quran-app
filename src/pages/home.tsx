import React from 'react';
import { Items, Navbar, Search } from '../components';

const Home = () => {
	return (
		<div className='home'>
			<Navbar />
			<Search />
			<Items />
		</div>
	);
};

export default Home;
