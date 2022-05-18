import React from 'react';
import { Navbar, Surah as CompSurah } from '../components';
import { useParams } from 'react-router-dom';

const Surah = () => {
	const { surah } = useParams();

	return (
		<div>
			<Navbar back={true} />
			<CompSurah surah={surah} />
		</div>
	);
};

export default Surah;
