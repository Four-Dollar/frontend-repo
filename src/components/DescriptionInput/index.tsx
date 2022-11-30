import React, { useState } from 'react';
import styled from 'styled-components';

import { TextArea } from 'components/TextArea';
import { useListingStore } from 'stores';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

const DescriptionTextArea = styled(TextArea)`
	font-weight: 500;
	font-size: 22px;
	line-height: 36px;
	color: #111111;
	flex-grow: 1;
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

export const DescriptionInput = () => {
	const [description, setDescription] = useListingStore((state) => [
		state.description,
		state.setDescription,
	]);
	const [descriptionByteCheck, setDescriptionByteCheck] = useState(0);

	const onChangeDescription = (
		event: React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		if (descriptionByteCheck < 1000) {
			setDescription(event.target.value);
			setDescriptionByteCheck(event.target.value.length);
		} else if (descriptionByteCheck >= 1000) {
			setDescription(description.substring(0, 1000));
			setDescriptionByteCheck(999);
		}
	};

	return (
		<Container>
			<DescriptionTextArea
				placeholder="사진 및 상품에 대한 자세한 게시글 내용을 작성해주세요.&#10;(가품 및 판매금지 물품은 게시가 제한될 수 있습니다.)"
				value={description}
				onChange={onChangeDescription}
			/>
			<DescriptionByteLimit>{descriptionByteCheck} / 1000</DescriptionByteLimit>
		</Container>
	);
};
