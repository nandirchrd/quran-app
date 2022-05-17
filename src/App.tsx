import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Home from './pages/home';
import Surah from './pages/surah';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:surah' element={<Surah />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</Router>
	);
}

export default App;
