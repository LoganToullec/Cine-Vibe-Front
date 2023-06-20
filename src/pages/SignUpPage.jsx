import Items from '../components/presentation/Common/Items'
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {

    let bgImage = Items[0].coverArt

    const navigate = useNavigate();

    const [userExist, setUserExist] = useState()

    function onSubmit() {
      const obj = {
          username: input.username,
          email: input.email,
          password: input.password
      }
      const requestOptions = {
        method: 'POST',
        headers: {    
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify(obj)
      };
      fetch('http://localhost:8080/users/'+obj.email)
        .then((response) => response.json())
        .then((data) => {
            if(data === null) {
              fetch('http://localhost:8080/users/create', requestOptions)
                .then((res) => {
                  navigate("/");
                })
            } else {
              setUserExist("Email already exists")
            }
            
        })
        .catch((error) => {

        })
    }

    useEffect(() => {

    }, [userExist])

    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
     
    const [error, setError] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
     
    const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
        validateInput(e);
    }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
          const stateObj = { ...prev, [name]: "" };
     
          switch (name) {
            case "username":
              if (!value) {
                stateObj[name] = "Please enter Username.";
              }
              break;
            
            case "email":
                if(!value) {
                    stateObj[name] = "Please enter Email"
                }
                break;
     
            case "password":
              if (!value) {
                stateObj[name] = "Please enter Password.";
              } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
              } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
              }
              break;
     
            case "confirmPassword":
              if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
              } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
              }
              break;
     
            default:
              break;
          }
     
          return stateObj;
        });
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
                      <p className='font-apple text-[#B7B7B7] font-bold text-sm'>START FOR FREE</p>
                      <p className='font-apple text-white font-bold text-5xl'>Create new account</p>
                      <p className='font-apple text-[#B7B7B7] font-semibold'>Already A Member ? <a href='/signin' className='text-green-600'>Log in</a></p>
                  </div>
                  <div className='flex flex-col justify-start items-start w-4/12 gap-4'>
                      <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                          <p className='text-[#787C87] font-semibold text-xs'>Username</p>
                          <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                              id="username"
                              type="username"
                              name="username"
                              placeholder='Enter Username'
                              value={input.username}
                              onChange={onInputChange}></input>
                      </div>
                      <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                          <p className='text-[#787C87] font-semibold text-xs'>Email</p>
                          <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                              id="email"
                              type="email"
                              name="email"
                              placeholder='Enter Email'
                              value={input.email}
                              onChange={onInputChange}></input>
                      </div>
                      <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                          <p className='text-[#787C87] font-semibold text-xs'>Password</p>
                          <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                              id="password"
                              type="password"
                              name="password"
                              placeholder='Enter Password'
                              value={input.password}
                              onChange={onInputChange}></input>
                      </div>
                      <div className='flex flex-col items-start bg-[#333644] w-full rounded-xl px-6 py-1'>
                          <p className='text-[#787C87] font-semibold text-xs'>Confirm Password</p>
                          <input className="required:border-red-500 bg-transparent border-none font-apple focus:ring-transparent autofill:bg-yellow-200 focus:border-transparent focus-visible:outline-none font-bold text-white placeholder-gray-400 w-64"
                              id="confirmPassword"
                              type="password"
                              name="confirmPassword"
                              placeholder='Repeat Password'
                              value={input.confirmPassword}
                              onChange={onInputChange}></input>
                      </div>
                      {userExist && <span className='text-red-600 w-full'>{userExist}</span>}
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