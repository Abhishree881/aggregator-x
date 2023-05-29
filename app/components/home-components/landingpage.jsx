"use client";
import React from "react";
import "../../styles/home/landing.scss";
import Button from "../../components/button";

export default function Landingpage() {
  return (
    <div className="landing-div">
      <div className="cp1"></div>
      <div className="cp2"></div>
      <div className="cp3"></div>
      <div className="cp4"></div>
      <div className="cp5"></div>
      <div className="cp6"></div>
      <div className="cp7"></div>
      <div className="cp8"></div>
      <div className="cp9"></div>
      <div className="cp10"></div>
      <div className="landing-box">
        <h1>Discover the next SaaS product today.</h1>
        <div className="div">
          Lorem ipsum dolor sit amet consectetur adipiscing elit etiam nisl
          tellus dolor egestas quis laoreet fames odio habitasse orci.
        </div>
        <div style={{ display: "flex" }}>
          <div className="landing-search">
            <input
              type="text"
              className="search"
              placeholder="Search for..."
            ></input>
            <Button text={"Search"} type={"primary"} />
          </div>
          <div className="landing-filter">Filter by Category</div>
        </div>
      </div>
    </div>
  );
}
