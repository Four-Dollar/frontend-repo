import React from 'react';
import styled from 'styled-components';

import DragScaleBar from 'components/dragBar/DragScaleBar';
import { Header } from 'components';

function App() {
	return (
		<>
			<DragScaleBar></DragScaleBar>
			<Header />
		</>
	);
}

export default App;
