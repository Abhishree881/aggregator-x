'use client'
import React, { useEffect } from 'react'
import Navbar from '../../components/navbar'
import Footer from "@/app/components/Footer";
import Landingpage from '../../components/home-components/landingpage'

export default function HomePage() {
    useEffect(() => {
    document.title = 'Home - Aggregator X';
    }, []);
    return (
        <div className='home-div'>
            <Navbar />
            <Landingpage/>
            <Footer/>
        </div>
    )
}
