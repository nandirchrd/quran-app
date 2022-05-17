import React from 'react';
import { Navbar } from '../components';
import { useParams } from 'react-router-dom';

const Surah = () => {
	const { surah } = useParams();
	console.log(surah);
	return (
		<div>
			<Navbar />
		</div>
	);
};

export default Surah;
