'use client'
import Navbar from '../../components/navbar'
import Button from '@/app/components/button'
import Button2 from '@/app/components/button2'
import '../../styles/about.css'
import '../../../app/globals.css'

import React, {useEffect, useState} from 'react'
const sponsorData = [
    {
        title: 'Google',
    },
    {
        title: 'Google',
    },
    {
        title: 'Google',
    },
    {
        title: 'Google',
    },
    {
        title: 'Google',
    }
]
const aboutData = [
    {
        title: 'Openness',
        img: 'https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf0378f1d94d4e0cd2b57a_globe-simple-aggregator-x-webflow-template.svg',
        desc: 'Lorem ipsum dolor sit amet con adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
    {
        title: 'Growth',
        img: 'https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf03b076518206e31b70f4_pencil-simple-aggregator-x-webflow-template.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
    {
        title: 'Quality',
        img: 'https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf03942bd8ae1cfb536caa_medal-aggregator-x-webflow-template.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
    {
        title: 'Teamwork',
        img: 'https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf0411bd827f6977c348be_users-aggregator-x-webflow-template.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    }, {
        title: 'Commitment',
        img: 'https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf03d1ec34fc5d6195700f_shield-check-aggregator-x-webflow-template.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    }, {
        title: 'Ownership',
        img: 'https://assets.website-files.com/63bed0273cfe5e3f80742329/63bf03706df40f21ee00c25f_flag-aggregator-x-webflow-template.svg',
        desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    }
]
const faq = [
    {
        index: 1,
        ques: 'How do I post my first product?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
    {
        index: 2,
        ques: 'Can I re-post my product?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
    {
        index: 3,
        ques: 'Melody itni chocolaty kyu hai?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
    {
        index: 4,
        ques: 'How do I feature my own product after launching?',
        ans: 'Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum tempus nisi interdum euismod etiam faucibus.',
    },
]


function About() {
    useEffect(() => {
        document.title = 'About - Aggregator X';
    }, []);
    const [active, setActive] = useState<number[]>([]);
    function Checker(x: number): boolean {
        if (active.includes(x))
            return true;
        return false
    }
    const HandleClick = (e: number) => {
        if (active.includes(e)) {
            setActive(prevActive => prevActive.filter(item => item !== e));
        } else {
            setActive(prevActive => [...prevActive, e]);
        }
    }
    return (
        <div className='w-full flex flex-col h-full items-center justify-center'>
            <div className='w-full max-w-[1250px] px-8'>
                {/* <Navbar /> */}
            </div>
            <div className='w-full h-[425px] my-8 flex felx-row max-w-[1250px] gap-16 px-8 overflow-hidden col-1050 about-box'>
                <div className='w-full h-full flex-[2] flex flex-col justify-center'>
                    <div className='text-4xl font-bold'>About Aggregator</div>
                    <div className='text-1xl font-medium text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor amet pellentesque aliquet porta viverra tortor et eget curabitur ac cras risus dui ullamcorper ornare ipsum sed odio dignissim sit dictum nunc cras feugiat tempor est nibh semper posuere.</div>
                    <div className='flex gap-4 h-12 mt-8'>
                        <Button2 type={'primary'} text={'Publish Product'} icon={1} />

                    </div>
                </div>
                <div className='w-full h-[425px] rounded-3xl bg-gray-300 flex-[3]'></div>
            </div>
            <div className='w-full h-fit flex max-w-[1250px] flex-row col-1050 px-8'>
                <div className='w-full min-h-[100px] min-w-[200px] text-2xl flex items-center justify-center font-semibold flex-1'>Our Partners:</div>
                <div className='w-full min-h-[100px] flex flex-2 flex-wrap gap-2'>
                    {sponsorData.map((index) => {
                        return (
                            <div className='w-full min-h-[100px] min-w-[150px] bg-gray-100 text-1xl flex items-center justify-center font-semibold flex-1'>{index.title}</div>
                        )
                    })}
                </div>

            </div>
            <div className='w-full h-full bg-primary-gray flex flex-col items-center justify-center mt-16 py-16'>
                <div className='w-full max-w-[1250px] h-fit flex flex-col items-center gap-8 justify-center py-16'>
                    <div className='max-w-[500px] text-center text-4xl font-bold'>The values that drives everything we do</div>
                    <div className='max-w-[500px] text-center text-1xl font-medium text-gray-700 '>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor amet pellentesque.</div>
                </div>
                <div className='w-full max-w-[1250px]  h-fit flex flex-wrap items-center justify-center mb-16 px-8 gap-8'>
                    {aboutData.map((index) => {
                        return (
                            <div className='w-[28%] min-w-[250px] about-card h-[275px] border rounded-2xl bg-white flex flex-col justify-center p-8 gap-2'>
                                <div className='bg-gray-100 h-[50px] w-[50px] bg-center bg-s1 bg-no-repeat rounded-[50%]' style={{ backgroundImage: `url(${index.img})` }}></div>
                                <div className='text-1xl font-bold'>{index.title}</div>
                                <div className='text-smm font-medium text-gray-700 '>{index.desc}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='w-full h-fit bg-white flex flex-col items-center justify-center py-16'>
                <div className='w-full max-w-[1250px] h-fit flex flex-col items-center gap-4 justify-center py-16'>
                    <div className='max-w-[700px] text-center text-4xl font-bold'>Frequently Asked Questions</div>
                    <div className='max-w-[700px] text-center text-1xl font-medium text-gray-400 '>Lorem ipsum dolor sit amet consectetur adipiscing elit risus metus velit in mattis magna facilisi tempor mattis id dolor malesuada posuere. </div>
                </div>
                <div className='w-full h-fit max-w-[1250px] flex flex-col items-center justify-center gap-4 px-4'>
                    {faq.map((index) => {
                        return (
                            <>
                                <div className={Checker(index.index) ? 'faq-expand active border bg-primary text-white' : 'faq-expand border'} onClick={() => HandleClick(index.index)}>
                                    <div className='flex items-center justify-between w-full px-8'>
                                        <div className='text-1.5xl font-bold'>{index.ques}</div>
                                        <div className='border h-12 w-12 rounded-[50%] min-h-[48px] min-w-[48px]'></div>
                                    </div>
                                    {Checker(index.index) ? <div className='p-8'>{index.ans}</div> : <></>}

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default About