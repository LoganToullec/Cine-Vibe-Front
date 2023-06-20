import Items from '../components/presentation/Common/Items'
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function UserProfilePage() {

    let bgImage = Items[0].coverArt

    const cookies = new Cookies();
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    let userId = cookies.get('userIdLoggedIn')

    function onDisconnect() {
        cookies.remove('userIdLoggedIn')
        navigate("/")
    }

    fetch('http://localhost:8080/getUser/' + userId)
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
            .catch((error) => {

            })

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
                    <div className='flex flex-col justify-start items-start gap-4'>
                        <p className='font-apple text-white font-bold text-4xl'>My Profile</p>                    
                    </div>
                    <div className='w-4/12 flex items-center justify-center p-10'>
                    
                        <img className="h-24 w-24 object-cover object-center rounded-xl" alt="" src="https://casoar.org/wp-content/uploads/2020/10/Bob-leponge.png"></img>
                        
                    </div>
                    <div className='flex flex-col justify-start items-start w-4/12 gap-4'>
                    <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                            <p className='text-[#787C87] font-semibold text-xs'>Username</p>
                            <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                                id="username"
                                type="username"
                                name="username"
                                value={ user.username } disabled></input>
                        </div>
                        <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                            <p className='text-[#787C87] font-semibold text-xs'>Email</p>
                            <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                                id="email"
                                type="email"
                                name="email"
                                value={ user.email } disabled></input>
                        </div>
                        <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                            <p className='text-[#787C87] font-semibold text-xs'>Email</p>
                            <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                                id="password"
                                type="password"
                                name="password"
                                value={ user.password } disabled></input>
                        </div>
                        <div className='flex flex-row justify-between w-full gap-5'>
                            <input type='submit' value="Modify" className='cursor-pointer bg-green-600 w-1/2 px-10 py-3 text-white font-bold rounded-full mt-4'></input>
                            <input type='submit' value="Disconnect" onClick={ onDisconnect } className='cursor-pointer bg-green-600 w-1/2 px-10 py-3 text-white font-bold rounded-full mt-4'></input>
                            
                        </div>
                        <div>
                            {
                                user.admin !== false ? 
                                <a href="/adminPage" className='w-1/2'><div className='bg-orange-400 px-10 py-3 text-white font-bold rounded-full'>Admin Page</div></a>
                                :
                                <></>
                            }
                        </div>
                        
                    </div>
                                    
            </div>         
        </div>
        </>
    )
}