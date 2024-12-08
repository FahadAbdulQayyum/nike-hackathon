
import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
    return (
        <div className="relative h-screen mx-standardSize">
            <Image
                src="/assets/hero-image.svg"
                alt="Hero Image"
                layout="fill" // Makes the image fill its parent container
                objectFit="cover" // Ensures the image covers the container
                priority // Ensures the hero image is loaded quickly
            />
        </div>
    );
};

export default Hero;







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
