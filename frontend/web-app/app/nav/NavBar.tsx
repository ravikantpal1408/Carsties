import React from 'react'
import { AiOutlineCar } from 'react-icons/ai'

export default function NavBar() {
    return (
        <header className='sticky top-0 z-50 flex justify-between items-center p-5 bg-white text-gray-800 shadow-md'>
            <div className='flex items-center gap-2 text-3xl font-semibold text-red-500'> 
                <AiOutlineCar size={34}/>
                <div>Carsties Auction</div>
            </div>
            <div>Search</div>
            <div>Login</div>
        </header>
    )
}
