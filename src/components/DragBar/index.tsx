import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

const SliderContainer = styled.div`
	display: flex;
	gap: 8px;
	width: 100%;
	justify-content: center;
`;

const Deadline = styled.p`
	font-weight: bold;
	font-size: 1em;
`;
const DragBar = styled.input`
	appearance: none;
	background: transparent;
	flex-grow: 1;
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
		background: #f5f6fa;
		box-shadow: 0px 0.5px 0.75px black;
		border-radius: 1em;
	}
`;
const DeadlineArea = styled.h2`
	font-size: 1em;
	font-weight: bold;
	&.first {
	}
	&.last {
	}
`;
const DeadlineDay = styled.span`
	&.firstDay {
		color: red;
	}
	&.lastDay {
		color: green;
	}
`;
export const DragScaleBar = () => {
	const [value, setValue] = useState(0);

	const changeWidth = (event: MouseEvent<HTMLInputElement>) => {
		event.preventDefault();
		const target = event.target as HTMLInputElement;
		setValue(parseInt(target.value));
	};

	const MIN = 0;
	const MAX = 10;

	return (
		<Container>
			<Deadline>마감일 + {value} Day</Deadline>

			<SliderContainer>
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
			</SliderContainer>
		</Container>
	);
};
