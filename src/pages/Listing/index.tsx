import React from 'react';

import { DescriptionInput } from 'components/DescriptionInput';
import { Horizon } from 'components/Horizon';
import { TitleInput } from 'components/TitleInput';
import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	padding: 64px;
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
		</Container>
	);
}
