import React from 'react';
import styled from 'styled-components';

import {
	DescriptionInput,
	TitleInput,
	DragScaleBar,
	InputPrice,
	ImageInput,
} from 'components';

import { Horizon } from 'components/common';

const Container = styled.main`
	display: flex;
	height: 90vh;
	padding: 64px;
	gap: 32px;
`;

const LeftContainer = styled.section`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 50%;
	height: 100%;
`;

const RightContainer = styled.section`
	width: 50%;
	height: 100%;
`;

export function Listing() {
	return (
		<Container>
			<LeftContainer>
				<TitleInput />
				<Horizon />
				<DescriptionInput />
				<Horizon />
				<DragScaleBar></DragScaleBar>
				<InputPrice />
			</LeftContainer>
			<RightContainer>
				<ImageInput />
			</RightContainer>
		</Container>
	);
}
