import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	padding-top: 10px;
	align-items: center;
`;

const Price = styled.input`
	font-size: 32px;
	color: #6f6f6f;
	font-weight: bold;
	outline: none;
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;

const Register = styled.button`
	background-color: black;
	color: white;
	font-size: 22px;
	border-radius: 10px;
	font-weight: bold;
	box-shadow: 0px 2px 3px gray;
	text-align: center;
	padding: 16px;
	height: fit-content;
	margin-left: auto;
`;

export const InputPrice = () => {
	const [price, setPrice] = useState('');

	const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target.value;
		const inputNum = target;
		const testnum = inputNum
			.replace(/[^\d]+/g, '')
			.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

		setPrice(testnum);
	};

	return (
		<Container>
			<Price
				type="text"
				placeholder="금액을 입력해주세요"
				onChange={onChangePrice}
				value={price}
				maxLength={11}
			></Price>
			<Register>상품 등록하기</Register>
		</Container>
	);
};
