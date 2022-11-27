import React from 'react';
import { Header, GlobalStyle, Dots } from 'components';
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
			<Dots />
		</>
	);
}

export default App;
