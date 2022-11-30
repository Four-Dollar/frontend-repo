import React, { ChangeEvent, useState } from 'react';
import { useListingStore } from 'stores';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;
const ImagePreview = styled.img`
	width: 60%;
	height: 60%;
	border-radius: 16px;
`;

const ButtonContainer = styled.div`
	margin-left: auto;
`;

const ButtonLabel = styled.label`
	display: block;
	background-color: black;
	color: white;
	font-size: 22px;
	border-radius: 10px;
	font-weight: bold;
	box-shadow: 0px 2px 3px gray;
	text-align: center;
	padding: 16px;
	height: fit-content;
`;

const ButtonInput = styled.input``;

const PagenationContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 10px;
`;

const PagenationImage = styled.img`
	width: 20%;
	height: 20%;
	border-radius: 16px;
`;

export function ImageInput() {
	const [imageSrc, setImageSrc] = useState('');
	const [imageList, setImageList] = useState<string[]>([]);
	const [imageFileList, setImageFileList] = useListingStore((state) => [
		state.pictures,
		state.setPictures,
	]);

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			// eslint-disable-next-line prefer-const
			for (let file of Array.from(event.target?.files)) {
				setImageFileList([...imageFileList, file]);

				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = (event) => {
					const result = event.target?.result as string;
					setImageList((prev) => [...prev, result]);
				};
			}
		}
	};

	const onClickImage = (event: React.MouseEvent<HTMLImageElement>) => {
		setImageSrc((event.target as HTMLImageElement).src);
	};

	return (
		<Container>
			<ImagePreview src={imageSrc} alt="preview-image" />
			<PagenationContainer>
				{imageList?.map((item) => (
					<PagenationImage
						key={item}
						src={item}
						alt={item}
						onClick={onClickImage}
					/>
				))}
			</PagenationContainer>
			<ButtonContainer>
				<ButtonLabel htmlFor="imgInput">업로드</ButtonLabel>
				<ButtonInput
					id="imgInput"
					type="file"
					accept="image/*"
					className="hidden"
					multiple
					onChange={changeHandler}
				/>
			</ButtonContainer>
		</Container>
	);
}
