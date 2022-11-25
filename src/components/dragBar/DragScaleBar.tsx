import { mainModule } from 'process';
import React, { useState, MouseEvent } from 'react';
import styled, { css } from 'styled-components';

const Deadline = styled.p`
	position: absolute;
	margin-left: 25em;
	font-weight: bold;
	font-size: 1em;
	font-family: 'Poppins', sans-serif;
`;
const DragBar = styled.input`
	position: absolute;
	margin-top: 2em;
	margin-left: 18em;
	width: 20em;
	height: 1em;
	appearance: none;
	background: transparent;
	&::-webkit-slider-thumb {
		appearance: none;
		border: 2px solid white;
		height: 25px;
		width: 25px;
		opacity: 0.8;
		border-radius: 50%;
		background: gray;
		cursor: pointer;
	}
	&::-webkit-slider-runnable-track {
		width: 100%;
		background: #f5f6fa;
		box-shadow: 0px 0.5px 0.75px black;
		border-radius: 1em;
	}
`;
const DeadlineArea = styled.h2`
	position: absolute;
	font-size: 1em;
	margin-top: 1.9em;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	&.first {
		margin-top: 1.9em;
		margin-left: 14em;
	}
	&.last {
		margin-top: 1.9em;
		margin-left: 39em;
	}
`;
const DeadlineDay = styled.span`
	&.firstDay {
		color: red;
		margin-right: 0.2em;
	}
	&.lastDay {
		color: green;
		margin-right: 0.2em;
	}
`;
const DragScaleBar = () => {
	const [value, setValue] = useState(0);

	const changeWidth = (event: MouseEvent<HTMLInputElement>) => {
		event.preventDefault();
		const target = event.target as HTMLInputElement;
		setValue(parseInt(target.value));
	};

	const MIN = 0;
	const MAX = 10;

	return (
		<>
			<Deadline>마감일 + {value} Day</Deadline>

			<DeadlineArea className="first">
				<DeadlineDay className="firstDay">+0</DeadlineDay>Day
			</DeadlineArea>
			<DragBar
				type="range"
				min={MIN}
				max={MAX}
				defaultValue={value}
				step="1"
				onMouseUp={changeWidth}
			/>
			<DeadlineArea className="last">
				<DeadlineDay className="lastDay">+10</DeadlineDay>Day
			</DeadlineArea>
		</>
	);
};

export default DragScaleBar;
