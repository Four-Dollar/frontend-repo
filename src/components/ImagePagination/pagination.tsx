import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface props{
    src:string
}

export default function Pagination({src: string}: props){
    
    // const onClick= (event: React.MouseEvent<HTMLElement>)=>{

    // }

return(
    <>
        <div className="flex flex-col">
            <img src=""/>
            <div className="flex flex-row">
                <div className="slide-Container ">
                    <button className='slide1' >
                        <img src={"src"}/>
                    </button>
                </div>
            </div>
        </div>
    </> 
)


}