'use client'
import Navbar from '../../components/navbar'
import '../../styles/blog.css'
import '../../../app/globals.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {useEffect} from "react";

export default function BlogPost() {
    useEffect(() => {
        document.title = 'Blog Post - Aggregator X';
    }, []);
    return (
        <div className='w-full flex flex-col h-full items-center justify-center'>
            <div className='w-full max-w-[1250px] px-8'>
                {/* <Navbar /> */}
            </div>
            <div className='w-full max-w-[1250px] px-8 flex h-[100px] items-center justify-center mt-12 gap-4 flex-wrap'>
                <div className='jump h-[35px] w-[110px] flex items-center justify-center hover-secondary-bg border button border-black py-2 px-4 leading-none rounded-3xl whitespace-normal text-center text-smm font-semibold'>Marketing
                </div>
                <div className='jump h-[35px] w-auto bg-gray-200 leading-none rounded-3xl whitespace-normal text-center text-smm font-medium flex items-center justify-center py-2 px-4'>
                    Jan 12,2023
                </div>
                <div className='jump h-[35px] w-auto bg-gray-200 leading-none rounded-3xl whitespace-normal text-center text-smm font-medium flex items-center justify-center py-2 px-4 gap-1'>
                    <span><AccessTimeIcon fontSize='small' /></span>
                    <span>8 min read</span>
                </div>
            </div>
            <div className='w-full max-w-[1250px] px-8 flex flex-col items-center justify-center gap-8'>
                <div className='text-3xl text-center font-bold max-w-[850px]'>10 product design tips to make users fall in love with your app
                </div>
                <div className='text-1xl text-center text-gray-400 font-semibold max-w-[850px]'>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.</div>
                <div className='w-full aspect-[1/0.5] min-h-[250px] border rounded-3xl my-4 bg-gray-200'>
                </div>
            </div>
            <div className='w-full max-w-[1250px] px-8 flex flex-col items-center justify-center my-16 gap-4'>
                <div className='text-3xl text-left font-bold max-w-[850px] w-full'>Design a delightful experience
                </div>
                <div className='text-1xl text-left text-gray-400 font-semibold max-w-[850px] text-smm w-full'>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.</div>
                <div className="max-w-[850px] text-gray-400 font-semibold text-smm w-full">
                    <ul className="list-decimal list-inside">
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare varius</li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur</li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                        <li className="mb-2">Fourth bullet point</li>
                    </ul>
                </div>
                <div className='mt-4'></div>
                <div className='text-2xl text-left font-bold max-w-[850px] w-full'>Listen your customers
                </div>
                <div className='text-1xl text-left text-gray-400 font-semibold max-w-[850px] text-smm w-full'>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.</div>
                <div className='w-full aspect-[1/0.5] min-h-[250px] border rounded-3xl my-4 max-w-[850px] bg-gray-200'></div>
                <div className='mt-4'></div>
                <div className='text-1.5xl text-left font-bold max-w-[850px] w-full'>Improve clarity of your app
                </div>
                <div className='text-1xl text-left text-gray-400 font-semibold max-w-[850px] text-smm w-full'>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.</div>
                <div className="max-w-[850px] text-gray-400 font-semibold text-smm w-full">
                    <ul className="list-disc list-inside">
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit ornare varius</li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur</li>
                        <li className="mb-2">Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
                        <li className="mb-2">Fourth bullet point</li>
                    </ul>
                </div>
                <div className='mt-4'></div>
                <div className='text-1xl text-left font-bold max-w-[850px] w-full'>Conclusion
                </div>
                <div className='text-1xl text-left text-gray-400 font-semibold max-w-[850px] text-smm w-full'>Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.Lorem ipsum dolor sit amet consectetur adipiscing elit vulputate ut aenean gravida ornare varius elit in dictum nisi tristique egestas consequat cursus habitant elementum sit rhoncus nisi aliquam.</div>
                <div className='w-full h-[300px] border rounded-3xl my-8 max-w-[850px] flex conc-card bg-gray-200'>
                    {/* Card to be built here */}
                </div>
            </div>
        </div >
    )
}