'use client'
import React, { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Footer from "@/app/components/Footer";
import Landingpage from '../../components/home-components/landingpage'
import FeaturedProducts from "@/app/components/home-components/FeaturedProducts";
import Collections from "@/app/components/home-components/Collections";

export default function HomePage() {
    useEffect(() => {
    document.title = 'Home - Aggregator X';
    }, []);
    return (
        <div className='home-div'>
            <Navbar />
            <Landingpage/>
            <FeaturedProducts/>
            <Collections/>
            <Footer/>
        </div>
    )
}
