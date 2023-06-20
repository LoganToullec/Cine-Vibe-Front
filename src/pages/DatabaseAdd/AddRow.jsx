import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { LuSearch } from 'react-icons/lu';
import MovieSearchListAdd from './MovieSearchListAdd'
import GenreTag from '../../components/presentation/Common/GenreTag'
export default function AddRow() {

    const [searchValue, setSearchValue] = useState([]);
    const [searchItems, setSearchItems] = useState([]);
    const [elements, setElements] = useState([]);
    const [lastAdd, setLastAdd] = useState([]);

    const url = 'http://localhost:8080/moviesFiltered/';

    function handleChange(event) {
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

    useEffect(() => {
        if(!elements.includes(lastAdd)) {
            elements.push(lastAdd)
            var filtered = elements.filter(function (el) {
                return el.length !== 0;
            });
            setElements(filtered)
            setSearchValue("")
        }        
    }, [lastAdd])

    useEffect(() => {
    }, [elements])

    const [input, setInput] = useState({
        title: '',
        type:''
    });
     
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function onSubmit() {
        const obj = {
            title: input.title,
            type: input.type,
            elements: elements            
        }
        console.log(elements)
        const requestOptions = {
            method: 'POST',
            headers: {    
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(obj)
          };
          console.log(JSON.stringify(obj))
          fetch('http://localhost:8080/rows/', requestOptions)
            .then((response) => console.log(response))
            .catch((error) => {

            })
    }

    return(
        <div className="p-3">
            <p className="text-white font-bold text-5xl w-full text-start py-5">Rows</p>
            <div className='pb-4'>
                <label for="title" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Title</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="title"
                                type="title"
                                name="title"
                                placeholder='Enter title'
                                value={input.title}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="type" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Type</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="type"
                                type="type"
                                name="type"
                                placeholder='Enter type (Horizontal, Vertical, Trending)'
                                value={input.type}
                                onChange={onInputChange}></input>                        
                </div>
            </div>

            <div className='pb-4'>
                <label for="actors" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Elements</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                       
                    <div className='flex flex-row gap-4'> 
                    <div>
                        <div className="flex flex-row items-center p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                            <input className="bg-transparent border-none font-apple focus:ring-transparent focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400 w-64" type="text" placeholder="Search for a content" value={ searchValue } onChange={ handleChange }></input>
                            <LuSearch className='text-white text-2xl'/>
                        </div>          
                    {
                        
                        searchItems.length > 0 ?
                        <div id="searchList" className="absolute mt-11 w-[19.5rem] z-50">
                            <MovieSearchListAdd items={ searchItems } elements={ lastAdd } setElements={ setLastAdd }/>
                        </div>
                        : searchValue.length > 1 ?

                        <p className="absolute mt-11 rounded-xl font-bold p-4 text-white w-[19.5rem] bg-black/40">
                            No results
                        </p>
                        : 
                        <p></p>
                    } 
                    </div> 
                        <div className='pb-4 gap-4 flex flex-wrap'>
                            {
                                elements.map((elt) => {
                                    return(
                                    <div className='w-fit z-30 text-white'>
                                        <GenreTag name={elt.title}/>
                                    </div>
                                    )
                                })
                            }
                        </div>
                    </div> 
                          
                </div>
            </div>
            
            <div className='flex w-full justify-start'>
                <div onClick={ onSubmit } className='text-white font-bold mt-5 bg-green-600 p-2.5 rounded-2xl w-44'>
                    Create
                </div>
            </div>
        </div>
    )
}