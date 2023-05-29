import React, { useState } from "react";
import "../styles/footer.css"
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../../assets/logo.svg"
function Footer() {
    return(
        <div className="footer">
            <footer className="bgDark ">
                {/* <!-- Grid container --> */}
                <div className="container">
                    {/* <!-- Section: Social media --> */}
                    <section className="footer-logo-block">
                            <div className="footer-logo-div">
                                <Image className="footer-logo" src={logo} alt="logo" />
                            </div>
                            <div className="footer-clg-name">
                                <h4>
                                    Lorem ipsum dolor amet consectetur adipiscing elit duis blandit viverra.
                                </h4>
                            </div>
                            <div className="footer-social">
                                {/* <!-- Facebook --> */}
                                <a className="btn " href="#" role="button" target="blank">
                                    <FacebookIcon style={{height:"18px"}} />
                                </a>

                                {/* <!-- Twitter --> */}
                                <a className="btn" href="#" role="button" target="blank">
                                    <TwitterIcon />
                                </a>

                                {/* <!-- Instagram --> */}
                                <a className="btn" href="#" role="button" target="blank">
                                    <InstagramIcon />
                                </a>

                                {/* <!-- Linkedin --> */}
                                <a className="btn " href="#" role="button" target="blank">
                                    <LinkedInIcon />
                                </a>
                            </div>

                    </section>
                    {/* <!-- Section: Links --> */}
                    <section className="">

                            {/* <!--Grid row--> */}
                            <div className="footer-row">
                                {/* <!--Grid column--> */}
                                <div className="">
                                    <ul className="list-unstyled ">
                                        <h1 style={{color:"black",padding:"2px", fontSize:"20px", fontWeight:"600", marginBottom:"10px"}}>Main pages</h1>

                                        <li>
                                            <a href="" target="blank" className="text-white-footer">
                                                Home
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/pages/home-sales" className="text-white-footer" target="blank">
                                                Home Sales
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/pages/about" className="text-white-footer" target="blank">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Products
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Product Category
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Product Single
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Product Tag
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Creators
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
                    </section>
                    <section className="">

                            {/* <!--Grid row--> */}
                            <div className="footer-row">
                                <div className="">
                                    <ul className="list-unstyled ">
                                        <h1 className="list-head" style={{color:"black",padding:"2px", fontSize:"20px", fontWeight:"600", marginBottom:"10px"}}>Utility pages</h1>
                                        <li>
                                            <a href="" target="blank" className="text-white-footer">
                                                Home
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/pages/home-sales" className="text-white-footer" target="blank">
                                                Home Sales
                                            </a>
                                        </li>

                                        <li>
                                            <a href="/pages/about" className="text-white-footer" target="blank">
                                                About
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Products
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Product Category
                                            </a>
                                        </li>

                                        <li>
                                            <a href="" className="text-white-footer" target="blank">
                                                Creators
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}


                    </section>
                    <section className="">
                        <div className="footer-row">
                            <div className="">
                                <ul className="list-unstyled ">
                                    <h1 className="list-head" style={{color:"black",padding:"2px", fontSize:"20px", fontWeight:"600", marginBottom:"10px"}}>Categories</h1>
                                    <li>
                                        <a href="" target="blank" className="text-white-footer">
                                            Home
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/pages/home-sales" className="text-white-footer" target="blank">
                                            Home Sales
                                        </a>
                                    </li>

                                    <li>
                                        <a href="/pages/about" className="text-white-footer" target="blank">
                                            About
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" className="text-white-footer" target="blank">
                                            Products
                                        </a>
                                    </li>


                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        </div>
    );
}
export default Footer;
