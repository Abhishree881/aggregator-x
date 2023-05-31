"use client";
import React from "react";
import "../../styles/home/collection.css"
import Image from "next/image";
import sample from "../../../assets/home/sample.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const pageData =[
    {
        index:1,
        img:'../../../assets/home/sample.svg',
        title:'Webtech',
        subtitle:'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        url:'#',
    },
    {
        index:2,
        img:'../../../assets/home/sample.svg',
        title:'Startuper',
        subtitle:'At ultricies lectus viverra euismod phasellus',
        url:'#',
    },
    {
        index:3,
        img:'../../../assets/home/sample.svg',
        title:'Darkfolio',
        subtitle:'Nulla sit sollicitudin pulvinar a integer imperdie',
        url:'#',
    }
]
export default function Collections(){

    return <div className="collection">
        <h1>Collections</h1>
        <div className="collection-box">
            {pageData.map((index)=>{
                return(
                    <div className="collection-card" key={index.index}>
                        <Image className="image" style={{borderRadius:"20px 20px 0 0"}} src={sample} alt="logo"/>
                        <div className="collection-title">
                            <div>
                                <h2>{index.title}</h2>
                                <h3>{index.subtitle}</h3>
                            </div>
                            <a className="browse" href={index.url}>Browse apps <ArrowForwardIcon style={{fontSize:"20px"}}/> </a>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}