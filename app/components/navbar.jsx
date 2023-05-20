import React, { useState } from 'react'
import '../styles/navbar.css'
import Button from '../components/button'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function navbar() {
    const [cartCount, setCartCount] = useState(0)
    return (
        <nav className="bg-white my-8">
            <div className="max-w-7xl m-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <div className='flex items-center gap-12'>
                        <a href="#" className="text-black font-bold logo-div"></a>

                        <div className="flex">
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium menu-item">Home</a>
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium menu-item">Products</a>
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium flex flex-row menu-item items-start pages">Pages<span className='hover-arrow'><KeyboardArrowUpOutlinedIcon sx={{ marginBottom: '-2px' }} /></span></a>
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium menu-item">Contacts</a>
                            <a href="#" className="text-black px-3 py-2 rounded-md text-sm font-medium menu-item">Cart({cartCount})</a>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <Button text={'Post a free product'} type={'secondary'} icon={0} />
                        <Button text={'Post a featured product'} type={'primary'} icon={1} />
                    </div>

                </div>
            </div>
        </nav>

    )
}

export default navbar