import React from 'react'

function Card1(props) {
    return (
        <div className='flex flex-col aspect-ar w-[33%] rounded-3xl border overflow-hidden'>
            <div className='bg-gray-200 duration-500 w-full h-full flex-[3] bg-center bg-h1 hover:bg-h2' style={{ backgroundImage: `url(${props.url})` }}></div>
            <div className='flex h-full flex-1 items-center justify-center text-center font-bold text-xl'><span className='mr-1' style={{ color: '#5178ff' }}>{props.number}</span>{props.text}</div>
        </div>
    )
}

export default Card1