import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/images/Logo.svg';

const Container = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px;
	height: 72px;
`;
const LogoContainer = styled.div`
	width: fit-content;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 4px;
`;
const LogoText = styled.div`
	font-weight: 800;
	font-size: 22px;
	line-height: 42px;
	letter-spacing: 0.05em;
	color: #000000;
`;
const UserIdInput = styled.input`
	font-weight: 500;
	font-size: 18px;
	line-height: 36px;
	text-align: justify;
	margin-left: auto;
	color: #a2a2a2;
`;

export function Header() {
	return (
		<Container>
			<LogoContainer>
				<Logo />
				<LogoText>FourDollar</LogoText>
			</LogoContainer>
			<UserIdInput placeholder="UserId 입력 (임시)" />
		</Container>
	);
}
