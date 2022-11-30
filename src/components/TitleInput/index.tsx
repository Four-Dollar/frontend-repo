import React, { useState } from 'react';
import styled from 'styled-components';

import { TextArea } from 'components/common';
import { useListingStore } from 'stores';

const Container = styled.div`
	width: 546px;
	height: fit-content;
`;

const TitleTextArea = styled(TextArea)`
	font-weight: 600;
	font-size: 40px;
	overflow: hidden;
	color: #111111;

	&::placeholder {
		color: #a2a2a2;
	}
`;

export const TitleInput = () => {
	const [title, setTitle] = useListingStore((state) => [
		state.title,
		state.setTitle,
	]);
	const [titleByteCheck, setTitleByteCheck] = useState(0);

	const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		autoTitleHeightChange(event.target);

		if (titleByteCheck < 50) {
			setTitle(event.target.value);
			setTitleByteCheck(event.target.value.length);
		} else if (titleByteCheck >= 50) {
			setTitle(title.substring(0, 50));
			setTitleByteCheck(49);
		}
	};

	const autoTitleHeightChange = (target: EventTarget & HTMLTextAreaElement) => {
		if (target !== null) {
			target.style.height = 'auto';
			target.style.height = `${target.scrollHeight}px`;
		}
	};

	return (
		<Container>
			<TitleTextArea
				rows={1}
				placeholder="제목을 입력해주세요"
				value={title}
				onChange={onChangeTitle}
			/>
		</Container>
	);
};
