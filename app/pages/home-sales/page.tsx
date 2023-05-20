'use client'
import React from 'react'
import Navbar from '../../components/navbar'
import Button from '@/app/components/button'
import Card from '@/app/components/card1'

export default function HomePage() {
    let sampleUrl = 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'
    return (
        <div className='w-full'>
            <Navbar />
            <div className='flex flex-col gap-4 w-full h-64 items-center justify-center mt-12 mb-12'>
                <div className='font-bold text-4xl'>Aggregator X Webflow Template</div>
                <div className='font-medium text-1xl text-gray-600'>Presenting Aggregator X, the ultimate Upvoting Webflow Template.</div>
                <div className='flex gap-4 h-12 mt-8'>
                    <Button type={'primary'} text={'Buy Template'} icon={0} />
                    <Button type={'secondary'} text={'Explore Pages'} icon={0} />
                </div>
            </div>

            <div className='relative flex flex-col gap-4 w-full items-center justify-center mt-12 mb-12 h-auto'>
                <div className='font-bold text-3xl'>What is included in Aggregator X</div>
                <div className='font-medium text-sm text-gray-600 max-w-md text-center'><span className='font-bold text-gray-800'>Aggregator X Webflow </span>Template includes over <span className='font-bold text-gray-800'>20 pages</span> in total, with more than <span className='font-bold text-gray-800'>32 sections.</span></div>

                <div className='w-full px-8 flex flex-col items-center justify-center max-w-[1200px]'>
                    <div className='relative flex flex-row h-auto w-full py-4 items-center justify-between gap-8'>
                        <Card number={'20+'} text={'Pages'} url={sampleUrl} />
                        <Card number={'32+'} text={'Sections'} url={sampleUrl} />
                        <Card number={'25+'} text={'Styles and Symbols'} url={sampleUrl} />
                    </div>
                    <div className='flex border w-full h-[500px] rounded-3xl flex-row overflow-hidden'>
                        <div className='flex flex-1 flex-col h-full w-full'></div>
                        <div className='flex flex-1 flex-col h-full w-full min-w-[600px] bg-gray-400'></div>
                    </div>
                </div>

                <div className='flex gap-4 h-12 mt-8'>
                    <Button type={'primary'} text={'Buy Template'} icon={0} />
                </div>
            </div>
        </div>
    )
}
