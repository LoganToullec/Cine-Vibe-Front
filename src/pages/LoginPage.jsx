import LoginImage from '../img/mac-wallpaper.jpeg'
import { LogoOrange } from '../img/brand'
import Items from '../components/presentation/Common/Items'
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

export default function LoginPage() {

    const navigate = useNavigate();
    const cookies = new Cookies();

    let bgImage = Items[0].coverArt

    const [goodCred, setGoodCred] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    function onSubmit() {
        fetch('http://localhost:8080/users/'+ email)
            .then((response) => response.json())
            .then((data) => {
                if (data === null){
                    setGoodCred("Bad email or password")
                } else if (password === data.password) {
                    cookies.set('userIdLoggedIn', data._id);
                    navigate("/")
                } else {
                    setGoodCred("Bad email or password")
                }
            })
            .catch((error) => {

            })
    }

    return(
        <>
        <div className='fixed m-10'>
            <a href="/">
                <div className="flex flex-col items-start text-white">
                    <p className="font-zuume font-semibold space-x-5 text-5xl"><span className='text-white/70'>CINE</span>VIBE.</p>
                </div>
            </a>
        </div>
        <div className='w-screen h-screen bg-cover bg-center overflow-hidden' style={{backgroundImage: "url('" + bgImage + "'"}}>
            <div className='w-screen h-screen bg-gradient-to-r from-[#09161d] from-35% via-[#09161d]/70 via-70% to-100% to-[#09161d]/0 p-24 flex flex-col justify-center'>
                    <div className='flex flex-col justify-start items-start gap-4 pb-8'>
                        <p className='font-apple text-[#B7B7B7] font-bold text-sm'>Discover your content by the easiest way</p>
                        <p className='font-apple text-white font-bold text-5xl'>Welcome Back</p>
                        <p className='font-apple text-[#B7B7B7] font-semibold'>No Account Yet ? <a href='/signup' className='text-green-600'>Register Here</a></p>
                    </div>
                    <div className='flex flex-col justify-start items-start w-4/12 gap-4'>
                        <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                            <p className='text-[#787C87] font-semibold text-xs'>Email</p>
                            <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                                id="email"
                                type="email"
                                name="email"
                                placeholder='Enter Email'
                                value={email}
                                onChange={handleEmail}></input>
                        </div>
                        <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                            <p className='text-[#787C87] font-semibold text-xs'>Password</p>
                            <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                                id="password"
                                type="password"
                                name="password"
                                placeholder='Enter Password'
                                value={password}
                                onChange={handlePassword}></input>
                        </div>
                        <div className='flex flex-row justify-between w-full gap-5'>
                            <input type='submit' value="" className='cursor-pointer w-1/2 bg-[#555B68] px-10 py-3 text-white font-bold rounded-full mt-4'></input>

                            <input type='submit' value="Login" onClick={ onSubmit } className='cursor-pointer w-1/2 bg-green-600 px-10 py-3 text-white text-sm font-bold rounded-full mt-4'></input>

                        </div>
                        
                    </div>
                                    
            </div>         
        </div>
        </>
    )
}