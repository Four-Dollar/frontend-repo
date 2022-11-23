import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.section`
	display: flex;
	flex-direction: column;
	padding: 64px;
	gap: 8px;
	width: fit-content;
	height: 90vh;
`;

const TitleInput = styled.input`
	font-weight: 600;
	font-size: 48px;
	width: 546px;
	outline: none;
	color: #111111;

	&::placeholder {
		color: #111111;
	}
`;

const DescriptionInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

const DescriptionInput = styled.textarea`
	font-weight: 500;
	font-size: 22px;
	line-height: 36px;
	resize: none;
	outline: none;
	height: 300px;
	color: #111111;

	&::placeholder {
		color: #a2a2a2;
	}
`;

const DescriptionByteLimit = styled.div`
	font-weight: 500;
	font-size: 22px;
	line-height: 36px;
	text-align: center;
	margin-left: auto;

	color: #a2a2a2;
`;

export function Listing() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [byte, setByte] = useState(0);

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const onChangeDescription = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setDescription(event.target.value);
		setByte(event.target.value.length);
	};

	return (
		<Container>
			<TitleInput
				placeholder="제목을 입력해주세요"
				value={title}
				onChange={onChangeTitle}
				spellCheck={false}
			/>
			<DescriptionInputContainer>
				<DescriptionInput
					placeholder="사진 및 상품에 대한 자세한 게시글 내용을 작성해주세요.&#10;(가품 및 판매금지 물품은 게시가 제한될 수 있습니다.)"
					value={description}
					onChange={onChangeDescription}
					spellCheck={false}
				></DescriptionInput>
				<DescriptionByteLimit>{byte} / 1000</DescriptionByteLimit>
			</DescriptionInputContainer>
		</Container>
	);
}
