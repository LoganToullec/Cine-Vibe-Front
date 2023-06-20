import FeatureTag from "../components/presentation/Common/FeatureTag"
import PrLevelTag from "../components/presentation/Common/PrLevelTag"
import ImdbTag from "../components/presentation/Common/ImdbTag"
import GenreTag from "../components/presentation/Common/GenreTag"
import CTAPlay from "../components/presentation/Common/CTAPlay"
import CTALike from "../components/presentation/Common/CTALike"
import CTADislike from "../components/presentation/Common/CTADislike"
import HorizontalRow from "../components/presentation/HorizontalRow/HorizontalRow"
import ReactPlayer from 'react-player'
import {
    useParams
} from "react-router-dom";
import React, { useState, useEffect, useRef, Fragment } from 'react';
import Items from "../components/presentation/Common/Items"
import SearchBar from "../components/homePage/SearchBar"
import Cookies from 'universal-cookie';
import { FaPlus, FaCheck }  from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from "react-router-dom";

export default function DetailPage() {

    let { contentId } = useParams()

    const cookies = new Cookies();
    const [item, setItem] = useState([]);
    const [user, setUser] = useState();
    const [inWishList, setInWishList] = useState(false);
    const url = 'http://localhost:8080/movies/' + contentId;

    const navigate = useNavigate();

    const [open, setOpen] = useState(false)

    const cancelButtonRef = useRef(null)

    let userId = cookies.get('userIdLoggedIn')

    function onClickAddToList() {
        if (userId !== undefined) {
            const obj = {
                movieId: contentId,
                userId: userId
            }
            const requestOptions = {
                method: 'POST',
                headers: {    
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin': '*' },
                body: JSON.stringify(obj)
            };
            if(inWishList === true) {
                fetch('http://localhost:8080/users/removeFromList', requestOptions)
                .then((res) => {
                    console.log("removed")
                    setInWishList(false)
                })
            } else {
                fetch('http://localhost:8080/users/addToList', requestOptions)
                .then((res) => {
                    console.log("added")
                    setInWishList(true)
                })
            }            
        } else {
            setOpen(true)
        }
    }

    useEffect(() => {
    }, [inWishList])

    useEffect(() => {
        user?.watchList.includes(contentId) ? setInWishList(true) : setInWishList(false)
     }, [user])

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItem(data)
            })
            .catch((err) => {
                console.log(err.message);
            });

        fetch('http://localhost:8080/getUser/' + userId)
            .then((response) => response.json())
            .then((data) => {
                setUser(data)
            })
            .catch((error) => {

            })
    }, []);


    return(
        <>
        <SearchBar/>
        <div className="min-h-screen w-screen text-white">
          <div className="fixed -top-28 w-screen h-screen -z-10">
            <iframe className="w-screen aspect-video " src={"//www.youtube-nocookie.com/embed/" + item.trailerId + "?autoplay=1&mute=1&controls=0&loop=1&playlist=" + item.trailerId} title="Trailer" allow="autoplay; loop; encrypted-media"></iframe>
            <div className="w-full h-full bg-[#09161d]"></div>
          </div>
            <div className="h-4/5 bg-cover bg-center flex items-end z-30">
                <div className="w-full h-full bg-gradient-to-t from-[#09161d] to-[#09161d]/0 absolute z-10"></div>
                <div className="flex flex-col items-start z-30">
                    <div className="flex flex-row font-apple font-bold text-lg gap-5 px-28 pt-72">
                        {
                            item.actors?.map((actor) => {
                                return(<p key={actor}>{ actor }</p>)
                            })
                        }    
                    </div>   
                    <h1 className="font-zuume font-bold text-6xl px-28 pb-4">{ item.title }</h1>
                    <div className="flex flex-row gap-4 pb-6 px-28 items-center">
                        <ImdbTag/>
                        <p className="font-bold text-xl">{item.grade + "/10"}</p>
                        <p className="font-bold text-xl">{item.year}</p>
                        <PrLevelTag prLevel={"TP"} color={"#008800"}/>
                        {
                            item.specs?.map((spec) => {
                                return(<FeatureTag key={spec} name={spec.replace('""',"")}/>)
                            })
                        }
                    </div>
                    <div className="flex flex-row gap-4 pb-6 px-28 items-center">
                        {
                            item.genres?.map((genre) => {
                                return(<GenreTag key={genre} name={genre.replace('""',"")} />)
                            })
                        }
                    </div> 
                    <p className="px-28 text-start w-2/3 pb-6">
                        { item.desc }
                    </p>              
                </div>
            </div>
            <div className="flex flex-row gap-4 pb-6 px-28 items-center bg-[#09161d] h-fit z-50">
                <CTAPlay contentId={item.trailerId}/>
                <div onClick={ onClickAddToList } className="w-full cursor-pointer flex flex-row gap-8 justify-center items-center transition bg-white/10 backdrop-blur-lg p-3 py-14 rounded-xl hover:bg-orange-400">
                    {
                        inWishList ? 
                        <FaCheck className="text-4xl"/>
                        :
                        <FaPlus className="text-4xl"/>
                    }
                    
                </div>
                <CTALike/>
                <CTADislike/>
            </div>
        </div>
        <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#09161d] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#09161d] px-4 pb-4 pt-5 sm:p-6 sm:pb-4 text-white">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#22282b] sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-200 font-apple">
                        Please Log In
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 font-apple">
                          You cannot add a content to your watch list without being logged in !
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#09161d] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-apple font-semibold text-white hover:bg-green-700 sm:ml-3 sm:w-auto"
                    onClick={() => {
                        navigate('/signin')
                        setOpen(false)
                    }}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-apple font-semibold text-white hover:bg-red-700 sm:mt-0 sm:w-auto"
                    onClick={() => {
                        setOpen(false)
                    }}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
        </>
        
    )
}