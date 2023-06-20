import Items from '../components/presentation/Common/Items'
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from 'react';
import AddMovie from './DatabaseAdd/AddMovie';
import AddPage from './DatabaseAdd/AddPage';
import AddRow from './DatabaseAdd/AddRow';
import SearchBar from '../components/homePage/SearchBar';

export default function AdminPage() {

    let bgImage = Items[0].coverArt

    const [selectedMenu, setSelectedMenu] = useState()

    const Menus = {
        movies: "Movies",
        rows: "Rows",
        pages: "Pages"
    }

    function renderPage() {
        switch (selectedMenu) {
            case Menus.movies:
                return (<AddMovie/>)
            case Menus.rows:
                return (<AddRow/>)
            case Menus.pages:
                return (<AddPage />)
            default:
                return (<p>No page found</p>)
        }
    }

    return(
        <>
        
        <SearchBar/>
        <div className="w-screen h-screen flex items-center justify-center px-10 pt-20 pb-5 bg-center bg-cover" style={{backgroundImage: "url('" + bgImage + "'"}}>
            <div className="w-full h-full rounded-3xl flex flex-row">
                <div className=' w-[300px] bg-black/60 backdrop-blur-xl rounded-2xl m-5 flex flex-col gap-2 overflow-scroll justify-start items-start p-3'>
                    <p className='text-white font-bold text-3xl pb-4'>Tables</p>
                    <div className='bg-black w-full text-start p-2 rounded-xl cursor-pointer' onClick={ () => setSelectedMenu(Menus.movies) }>
                        <p className='text-white font-bold text-xl'>Movies</p>
                    </div>
                    <div className='bg-black w-full text-start p-2 rounded-xl cursor-pointer' onClick={ () => setSelectedMenu(Menus.rows) }>
                        <p className='text-white font-bold text-xl'>Rows</p>
                    </div>
                    <div className='bg-black w-full text-start p-2 rounded-xl cursor-pointer' onClick={ () => setSelectedMenu(Menus.pages) }>
                        <p className='text-white font-bold text-xl'>Pages</p>
                    </div>
                </div>
                <div className='w-full bg-black/60 backdrop-blur-xl rounded-2xl m-5 flex flex-col overflow-scroll px-5'>
                    {
                        renderPage()
                    }
                </div>
            
            </div>
        </div>
        </>
    )
}