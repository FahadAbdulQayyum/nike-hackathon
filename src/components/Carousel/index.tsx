import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
    return (
        <Carousel
        // className="w-full"
        // className="w-full max-w-xs"
        // className="flex justify-center items-center"
        >
            <CarouselContent>
                {Array.from({ length: 15 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div
                            // className="p-1 w-full bg-orange-400"
                            className="flex justify-center items-center"
                        >
                            <Card
                                className="w-full "
                            >
                                <CardContent
                                    // className="flex aspect-square items-center justify-center p-6"
                                    className="flex items-center justify-center p-6"
                                >
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}







// import React from "react";
// import dynamic from "next/dynamic";

// const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
// import "react-multi-carousel/lib/styles.css";

// const responsive = {
//     desktop: {
//         breakpoint: { max: 3000, min: 1024 },
//         items: 3,
//     },
//     tablet: {
//         breakpoint: { max: 1024, min: 464 },
//         items: 2,
//     },
//     mobile: {
//         breakpoint: { max: 464, min: 0 },
//         items: 1,
//     },
// };

// const CustomCarousel = () => {
//     const items = [
//         <div key={1} style={{ backgroundColor: "lightblue", height: "200px" }}>Item 1</div>,
//         <div key={2} style={{ backgroundColor: "lightcoral", height: "200px" }}>Item 2</div>,
//         <div key={3} style={{ backgroundColor: "lightgreen", height: "200px" }}>Item 3</div>,
//     ];

//     return (
//         <Carousel responsive={responsive}>
//             {items}
//         </Carousel>
//     );
// };

// export default CustomCarousel;






// // // components/CustomCarousel.js
// // import React from "react";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";

// // const CustomCarousel = ({ items, deviceType, swipeable = true, draggable = true, autoPlay = true, showDots = false }: any) => {
// //     // Define responsive breakpoints
// //     const responsive = {
// //         superLargeDesktop: {
// //             breakpoint: { max: 4000, min: 3000 },
// //             items: 5,
// //         },
// //         desktop: {
// //             breakpoint: { max: 3000, min: 1024 },
// //             items: 3,
// //         },
// //         tablet: {
// //             breakpoint: { max: 1024, min: 464 },
// //             items: 2,
// //         },
// //         mobile: {
// //             breakpoint: { max: 464, min: 0 },
// //             items: 1,
// //         },
// //     };

// //     return (
// //         <Carousel
// //             swipeable={swipeable}
// //             draggable={draggable}
// //             showDots={showDots}
// //             responsive={responsive}
// //             ssr={true} // Render carousel on server-side
// //             infinite={true}
// //             autoPlay={deviceType !== "mobile" ? autoPlay : false}
// //             autoPlaySpeed={1000}
// //             keyBoardControl={true}
// //             customTransition="all .5"
// //             transitionDuration={500}
// //             containerClass="carousel-container"
// //             removeArrowOnDeviceType={["tablet", "mobile"]}
// //             deviceType={deviceType}
// //             dotListClass="custom-dot-list-style"
// //             itemClass="carousel-item-padding-40-px"
// //         >
// //             {items.map((item: any, index: any) => (
// //                 <div key={index} className="carousel-item">
// //                     {item}
// //                 </div>
// //             ))}
// //         </Carousel>
// //     );
// // };

// // export default CustomCarousel;
