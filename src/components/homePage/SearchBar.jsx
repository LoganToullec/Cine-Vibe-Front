import { LuSearch } from 'react-icons/lu';
import { HiBars3 } from 'react-icons/hi2';
import { FaUserAlt } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { AppleTv, DisneyPlus, MyCanal, Netflix, ParamountPlus, PrimeVideo } from '../../img/companies';
import MovieSearchList from './MovieSearchList';
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function SearchBar() {

    const [searchValue, setSearchValue] = useState([]);
    const [searchItems, setSearchItems] = useState([]);    
    const cookies = new Cookies()
    var userIdCookie = cookies.get('userIdLoggedIn')

    const url = 'http://localhost:8080/moviesFiltered/';

    function handleChange(event) {
        console.log(event.target.value)
        setSearchValue(event.target.value);
    }

    useEffect(() => {
        if (searchValue.length > 1) {
            fetch(url + searchValue)
                .then((response) => response.json())
                .then((data) => {
                    setSearchItems(data)
                })
                .catch((err) => {
                    console.log(err.message);
                });
        } else {
            setSearchItems([])
        }
    }, [searchValue])

    return(
        <div>
            <div className='group fixed w-16 py-4 m-4 p-3 text-3xl text-white/50 hover:text-white/100 bg-black/30 backdrop-blur rounded-2xl z-[70]'>
                <div className="flex flex-col items-center gap-5">
                    <HiBars3/>
                    {
                        userIdCookie === undefined ?
                        <a href="/signin" className='group-hover:inline hidden'>
                            <FaUserAlt className="text-2xl"/>
                        </a>
                        :
                        <a href="/myprofile" className='group-hover:inline hidden'>
                            <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src="https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png"></img>
                        </a>
                    }
                    <a href="/watchList" className='group-hover:flex hidden h-10 w-10  justify-center items-center rounded-xl'>
                        <AiFillHeart/>
                    </a>

                    <div className='h-[2px] bg-black/30 w-full group-hover:inline hidden'>

                    </div>
                    
                    <a href="/home/AppleTv" className='group-hover:inline hidden'>
                        <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src={ AppleTv }></img>
                    </a>
                    <a href="/home/DisneyPlus" className='group-hover:inline hidden'>
                        <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src={ DisneyPlus }></img>
                    </a>
                    <a href="/home/MyCanal" className='group-hover:inline hidden'>
                        <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src={ MyCanal }></img>
                    </a>
                    <a href="/home/Netflix" className='group-hover:inline hidden'>
                        <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src={ Netflix }></img>
                    </a>
                    <a href="/home/ParamountPlus" className='group-hover:inline hidden'>
                        <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src={ ParamountPlus }></img>
                    </a>
                    <a href="/home/PrimeVideo" className='group-hover:inline hidden'>
                        <img className="h-10 w-10 object-cover object-center rounded-xl" alt="" src={ PrimeVideo }></img>
                    </a>
                    
                </div>
            </div>
            <div id="searchbar" className="w-screen h-20 fixed flex flex-row justify-between items-center px-28 z-[60] bg-gradient-to-t from-transparent via-[#09161d]/70 to-[#09161d]">
                <a href="/home/Home">
                    <div className="flex flex-col items-start text-white">
                        <p className="font-zuume font-semibold space-x-5 text-4xl"><span className='text-white/70'>CINE</span>VIBE.</p>
                    </div>
                </a>
                <div className="flex flex-col">
                    
                    <div className="flex flex-row items-center p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                        <input className="bg-transparent border-none font-apple focus:ring-transparent focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400 w-64" type="text" placeholder="Search for a content" value={ searchValue } onChange={ handleChange }></input>
                        <LuSearch className='text-white text-2xl'/>
                    </div>
                    {
                        searchItems.length > 0 ?
                        <div id="searchList" className="absolute mt-11 w-[19.5rem]">
                            <MovieSearchList items={ searchItems }/>
                        </div>
                        : searchValue.length > 1 ?

                        <p className="absolute mt-11 rounded-xl font-bold p-4 text-white w-[19.5rem] bg-black/40">
                            No results
                        </p>
                        : 
                        <p></p>
                    }
                    
                </div>
                
            </div>         
        </div>
        
    )
}