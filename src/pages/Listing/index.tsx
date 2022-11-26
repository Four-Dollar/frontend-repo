import React from 'react';
import styled from 'styled-components';

import {
	DescriptionInput,
	TitleInput,
	Horizon,
	DragScaleBar,
	InputPrice,
} from 'components';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	padding: 32px 40px 64px 72px;
	gap: 8px;
	width: fit-content;
	height: 90vh;
`;

export function Listing() {
	return (
		<Container>
			<TitleInput />
			<Horizon />
			<DescriptionInput />
			<Horizon />
			<DragScaleBar></DragScaleBar>
			<InputPrice />
		</Container>
	);
}
