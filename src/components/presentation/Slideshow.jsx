import SlideshowItem from "./SlideshowItem"
import React, { useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
    Carousel,
    initTE,
  } from "tw-elements";
  
  initTE({ Carousel });

const contents = [
    {
        name: "Avatar 2",
        releaseDate: "20/11/22",
        rating: 4.8,
        url: "https://media.licdn.com/dms/image/D4D12AQHnV3YaW-rEGA/article-cover_image-shrink_720_1280/0/1673632728814?e=2147483647&v=beta&t=0TLqxWVAykkOsO_s-LxKhS3IoTkyyrnE0FNRwUd0mZw",
        extrafields: [
            "Dolby Vision",
            "Dolby Atmos",
            "4K UHD"            
        ],
        pr: "12+",
        id: 19922394
    },
    {
        name: "Lightyear",
        releaseDate: "12/02/23",
        rating: 4.2,
        url: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D6F5BD1DF78E738ADAAE583AACC556DC657F41C7EF8D519DBC46D7C8EAB30E3A/scale?width=1200&aspectRatio=1.78&format=jpeg",
        extrafields: [
            "Dolby Vision",
            "Dolby Atmos",
            "4K UHD"            
        ],
        pr: "TP",
        id: 9284901
    },{
        name: "Fast & Furious 9",
        releaseDate: "07/05/23",
        rating: 3.6,
        url: "https://tf1pub.fr/sites/default/files/styles/header_article_v2/public/thumbnails/image/ff_l.jpg?itok=tqTSe-9x",
        extrafields: [
            "Dolby Vision",
            "Dolby Atmos",
            "4K UHD"            
        ],
        pr: "12+",
        id: 82012020
    },{
        name: "Black Panther : Wakanda Forever",
        releaseDate: "28/08/22",
        rating: 4.4,
        url: "https://cultea.fr/wp-content/uploads/2022/10/Black-Panther-2-affiche.png",
        extrafields: [
            "Dolby Vision",
            "Dolby Atmos",
            "4K UHD"            
        ],
        pr: "16+",
        id: 9291092
    }
]


