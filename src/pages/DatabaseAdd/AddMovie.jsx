import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function AddMovie() {

    const [input, setInput] = useState({
        title: '',
        actors: '',
        coverArt: '',
        verticalPoster: '',
        horizontalPoster: '',
        duration: '',
        trailerId: '',
        grade: '',
        year: '',
        specs: '',
        genres: '',
        desc:''
    });
     
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function onSubmit() {
        let actors = input.actors.split(",")
        let genres = input.genres.split(",")
        let specs = input.specs.split(",")
        const obj = {
            title: input.title,
            actors: actors,
            coverArt: input.coverArt,
            verticalPoster: input.verticalPoster,
            duration: input.duration,
            trailerId: input.trailerId,
            grade: input.grade,
            year: input.year,
            specs: specs,
            genres: genres,
            desc: input.desc
        }
        const requestOptions = {
            method: 'POST',
            headers: {    
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*' },
            body: JSON.stringify(obj)
          };
          fetch('http://localhost:8080/movies/', requestOptions)
            .then((response) => console.log(response))
            .catch((error) => {

            })
    }

    return(
        <div className="p-3">
            <p className="text-white font-bold text-5xl w-full text-start py-5">Movies</p>
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
                <label for="actors" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Actors</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="actors"
                                type="actors"
                                name="actors"
                                placeholder='Enter actors (Separated by commas)'
                                value={input.actors}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="coverArt" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Cover Art</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="coverArt"
                                type="coverArt"
                                name="coverArt"
                                placeholder='Enter coverArt link'
                                value={input.coverArt}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="verticalPoster" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Vertical Poster</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="verticalPoster"
                                type="verticalPoster"
                                name="verticalPoster"
                                placeholder='Enter verticalPoster link'
                                value={input.verticalPoster}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="duration" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Duration</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="duration"
                                type="duration"
                                name="duration"
                                placeholder='Enter duration'
                                value={input.duration}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="trailerId" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Trailer Id</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="trailerId"
                                type="trailerId"
                                name="trailerId"
                                placeholder='Enter youtube trailerId'
                                value={input.trailerId}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="grade" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Grade</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="grade"
                                type="grade"
                                name="grade"
                                placeholder='Enter grade'
                                value={input.grade}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="year" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Year</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="year"
                                type="year"
                                name="year"
                                placeholder='Enter year'
                                value={input.year}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="specs" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Specs</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="specs"
                                type="specs"
                                name="specs"
                                placeholder='Enter specs (Dolby...)'
                                value={input.specs}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="genres" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Genres</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="genres"
                                type="genres"
                                name="genres"
                                placeholder='Enter genres (Separated by commas)'
                                value={input.genres}
                                onChange={onInputChange}></input>                        
                </div>
            </div>
            <div className='pb-4'>
                <label for="desc" class="block mb-2 text-start dark:text-white font-apple text-white text-xl font-bold">Description</label>
                <div className="flex flex-row items-start p-2.5 px-4 rounded-2xl bg-black/30 backdrop-blur ">
                    <input className="required:border-red-500 w-full bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-semibold text-white placeholder-gray-400"
                                id="desc"
                                type="desc"
                                name="desc"
                                placeholder='Enter desc'
                                value={input.desc}
                                onChange={onInputChange}></input>                        
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