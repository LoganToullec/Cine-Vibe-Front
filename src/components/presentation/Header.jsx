import HeaderRow from "./HeaderRow/HeaderRow";
import React, { useState, useEffect } from 'react';
import Items from "../presentation/Common/Items"

export default function Header({item}) {
    const [hoverItem, setHoverItem] = useState();

    useEffect(() => {
        item !== undefined ?
        setHoverItem(item.elements[0])
        :
        console.log("null items")
    }, [item])

    

    useEffect(() => {
    }, [hoverItem]);

    return (
        <div className="h-2/3 w-screen text-white ">
            <div className="h-full bg-cover bg-center flex items-end" style={{backgroundImage: "url('"+ hoverItem?.coverArt +"'"}}>
                
                <div className="w-full h-full bg-gradient-to-t from-[#09161d] to-[#09161d]/0 absolute z-10"></div>
                <div className="flex flex-col items-start z-30">
                    <div className="flex flex-row font-apple font-bold text-lg gap-5 px-28 pt-72">
                        {
                            hoverItem?.actors.map((actor) => {
                                return(<p key={actor}>{actor}</p>)
                            })
                        }
                    </div>   
                    <h1 className="font-zuume font-bold text-6xl px-28 pb-4 overflow-clip max-h-[4.2rem] text-start">{hoverItem?.title}</h1>
                    <HeaderRow setHoverItem={setHoverItem} items={item?.elements}/>              
                </div>
            </div>
        </div>
    )
}