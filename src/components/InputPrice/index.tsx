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

	const [bid, setBid] = useListingStore((state) => [state.bid, state.setBid]);

	const onChangeBid = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target.value;
		const inputNum = target;
		const testnum = inputNum
			.replace(/[^\d]+/g, '')
			.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

		setBid(testnum);
	};

	const callListingApi = () => {
		const userId = listingStore.userId;
		const title = listingStore.title;
		const description = listingStore.description;
		const bid = listingStore.bid;
		const deadline = listingStore.deadline;
		const pictures = listingStore.pictures;

		const formData = new FormData();

		formData.append('userId', String(userId));
		formData.append('title', title);
		formData.append('description', description);
		for (const file of pictures) {
			formData.append('file', file);
		}
		formData.append('bid', bid.replace(/,/g, ''));
		formData.append('deadline', String(deadline));

		axios
			.post(`${apiUrl}/used-goods`, formData)
			.then((res) => console.log(res));
	};

	return (
		<Container>
			<Price
				type="text"
				placeholder="금액을 입력해주세요"
				onChange={onChangeBid}
				value={bid}
				maxLength={11}
			></Price>
			<Register onClick={callListingApi}>상품 등록하기</Register>
		</Container>
	);
};
