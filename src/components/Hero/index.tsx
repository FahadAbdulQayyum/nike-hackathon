import React from 'react'
import CustomCategory from '../CustomCategory'
import Image from 'next/image'
import { CarouselDemo } from '../Carousel'

const Hero = () => {
    return (
        <div className="px-standardSize flex">
            <div>
                <CustomCategory />
            </div>
            <div
                className="flex items-center justify-center w-full"

            >
                <CarouselDemo />
                {/* <Image src={"/assets/Exclusive.svg"} alt="hero" width={300} height={300} /> */}
            </div>
        </div>
    )
}

export default Hero
