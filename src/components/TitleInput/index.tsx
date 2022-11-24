import React, { useState } from 'react';

import { TextAreaInput } from 'components/TextAreaInput';

import styled from 'styled-components';

const Container = styled.div`
	width: 546px;
	height: fit-content;
`;

export const TitleInput = () => {
	const [title, setTitle] = useState('');
	const [titleByteCheck, setTitleByteCheck] = useState(0);

	const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		autoTitleHeightChange(event.target);

		if (titleByteCheck < 50) {
			setTitle(event.target.value);
			setTitleByteCheck(event.target.value.length);
		} else if (titleByteCheck >= 50) {
			setTitle((prev) => prev.substring(0, 50));
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
			<TextAreaInput
				rows={1}
				componentType="titleInput"
				placeHolder="제목을 입력해주세요"
				value={title}
				onChange={onChangeTitle}
			/>
		</Container>
	);
};
