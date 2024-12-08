
import React from "react";
import Image from "next/image";

const DontMiss: React.FC = () => {
    return (
        <div className="px-standardSize">
            <h1 className="font-bold text-xl mb-5">Dont Miss</h1>
            <div className="relative h-screen ">
                <Image
                    src="/assets/dontmiss.svg"
                    alt="Hero Image"
                    layout="fill" // Makes the image fill its parent container
                    objectFit="cover" // Ensures the image covers the container
                    priority // Ensures the hero image is loaded quickly
                />
            </div>
            <div className=" flex flex-col items-center space-y-3 pt-6">
                <h1 className="text-5xl font-bold">FLIGHT ESSENTIALS</h1>
                <p className="text-sm">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
                <button className="text-sm bg-black rounded-full p-2 px-4 text-white ">Shop</button>
            </div>
        </div>
    );
};

export default DontMiss;