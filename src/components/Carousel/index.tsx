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

export function CarouselImage({ data }: any) {
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
                {Array.from({ length: data.length }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div
                            className="flex justify-center items-center"
                        >
                            <Card
                            >
                                <CardContent
                                    className="flex items-center justify-center p-6"
                                >
                                    <CarouselItem>
                                        <span className="text-4xl font-semibold">
                                            {data[index].title + 'f'}
                                        </span>
                                    </CarouselItem>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel >
    )
}