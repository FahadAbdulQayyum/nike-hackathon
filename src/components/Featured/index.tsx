
import React from "react";
import Image from "next/image";

const Featured: React.FC = () => {
    return (
        <div className="px-standardSize">
            <h1 className="font-bold text-xl mb-5">Featured</h1>
            <div className="relative h-screen ">
                <Image
                    src="/assets/featured.svg"
                    alt="Hero Image"
                    layout="fill" // Makes the image fill its parent container
                    objectFit="cover" // Ensures the image covers the container
                    priority // Ensures the hero image is loaded quickly
                />
            </div>
            <div className=" flex flex-col items-center space-y-3 pt-6">
                <h1 className="text-5xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
                <p className="text-sm">Cause everyone should know the feeling of running in that perfect pair.</p>
                <button className="text-sm bg-black rounded-full p-2 px-4 text-white ">Find Your Shoe</button>
            </div>
        </div>
    );
};

export default Featured;







// // import React from 'react'
// // import Image from 'next/image'

// // const Hero = () => {

// //     return (
// //         <div className="px-standardSize flex">
// //             <Image src={"/assets/hero-image.svg"} alt={"hero"} width={100} height={100} />
// //         </div>
// //     )
// // }

// // export default Hero
