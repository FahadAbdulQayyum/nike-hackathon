import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className="flex justify-between px-standardSize text-black bg-white mt-5 borderb-2">
            <div className="logo">
                <Image src="/assets/Exclusive.svg" alt="logo" width={100} height={100} />
            </div>
            <div className="menu">
                <ul
                    className="flex space-x-5"
                >
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Sign Up</li>
                </ul>
            </div>
            <div className="icon flex">
                <div className="input">
                    <input placeholder="What are you looking for?" />
                </div>
                <div className="heart">heart</div>
                <div className="cart">cart</div>
            </div>
        </div>
    )
}

export default Navbar
