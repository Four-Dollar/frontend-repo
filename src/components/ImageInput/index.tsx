import React, { ChangeEvent, useState } from 'react';
import { Removebg } from 'removebg';
import { useListingStore } from 'stores';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;
const ImagePreview = styled.img`
	width:100%;
	height:100%;
	margin-left:10px;
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

const ButtonPrev = styled.button`
	display: block; 
	background-color: blue;
	color: black;
	margin-top: 10%;
	border-radius: 50%;
	width: 30px;
	height: 30px; 
`;
const ImageContainer = styled.div`
	display: flex;
	border-radius: 10px;
	box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);	
	justift-content: center;
	padding:10%;
	background-color: white;
	width:500px;
	height:400px;
`;
const ButtonNext = styled.button`
	display: block; 
	background-color: red;
	color: black;
	margin-top: 10%;	
	border-radius: 50%;
	width: 30px;
	height: 30px; 
`;


const PagenationContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top:20px;
	gap: 10px;
`;

const PagenationImage = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 16px;
`;

export function ImageInput() {
	const [imageSrc, setImageSrc] = useState('../assets/images/plus-icon');
	const [imageList, setImageList] = useState<string[]>([]);
	const [pageIndex, setPageIndex] = useState(0);
	const [pageNum,setPageNum] = useState(1);
	const MAX_PAGE = Math.ceil(imageList.length/3);
	//imageView.length = 3; 
	const [imageFileList, setImageFileList] = useListingStore((state) => [
		state.pictures,
		state.setPictures,
	]);

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			// eslint-disable-next-line prefer-const
			for (let file of Array.from(event.target?.files)) {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = (event) => {
					const source = event.target?.result as string;
					//const finalResult = Removebg(source);
					setImageList((prev) => [...prev,source]);
          setImageFileList([...imageFileList, file]);
				};
			}
		}
	};

	const onClickPrev = (event: React.MouseEvent<HTMLButtonElement>) =>{
		if(pageNum > 1){
			setPageNum((prev)=>{
				prev =prev-1;
				setPageIndex((prev-1)*3);
				return prev;
			})
		}
	};
	const onClickNext = (event: React.MouseEvent<HTMLButtonElement>) =>{
		if(pageNum < MAX_PAGE){
			setPageNum((prev)=>{
				prev = prev+1;
				setPageIndex((prev-1)*3);
				return prev;
			})
		}
	};
	const onClickImage = (event: React.MouseEvent<HTMLImageElement>) => {
		setImageSrc((event.target as HTMLImageElement).src);
	};
	//console.log(imageList?.slice(pageIndex, pageIndex+3));
	console.log(pageIndex);
	return (
		<Container>
			<ImageContainer className="shadow-m">
			<ImagePreview src={imageSrc}/>

			</ImageContainer>
			
			<PagenationContainer>
			<ButtonPrev onClick={onClickPrev}/>

				{imageList?.slice(pageIndex, pageIndex+3).map((item) => (
					<PagenationImage
						key={item}
						src={item}
						alt={item}
						onClick={onClickImage}
					/>
				))}
				<ButtonNext onClick={onClickNext}/>
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
