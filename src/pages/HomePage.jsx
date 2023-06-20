import NavBar from '../components/homePage/NavBar'
import Header from '../components/presentation/Header'
import SearchBar from '../components/homePage/SearchBar'
import HorizontalRow from '../components/presentation/HorizontalRow/HorizontalRow'
import VerticalRow from '../components/presentation/VerticalRow/VerticalRow'
import TrendingRow from '../components/presentation/TrendingRow/TrendingRow'
import React, { useState, useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import { LuConstruction } from 'react-icons/lu';


export default function HomePage() {

    let { appName } = useParams()

    const url = "http://localhost:8080/pages/" + appName;
    const [items, setItems] = useState([]);
    const [headerItem, setHeaderItem] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
        fetch("http://localhost:8080/rowsFilter/Header " + appName)
            .then((response) => response.json())
            .then((data) => {
                setHeaderItem(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    function onLoad(e){
        setTimeout(() => {  e.target.style.display = "none" }, 500);
        
    }

    useEffect(() => {

    },[items])

    return (
        <>
        <SearchBar />
        
        <div className="bg-[#09161d] min-h-screen pb-10">
            <Header item={headerItem[0]}/>
            {
                items.map((row) => {
                    switch(row.type.toLowerCase()) {
                        case("horizontal"):
                            return (<HorizontalRow key={row._id} items={ row.elements } title={ row.title }/>)
                        case ("vertical"):
                            return (<VerticalRow key={row._id} items={ row.elements } title={ row.title }/>)
                        case ("trending"):
                            return (<TrendingRow key={row._id} items={ row.elements } title={ row.title }/>)
                        default:
                            return(<div key={row.id}></div>)
                    }                
                })
            }
            {
                items.length < 1 ?
                    <>
                        <LuConstruction className='text-yellow-600 w-full text-8xl mb-10'/>
                        <h1 className='text-yellow-400 font-zuume font-bold text-5xl'>Page Under Construction</h1>
                        <p className='text-white text-xl'>This Page is actually under construction, waiting for content</p>
                    </>
                    :
                    <></>
            }
        </div>
        </>
        
    )
}