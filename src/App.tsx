import React from 'react';

import { Header, GlobalStyle } from 'components';
import { Listing } from 'pages';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path="/listing" element={<Listing />} />
			</Routes>
		</>
	);
}

export default App;
