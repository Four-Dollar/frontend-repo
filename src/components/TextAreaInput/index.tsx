import React from 'react';
import styled, { css } from 'styled-components';

interface StyleProps {
	componentType?: string;
}

const TextArea = styled.textarea<StyleProps>`
	resize: none;
	outline: none;
	border: none;
	color: #111111;

	${(props) =>
		props.componentType === 'descriptionInput' &&
		css`
			font-weight: 500;
			font-size: 22px;
			line-height: 36px;
			height: 300px;
			color: #111111;

			&::placeholder {
				color: #a2a2a2;
			}
		`}

	${(props) =>
		props.componentType === 'titleInput' &&
		css`
			font-weight: 600;
			font-size: 48px;
			overflow: hidden;
			color: #111111;

			&::placeholder {
				color: #111111;
			}
		`}
`;

interface Props {
	rows?: number;
	componentType?: string;
	placeHolder?: string;
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value?: string;
}

export function TextAreaInput({
	rows,
	componentType,
	placeHolder,
	value,
	onChange,
}: Props) {
	return (
		<TextArea
			componentType={componentType}
			placeholder={placeHolder}
			value={value}
			onChange={onChange}
			spellCheck={false}
			rows={rows}
		/>
	);
}
