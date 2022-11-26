import Arrow from 'components/Button/Arrow';
import Pagination from 'components/ImagePagination/pagination';
import React, { ChangeEvent, ChangeEventHandler, HTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { isMainThread } from 'worker_threads';

export default function ImageInput  (){
    const [images, setImages] = useState<File>();
    const [preview, setPreview] = useState<string>("");
    const [pgimages, setpgImages] = useState<File>();
    const [pgpreview, setpgPreview] = useState<string>("");
    
    const [pg, setPg] = useState(0);

    useEffect(()=>{
        if(images){
            const reader = new FileReader();
            reader.onloadend =()=>{
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(images);
        }
        else{
            setPreview("");
        }
    })
    const changeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    
    const imgs = [];
    let first;
    
    if(file){
    for(let i=1; i<file?.length;i++){ 
    if(file){
        setImages(file[0]);
        imgs.push(file[i]);
        console.log(file);
    }
    if(images){
    const reader = new FileReader();
            reader.onloadend =()=>{
            setPreview(reader.result as string);
            };
            reader.readAsDataURL(images);
            //reader.readAsDataURL(imgs[i]);
        }
        else{
        setPreview("");
        }
    }
    }
}

    return(
        <div className="flex flex-col">
        <img id="imagesPreview" className="flex rounded-xl" src={preview} width="300px" height="400px"></img>
        <div className="flex p-4 flex-row">
        <Arrow left ></Arrow>
        <Pagination src={""}></Pagination>
        <Pagination src={""}></Pagination>
        <Pagination src={""}></Pagination>
        <Arrow right></Arrow>
        </div>
        <label className="flex pt-2 pl-4 w-32 h-12 text-3xl rounded-lg bg-black text-white"htmlFor="imgInput">업로드</label>
        <input id="imgInput" type = "file"  accept="image/*" className="hidden" multiple onChange={changeHandler}/>  
        </div>
    )
}
