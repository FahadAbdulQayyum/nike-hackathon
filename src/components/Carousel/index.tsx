"use client"

import { useState, useEffect } from "react"
// import { useRouter } from 'next/router';
import { CiHeart } from 'react-icons/ci'
import { RiEyeLine } from "react-icons/ri";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import Image from "next/image"
import { BiStar } from "react-icons/bi"
import { BsStarFill } from "react-icons/bs"

export function CarouselImage({ flash, category, essential, data }: any) {

    // const router = useRouter();

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel
            setApi={setApi}
        >
            <CarouselContent>
                {!flash ? (
                    Array.from({ length: data.length }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div
                                className="flex justify-center items-center bg-black "
                            >
                                <Card
                                    className="w-full"
                                // onClick={() => router.push('/products')}
                                >
                                    <CardContent
                                        className="flex items-center justify-center p-10 bg-black text-white w-full"
                                    >
                                        <span className="flex w-full justify-between">
                                            <span
                                                className="flex flex-col w-[33%] space-y-4"
                                            >
                                                <span
                                                    className="flex items-center"
                                                >
                                                    <Image src={data[index].icon} alt={data[index].title} width={50} height={50} />
                                                    <p
                                                        className="text-sm ml-5"
                                                    >{data[index].title}</p>
                                                </span>
                                                <span>
                                                    <p
                                                        className="text-5xl font-bold"
                                                    >{data[index].heroTitle}</p>
                                                </span>
                                                <span
                                                    className="flex items-center space-x-2"
                                                >
                                                    <p
                                                        // className="underline"
                                                        className="border-b-[2px]"
                                                    >{data[index].button}</p>
                                                    {data[index].btnIcon}
                                                </span>
                                            </span>
                                            <span>
                                                <Image src={data[index].heroIcon} alt={data[index].title} width={400} height={400} />
                                            </span>
                                        </span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                ) : (
                    !essential ? (
                        data?.map((_: any, index: any) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-none">
                                <div
                                    className="flex justify-center items-center"
                                >
                                    {/* <Card
                                // className="bg-red-300"
                                > */}
                                    <CardContent
                                        className="flex items-center justify-center text-black"
                                    >
                                        <span
                                            className="flex flex-col justify-between font-500"
                                        >
                                            <span
                                                className="bg-primaryy h-68 flex items-center justify-center relative group"
                                            >
                                                <Image src={_.image} alt={_.title} width={400} height={300} className="z-10" />
                                            </span>
                                            <span className="flex flex-col space-y-2 mt-4 w-full">
                                                <span className="flex justify-between text-sm">
                                                    <p>{_.title}</p>
                                                    <p>{'₹' + _.price}</p>
                                                </span>
                                                <span>
                                                    <span className="text-gray-400">{_.category}</span>
                                                </span>
                                            </span>
                                        </span>
                                    </CardContent>
                                    {/* </Card> */}
                                </div>
                            </CarouselItem>
                        )
                        )
                    ) : (
                        data?.map((_: any, index: any) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 rounded-none">
                                <div
                                    className="flex justify-center items-center group"
                                >
                                    {/* <Card
                                // className="bg-red-300"
                                > */}
                                    <CardContent
                                        className="flex items-center justify-center text-black bg-transparent"
                                    >
                                        <span
                                            className="flex flex-col justify-between font-500  relative"
                                        >
                                            <span
                                                // className="bg-primaryy h-48 w-full flex items-center justify-center relative group"
                                                className="h-80 w-72"
                                            >
                                                <Image
                                                    src={_.icon}
                                                    alt={_.title}
                                                    // width={100}
                                                    // height={100}
                                                    layout="fill" // Makes the image cover the span container
                                                    objectFit="cover" // Ensures the image covers the container without distortion
                                                    className="z-0 group-hover:opacity-80 transition duration-300" // Optional hover effect
                                                // className="z-10 group-hover:hidden transition duration-300" 
                                                />
                                            </span>
                                            <span className="absolute bottom-5 left-5 bg-white text-sm font-medium p-2 px-4 rounded-full">{_.category}</span>
                                            {/* <span className="flex flex-col text-center space-y-2 mt-4">
                                            </span> */}
                                        </span>

                                        {/* <span className="flex flex-col justify-between font-500 group">
                                            <span
                                                className="h-28 flex items-center justify-center bg-gray-100 hover:bg-blue-100 rounded-lg relative"
                                            >
                                                <Image
                                                    src={_.icon}
                                                    alt={_.title}
                                                    width={100}
                                                    height={100}
                                                    className="z-10 group-hover:opacity-75 transition duration-300"
                                                />
                                            </span>
                                            <span className="flex flex-col text-center space-y-2 mt-4">
                                                <span className="group-hover:text-blue-500 transition duration-300">{_.title}</span>
                                            </span>
                                        </span> */}


                                    </CardContent>
                                    {/* </Card> */}
                                </div>
                            </CarouselItem>
                        )
                        )
                    )
                )
                }
            </CarouselContent >
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >
    )
}