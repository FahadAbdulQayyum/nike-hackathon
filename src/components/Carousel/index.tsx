"use client"

import { useState, useEffect } from "react"
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

export function CarouselImage({ flash, category, data }: any) {
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
                    !category ? (
                        data?.map((_: any, index: any) => (
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5 rounded-none">
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
                                                // className="bg-primaryy h-48 w-full flex items-center justify-center relative group"
                                                className="bg-primaryy h-48 w-[120%] flex items-center justify-center relative group"
                                            >
                                                {_.discountSale ? <span className="bg-tertiary absolute top-2 left-2 text-white rounded p-1 px-2 text-sm">{_.discount}</span> : ''}
                                                <span className="bg-white absolute top-2 right-2 text-black rounded p-1 px-2 text-xl"><CiHeart /></span>
                                                <span className="bg-white absolute top-[50px] right-2 text-black rounded p-1 px-2 text-xl"><RiEyeLine /></span>
                                                <Image src={_.image} alt={_.title} width={100} height={100} className="z-10" />
                                                <button className="bg-black absolute bottom-0 left-0 right-0 text-white p-1 px-2 text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    Add to Cart
                                                </button>
                                            </span>
                                            <span className="flex flex-col space-y-2 mt-4">
                                                <span>{_.title}</span>
                                                <span>
                                                    <span className="text-tertiary mr-5">{'$' + _.price}</span>
                                                    <span className="line-through bg-primaryy">{'$' + _.originalPrice}</span>
                                                </span>
                                                <span
                                                    className="flex"
                                                >
                                                    <span className="flex">{Array.from({ length: _.starCounts }).map(v => <><BsStarFill color="orange" /></>)}</span>
                                                    <span className="px-2">({_.point})</span>
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
                            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/5 rounded-none">
                                <div
                                    className="flex justify-center items-center group"
                                >
                                    {/* <Card
                                // className="bg-red-300"
                                > */}
                                    <CardContent
                                        className="flex items-center justify-center text-black border-2 hover:bg-tertiary hover:text-white"
                                    >
                                        <span
                                            className="flex flex-col justify-between font-500"
                                        >
                                            <span
                                                // className="bg-primaryy h-48 w-full flex items-center justify-center relative group"
                                                className="h-28 flex items-center justify-center"
                                            >
                                                {/* <Image src={_.icon} alt={_.title} width={100} height={100} className="z-10 bg-white" /> */}
                                                <Image src={_.icon} alt={_.title} width={100} height={100} className="z-10 group-hover:hidden transition duration-300" />
                                                <Image src={_.iconHover} alt={_.title} width={100} height={100} className="z-10 hidden group-hover:block transition duration-300" />
                                            </span>
                                            <span className="flex flex-col text-center space-y-2 mt-4">
                                                <span>{_.title}</span>
                                            </span>
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