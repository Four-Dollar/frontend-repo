import React, { useState } from 'react';

import { ComponentMeta } from '@storybook/react';

import { TextAreaInput } from './index';

export default {
	title: 'TextAreaInput',
	component: TextAreaInput,
} as ComponentMeta<typeof TextAreaInput>;

export const Description = () => {
	const [description, setDescription] = useState('');

	const onChangeDescription = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		setDescription(event.target.value);
	};

	return (
		<TextAreaInput
			componentType="descriptionInput"
			placeHolder="사진 및 상품에 대한 자세한 게시글 내용을 작성해주세요.&#10;(가품 및 판매금지 물품은 게시가 제한될 수 있습니다.)"
			value={description}
			onChange={onChangeDescription}
		/>
	);
};

export const Title = () => {
	const [title, setTitle] = useState('');

	const onChangeTitle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const target = event.target;
		setTitle(target.value);
		autoTitleHeightChange(target);
	};

	const autoTitleHeightChange = (target: EventTarget & HTMLTextAreaElement) => {
		if (target !== null) {
			target.style.height = 'auto';
			target.style.height = `${target.scrollHeight}px`;
		}
	};

	return (
		<TextAreaInput
			componentType="titleInput"
			placeHolder="제목을 입력해주세요"
			value={title}
			onChange={onChangeTitle}
		/>
	);
};
