import { FaPlay}  from 'react-icons/fa';
import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes, //replaces "Switch" used till v5
    Route,
  } from "react-router-dom";
import DetailPage from '../../../pages/DetailPage';


export default function HeaderRowCard({item, setHoverItem}) {

    var watchingPercentage = item.continueWatching * 100 / item.duration

    return(
        <a href={"/detail/" + item._id} className="cursor-pointer snap-start" onMouseEnter={ () => {
                setHoverItem(item)
            }}>
            <div className="group relative h-44 w-[281px] my-2 hover:outline-offset-0 hover:outline-2 hover:outline-white hover:outline rounded-3xl flex flex-row items-end transform-all transition duration-300 hover:scale-105">
                <div className="absolute bottom-0 left-0 z-40 font-apple font-bold overflow-hidden opacity-80 rounded-3xl flex flex-col items-start">
                    <p className='p-5 text-start'>{item.title}</p>
                
                    { item.continueWatching !== 0 ? 
                        <div className="w-[281px] rounded-full h-2.5" style={{backgroundColor: item.secondaryColor}}>
                            <div className="h-2.5 rounded-full" style={{width: "" + watchingPercentage + "%", backgroundColor: item.dominantColor}}></div>
                        </div>
                        :
                        <div></div>
                    }
                    

                </div>
                <div className="absolute center z-40 group-hover:flex h-full w-full hidden justify-center items-center">
                    <FaPlay className="text-3xl"/>
                </div>
                <img alt="" className="rounded-3xl w-full h-full object-cover object-center brightness-50 z-30" src={item.coverArt}></img>
                
            </div>       
        </a>
        
    )
}

