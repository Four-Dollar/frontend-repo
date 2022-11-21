import React from 'react';
import styled from 'styled-components';

const TestDiv = styled.div`
	background-color: tomato;
`;

function App() {
	return (
		<>
			<TestDiv>Hello world</TestDiv>
			<h1 className="text-3xl font-bold underline text-red-500">
				Hello world!
			</h1>
		</>
	);
}

export default App;
