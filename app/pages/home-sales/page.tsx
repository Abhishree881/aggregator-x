'use client'
import React from 'react'
import Navbar from '../../components/navbar'
import Button from '@/app/components/button'

export default function HomePage() {
    return (
        <div className='home-div'>
            <Navbar />
            <div className='flex flex-col gap-4 w-full h-64 items-center justify-center mt-12 mb-12'>
                <div className='font-bold text-4xl'>Aggregator X Webflow Template</div>
                <div className='font-medium text-1xl text-gray-600'>Presenting Aggregator X, the ultimate Upvoting Webflow Template.</div>
                <div className='flex gap-4 h-12 mt-8'>
                    <Button type={'primary'} text={'Buy Template'} icon={0} />
                    <Button type={'secondary'} text={'Explore Pages'} icon={0} />
                </div>
            </div>
        </div>
    )
}
