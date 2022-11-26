//This is the button for the pagination 



import React from 'react';
interface props{
    left?: boolean;
    right?: boolean; 
}

export const Arrow = ({left}:props) => {



    return (
            <button className="arrowbtn flex pt-1 pl-3 w-12 h-12 text-center rounded-full bg-blue-200 hover:bg-blue-400 text-3xl text-blue-600 "> {left ? "<": ">"}</button>
    );
};

export default Arrow;