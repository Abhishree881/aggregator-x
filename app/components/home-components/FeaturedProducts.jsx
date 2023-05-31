"use client";
import React from "react";
import "../../styles/home/products.css"
import pageData from "@/app/components/home-components/data";
import Image from "next/image";
import sample from '../../../assets/home/sample.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button2 from "@/app/components/button2";

export default function FeaturedProducts() {
        return <div className='products'>
                <div className="main">
                        <h1>Featured Products</h1>
                        <div className="cards-one">
                                {pageData.map((index) => {
                                        return(
                                            <div className="card gold" key={index.index}>
                                                    <div className="logo">
                                                            <Image className="img" src={sample} alt="logo"/>
                                                            <div className="title">
                                                                    <h2>{index.title}</h2>
                                                                    <h3>{index.subtitle}</h3>
                                                                    <h4 className="tag">{index.tag}</h4>
                                                            </div>
                                                    </div>
                                                    <div className="links">
                                                        <a className="learn" href={index.learnurl}>Learn More</a>
                                                        <a href={index.url}><Button2 text={"Visit"} type={"primary"} icon={1} /> </a>
                                                    </div>
                                            </div>
                                        )
                                })}
                        </div>
                        <h1>Latest Products</h1>
                        <div className="cards-two">
                                {pageData.map((index) => {
                                        return(
                                            <div className="card" key={index.index}>
                                                    <div className="logo">
                                                            <Image className="img" src={sample} alt="logo"/>
                                                            <div className="title">
                                                                    <h2>{index.title}</h2>
                                                                    <h3>{index.subtitle}</h3>
                                                                    <h4 className="tag">{index.tag}</h4>
                                                            </div>
                                                    </div>
                                                    <div className="links">
                                                            <a className="learn" href={index.learnurl}>Learn More</a>
                                                            <a href={index.url}><Button2 text={"Visit"} type={"primary"} icon={1} /> </a>
                                                    </div>
                                            </div>
                                        )
                                })}
                        </div>
                </div>
                <div className="filter">
                        <h1>Filter by Category</h1>
                        <div className="filter-option">
                                <ul>
                                        <li>Business <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                                        <li>Design <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                                        <li>Development <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                                        <li>Marketing <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                                </ul>
                        </div>
                        <div className="post">
                                <h1>Submit your product!</h1>
                                <h2>Lorem ipsum dolor addhh amet consectetur.</h2>
                                <Button2 text={"Submit Now"} type={"primary"} icon={1} />
                        </div>
                </div>
        </div>
}