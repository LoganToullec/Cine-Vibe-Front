import 'vidstack/styles/defaults.css';
import React from 'react';

import { MediaOutlet, MediaPlayer } from '@vidstack/react';
import { FaPlay, FaArrowLeft}  from 'react-icons/fa';
import {
    useParams
} from "react-router-dom";


export default function PlayerPage() {

    let { contentId, itemId } = useParams();

    return(
        <div className="fixed z-[300] h-screen w-screen flex align-top bg-black">
            <iframe className="fixed" width="100%" height="100%" src={"https://www.youtube-nocookie.com/embed/" + contentId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div className='group fixed flex justify-center w-full z-[100] h-10'>
                <a href={"/"}>
                    
                    <p className='py-5 my-3 w-[15vw] items-center justify-center hidden group-hover:flex rounded-xl gap-3 font-bold bg-green-600 h-5'><FaArrowLeft className='text-xl'></FaArrowLeft>Go back</p>
                </a>
            </div>
        </div>
    )
}
