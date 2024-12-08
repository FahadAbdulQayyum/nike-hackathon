import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-standardSize text-black bg-white border-b-2 py-2">
            <div className="logo">
                <Image src="/assets/nike-logo-1.svg" alt="logo" width={80} height={80} />
            </div>
            <div className="menu flex">
                <ul
                    className="flex space-x-10 cursor-pointer font-medium"
                >
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">New & Featured</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Men</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Women</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">Kids</li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">
                        <Link className="hover:border-b-2 hover:border-secondaryy h-7" href="/Products">Sale</Link>
                    </li>
                    <li className="hover:border-b-2 hover:border-secondaryy h-7">SNKRS</li>
                </ul>
            </div>
            <div className="icon flex items-center space-x-4">
                <div className="input flex justify-center items-center bg-primaryy p-2 space-x-4 rounded-full">
                    <CiSearch className="text-2xl" />
                    <input className="bg-transparent" placeholder="Search" />
                </div>
                <div className="heart">
                    <CiHeart className="text-2xl" />
                </div>
                <div className="cart">
                    <IoBagOutline className="text-2xl" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
