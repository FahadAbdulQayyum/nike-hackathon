"use client"

import { useState, useEffect } from "react"

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

export function CarouselImage({ flash, data }: any) {
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
                    data?.map((_: any, index: any) => (
                        <CarouselItem key={index} className=" pl-1 md:basis-1/2 lg:basis-1/5">
                            <div
                                className="flex justify-center items-center"
                            >
                                <Card
                                // className="w-full"
                                >
                                    <CardContent
                                        className="flex flex-col items-center justify-center text-black"
                                    >
                                        {/* <span
                                            className="flex flex-col justify-between"
                                        > */}
                                        <span
                                            className="flex flex-col justify-between"
                                        >
                                            <span className="bg-primaryy h-48 flex items-center justify-center">
                                                <Image src={_.image} alt={_.title} width={100} height={100} className="z-10" />
                                            </span>
                                            <span>{_.title}</span>
                                            <span>{_.price}</span>
                                            <span>{_.starCounts}</span>
                                        </span>
                                        {/* </span> */}
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>

                        // <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        //     <div className="p-1">
                        //         <Card>
                        //             <CardContent className="flex aspect-square items-center justify-center p-6">
                        //                 <span className="text-2xl font-semibold">{index + 1}</span>
                        //             </CardContent>
                        //         </Card>
                        //     </div>
                        // </CarouselItem>
                    ))
                )}
            </CarouselContent >
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >
    )
}