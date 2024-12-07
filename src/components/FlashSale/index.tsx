import React from 'react'
import Counter from '../Counter'
import { CarouselImage } from '../Carousel'

const FlashSale = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center border-b-2 space-y-6">
            <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>Today's</span>
            <span className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-sans">Flash Sales</h1>
                <Counter />
                <span></span>
                <span>
                    <button>Left</button>
                    <button>Right</button>
                </span>
            </span>
            <span
                className="flex"
            >
                <CarouselImage flash={true} data={[
                    {
                        discount: '-40%',
                        discountSale: true,
                        image: '/assets/fs-1.svg',
                        title: 'HAVIT HV-G92 Gamepad',
                        price: 120,
                        originalPrice: 160,
                        starCounts: 5,
                        point: 88
                    },
                    {
                        discount: '-35%',
                        discountSale: true,
                        image: '/assets/fs-2.svg',
                        title: 'AK-900 Wired Keyboard',
                        price: 960,
                        originalPrice: 1160,
                        starCounts: 4,
                        point: 75
                    },
                    {
                        discount: '-30%',
                        discountSale: true,
                        image: '/assets/fs-3.svg',
                        title: 'IPS LCD Gaming Monitor',
                        price: 370,
                        originalPrice: 400,
                        starCounts: 5,
                        point: 99
                    },
                    {
                        discount: '-25%',
                        discountSale: true,
                        image: '/assets/fs-4.svg',
                        title: 'S-Series Comfort Chair ',
                        price: 375,
                        originalPrice: 400,
                        starCounts: 4.5,
                        point: 99
                    },
                    {
                        discount: '-25%',
                        discountSale: true,
                        image: '/assets/fs-5.svg',
                        title: 'S-Series Comfort Chair ',
                        price: 375,
                        originalPrice: 400,
                        starCounts: 4.5,
                        point: 99
                    }
                ]} />
            </span>
            <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
            </span>
        </div>
    )
}

export default FlashSale
