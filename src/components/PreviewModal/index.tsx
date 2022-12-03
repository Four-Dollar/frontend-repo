import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.18);
	z-index: 1000;
	backdrop-filter: blur(10px);
`;

const PreviewModalImage = styled.img`
	position: fixed;
	width: 500px;
	height: 600px;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	object-fit: cover;
`;

interface Props {
	src: string;
	alt: string;
	onClick: () => void;
}

export function PreviewModal({ src, alt, onClick }: Props) {
	return (
		<Container onClick={onClick}>
			<PreviewModalImage src={src} alt={alt} onClick={onClick} />
		</Container>
	);
}
