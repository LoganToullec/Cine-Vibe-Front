import HeaderRowCard from "./HeaderRowCard"
import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function HeaderRow({setHoverItem, items}) { 

    return(
        <div className="flex flex-row gap-14 w-screen overflow-auto scrollbar-hide px-28 snap-x scroll-p-28">
            { items?.map((element) => 
                <HeaderRowCard item={ element } key={element._id} setHoverItem={setHoverItem}/>
            ) }
        </div>
    )
}