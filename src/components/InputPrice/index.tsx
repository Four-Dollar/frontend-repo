import React from 'react';
import { useListingStore } from 'stores';
import styled from 'styled-components';
import { apiUrl } from 'common/apiUrl';
import axios from 'axios';

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
	const listingStore = useListingStore();

	const [price, setPrice] = useListingStore((state) => [
		state.price,
		state.setPrice,
	]);
	// const [price, setPrice] = useState('');

	const onChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target.value;
		const inputNum = target;
		const testnum = inputNum
			.replace(/[^\d]+/g, '')
			.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

		setPrice(testnum);
	};

	const callListingApi = () => {
		const title = listingStore.title;
		const description = listingStore.description;
		const price = listingStore.price;
		const deadline = listingStore.deadline;

		axios
			.post(`${apiUrl}/used-goods`, {
				title: title,
				description: description,
				bid: price,
				deadline: deadline,
			})
			.then((res) => console.log(res));
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
			<Register onClick={callListingApi}>상품 등록하기</Register>
		</Container>
	);
};
