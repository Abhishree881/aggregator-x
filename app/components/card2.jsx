import React from 'react'

function Card2(props) {
    return (
        <div className='flex jump2 flex-col aspect-ar w-[31%] flex-grow max-w-[380px] rounded-3xl border overflow-hidden'>
            <div className='bg-gray-200 duration-500 w-full h-full flex-[4] bg-center bg-h1' style={{ backgroundImage: `url(${props.url})` }}></div>
            <div className='flex h-full bg-white flex-1 items-center justify-center text-center font-bold text-xl'><span className='mr-1' style={{ color: '#5178ff' }}>{props.number}</span>{props.text}</div>
        </div>
    )
}

export default Card2