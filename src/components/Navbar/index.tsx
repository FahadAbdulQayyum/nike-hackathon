import Image from 'next/image'
import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { PiShoppingCartThin } from 'react-icons/pi'

const Navbar = () => {
    return (
        <div className="flex justify-between px-standardSize text-black bg-white mt-5 border-b-2 p-4">
            <div className="logo">
                <Image src="/assets/Exclusive.svg" alt="logo" width={100} height={100} />
            </div>
            <div className="menu flex">
                <ul
                    className="flex space-x-5"
                >
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className="icon flex items-center space-x-4">
                <div className="input flex justify-center items-center bg-primary p-2 space-x-4">
                    <input className="bg-transparent" placeholder="What are you looking for?" />
                    <CiSearch className="text-2xl" />
                </div>
                <div className="heart">
                    <CiHeart className="text-2xl" />
                </div>
                <div className="cart">
                    <PiShoppingCartThin className="text-2xl" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
