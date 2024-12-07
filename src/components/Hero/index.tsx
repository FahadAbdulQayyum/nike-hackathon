import React from 'react'
import CustomCategory from '../CustomCategory'
import Image from 'next/image'
import { CarouselImage } from '../Carousel'
import { RiArrowRightLine } from "react-icons/ri";

const Hero = () => {

    const data = [
        {
            icon: './assets/apple-logo.svg',
            title: 'iPhone 14 Series',
            heroTitle: 'Up to 10% off Voucher',
            button: 'Shop Now',
            btnIcon: <RiArrowRightLine />,
            heroIcon: './assets/iphone-in-hero.svg'
        },
        {
            icon: './assets/apple-logo.svg',
            title: 'iPhone 15 Series',
            heroTitle: 'Up to 10% off Voucher',
            button: 'Shop Now',
            btnIcon: <RiArrowRightLine />,
            heroIcon: './assets/iphone-in-hero.svg'

        },
    ]

    return (
        <div className="px-standardSize flex">
            <div>
                <CustomCategory />
            </div>
            <div
                className="flex items-center justify-center w-full ml-14"
            >
                <CarouselImage data={data} />
                {/* <Image src={"/assets/Exclusive.svg"} alt="hero" width={300} height={300} /> */}
            </div>
        </div>
    )
}

export default Hero
