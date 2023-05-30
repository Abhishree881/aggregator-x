"use client";
import React from "react";
import "../../styles/home/landing.scss";
import Button from "../../components/button";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from "next/image";
import cp1 from "../../../assets/home/cp1.svg"
import cp2 from "../../../assets/home/cp2.svg"
import cp3 from "../../../assets/home/cp3.svg"
import cp4 from "../../../assets/home/cp4.svg"
import cp5 from "../../../assets/home/cp5.svg"
import cp6 from "../../../assets/home/cp6.svg"
import cp7 from "../../../assets/home/cp7.svg"
import cp8 from "../../../assets/home/cp8.svg"
import cp9 from "../../../assets/home/cp9.svg"
import cp10 from "../../../assets/home/cp10.svg"


export default function Landingpage() {
  return (
    <div className="landing-div">
        <Image className="cp1" src={cp1} alt="component"/>
        <Image className="cp2" src={cp2} alt="component"/>
        <Image className="cp3" src={cp3} alt="component"/>
        <Image className="cp4" src={cp4} alt="component"/>
        <Image className="cp5" src={cp5} alt="component"/>
        <Image className="cp6" src={cp6} alt="component"/>
        <Image className="cp7" src={cp7} alt="component"/>
        <Image className="cp8" src={cp8} alt="component"/>
        <Image className="cp9" src={cp9} alt="component"/>
        <Image className="cp10" src={cp10} alt="component"/>
      <div className="landing-box">
        <h1>Discover the next SaaS product today.</h1>
        <div className="div">
          Lorem ipsum dolor sit amet consectetur adipiscing elit etiam nisl
          tellus dolor egestas quis laoreet fames odio habitasse orci.
        </div>
        <div className="landing-feild" style={{ display: "flex" }}>
          <div className="landing-search">
            <input
              type="text"
              className="search"
              placeholder="Search for..."
            ></input>
            <Button text={"Search"} type={"primary"} />
          </div>
          <div className="landing-filter">
              <div className="filter-box">
              Filter by Category
              <span className="hover-arrow">
                  <KeyboardArrowUpOutlinedIcon style={{fontSize:"20px"}}/>
              </span>
              </div>
              <div className="filter-options">
                  <ul>
                      <li>Business <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                      <li>Design <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                      <li>Development <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                      <li>Marketing <ArrowForwardIcon style={{fontSize:"20px"}}/></li>
                  </ul>
              </div>
          </div>

        </div>
      </div>
    </div>
  );
}
