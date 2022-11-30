import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	gap: 18px;
	position: absolute;
	left: 32px;
	bottom: 16px;
`;

interface DotStyleProps {
	dotIndex: number;
}

const Dot = styled.div<DotStyleProps>`
	width: 14px;
	height: 14px;
	border-radius: 50%;
	background: ${(props) => props.dotIndex === 1 && '#b6b6b6'};
	background: ${(props) => props.dotIndex === 2 && '#999999'};
	background: ${(props) => props.dotIndex === 3 && '#7c7c7c'};
`;

export function Dots() {
	return (
		<Container>
			<Dot dotIndex={1} />
			<Dot dotIndex={2} />
			<Dot dotIndex={3} />
		</Container>
	);
}
