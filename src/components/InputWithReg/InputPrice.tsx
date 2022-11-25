import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Price = styled.input`
	position: absolute;
	margin-top: 2.5em;
	margin-left: 8em;
	font-size: 30px;
	width: 9em;
	font-color: #6f6f6f;
	font-family: 'Poppins', sans-serif;
	font-weight: bolder;
	outline: none;
	::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
`;
const Register = styled.button`
	position: absolute;
	margin-left: 27em;
	margin-top: 3.5em;
	padding: 0.5em;
	background-color: black;
	color: white;
	font-size: 20px;
	border-radius: 10px;
	font-family: 'Poppins', sans-serif;
	font-weight: bold;
	box-shadow: 0px 2px 3px gray;
	text-align: center;
`;

const InputPrice = () => {
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
		<>
			<Price
				type="text"
				placeholder="금액을 입력해주세요"
				onChange={onChangePrice}
				value={price}
				maxLength={10}
			></Price>
			<Register>상품 등록하기</Register>
		</>
	);
};

export default InputPrice;
