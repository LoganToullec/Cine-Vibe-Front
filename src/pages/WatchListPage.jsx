import Cookies from 'universal-cookie';
import Items from '../components/presentation/Common/Items'
import React, { useState, useEffect } from 'react';
import HorizontalRowCard from '../components/presentation/HorizontalRow/HorizontalRowCard';
import SearchBar from '../components/homePage/SearchBar';

export default function WatchListPage() {

    const cookies = new Cookies();
    let userId = cookies.get('userIdLoggedIn')
    let bgImage = Items[0].coverArt

    const url = 'http://localhost:8080/users/wishList/' + userId;
    
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return(
        <>
        <SearchBar />
        <div className="h-screen w-screen text-white ">
            <div className="h-full bg-cover bg-center flex items-start" style={{backgroundImage: "url('"+ bgImage +"'"}}>
                
                <div className="w-full h-full bg-gradient-to-t from-[#09161d] from-30%  to-[#09161d]/0 absolute z-10"></div>
                <div className="flex flex-col z-30 m-28 gap-4">
                    <h1 className='font-apple font-bold text-4xl text-start'>WatchList</h1>                    
                    <div className='flex flex-wrap flex-row gap-6'>
                        {
                            items.length > 0 ?
                            items?.map((item) => {
                                return <HorizontalRowCard key={item.id} item={item}/>
                            })
                            :
                            <h1 className='font-apple font-semibold text-xl'>Add content to your watchList to find it here !</h1>
                        }
                    </div>
                               
                </div>
            </div>
        </div>
        </>
    )
}