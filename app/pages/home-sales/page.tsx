'use client'
import React from 'react'
import Navbar from '../../components/navbar'
import Button from '@/app/components/button'
import Card from '@/app/components/card1'
import Card2 from '@/app/components/card2'
import PageData from './data'
import PageData2 from './data2'
import '../../globals.css'

export default function HomePage() {
    let sampleUrl = 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg'
    let url2 = 'https://i.ibb.co/rvxpBpZ/temp.jpg'
    let url3 = 'https://i.ibb.co/wpccQg1/figma.png'

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

                <div className='w-full px-8 flex flex-col items-center justify-center max-w-[1275px]'>
                    <div className='relative flex flex-row h-auto w-full py-4 items-center justify-between gap-8'>
                        <Card number={'20+'} text={'Pages'} url={sampleUrl} />
                        <Card number={'32+'} text={'Sections'} url={sampleUrl} />
                        <Card number={'25+'} text={'Styles and Symbols'} url={sampleUrl} />
                    </div>
                    <div className='flex border w-full h-[500px] rounded-3xl flex-row overflow-hidden'>
                        <div className='flex flex-1 flex-col h-full w-full justify-center p-12 gap-2'>
                            <div className='h-[50px] w-[40px] bg-center bg-h1 mb-4' style={{ backgroundImage: `url(${url3})` }}></div>
                            <div className='font-bold text-xl'>Figma file included</div>
                            <div className='text-gray-400'>Send us an email to <span className='text-black font-semibold'>aggregatorx@brixtemplates.com</span> with your purchase receipt, and we will send you the editable Figma file for the Aggregator X template.</div>

                            <div className='flex gap-4 h-12 mt-8'>
                                <Button type={'secondary'} text={'Request Figma file'} icon={0} />
                            </div>

                        </div>
                        <div className='flex flex-1 flex-col h-full w-full duration-500 min-w-[600px] bg-center bg-h1 hover:bg-h2 bg-grey-primary' style={{ backgroundImage: `url(${url2})` }}></div>
                    </div>
                </div>

                <div className='flex gap-4 h-12 mt-8'>
                    <Button type={'primary'} text={'Buy Template'} icon={0} />
                </div>
            </div>
            <div className='bg-primary-gray w-full h-fit flex flex-col py-12 items-center justify-center'>
                <div className='font-bold text-3xl mb-6'>Main Pages</div>
                <div className='text-gray-400'>Take a look at the main pages included in the Aggregator X Template.</div>
                <div className='max-w-[1275px] flex flex-row flex-wrap gap-8 pl-8 justify-between pr-8 my-16'>
                    {PageData.map((index) => {
                        return (
                            <Card2 text={index.title} url={sampleUrl} />
                        )
                    })}
                </div>
                <div className='flex gap-4 h-12'>
                    <Button type={'primary'} text={'Buy Template'} icon={0} />
                </div>
            </div>

            <div className='bg-white w-full h-fit flex flex-col py-12 items-center justify-center'>
                <div className='font-bold text-3xl mb-6'>Utility Pages</div>
                <div className='text-gray-400'>Take a look at the utility pages included in the Aggregator X Template.</div>
            </div>
            <div className='relative flex flex-col gap-4 w-full mb-12 items-center justify-center h-auto'>
                <div className='w-full px-8 flex flex-col items-center justify-center max-w-[1275px]'>
                    <div className='relative flex flex-row h-auto w-full items-center justify-center gap-8'>
                        <Card text={'404 Not Found'} url={sampleUrl} />
                        <Card text={'Password Protected'} url={sampleUrl} />
                    </div>
                </div>
                <div className='flex gap-4 h-12 mt-12'>
                    <Button type={'primary'} text={'Buy Template'} icon={0} />
                </div>
            </div>
            <div className='relative bg-primary-gray flex flex-col gap-4 w-full py-12 items-center justify-center h-auto'>
                <div className='w-full px-8 flex flex-col items-center justify-center max-w-[1275px]'>
                    <div className='font-bold text-4xl text-center max-w-[750px]'>The Aggregator X Webflow Template also comes with more surprises...</div>
                    <div className='relative flex flex-col w-full h-auto items-center justify-center gap-8'>
                        {PageData2.map((index) => {
                            return (
                                <div className={index.index % 2 === 1 ? 'w-full h-auto justify-between flex flex-row my-16' : 'w-full h-auto m-auto flex flex-row-reverse my-16 gap-16 justify-between'}>
                                    <div className='w-[40%] bg-primary-gray flex flex-col justify-center'>
                                        <div className='font-bold text-2xl'>{index.heading}</div>
                                        <div className='font-small text-gray-600 mt-4 max-w-[90%]'>{index.text}</div>
                                        {index.pbutton ? <div className='flex gap-4 h-12 mt-10'>
                                            <Button type={'primary'} text={index.pbutton} icon={0} />
                                            {index.sbutton ? <Button type={'secondary'} text={index.sbutton} icon={0} /> : <></>}
                                        </div> : <></>}

                                    </div>
                                    <div className='w-[52.5%] max-w-[700px] aspect-[1.1] bg-gray-400 rounded-3xl bg-center bg-h1' style={{ backgroundImage: `url(${index.img})` }}></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
