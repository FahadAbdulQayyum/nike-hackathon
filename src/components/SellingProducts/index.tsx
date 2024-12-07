import React from 'react'
import Counter from '../Counter'
import { CarouselImage } from '../Carousel'

const SellingProducts = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center border-b-2 space-y-6">
            <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>This Month</span>
            <span className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-sans">Best Selling Products</h1>
                <span>
                    <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
                </span>
            </span>
            <span
                className="flex"
            >
                <CarouselImage flash={true} data={[
                    {
                        discount: '-40%',
                        discountSale: false,
                        image: '/assets/bsp-1.svg',
                        title: 'The north coat',
                        price: 260,
                        originalPrice: 360,
                        starCounts: 5,
                        point: 65
                    },
                    {
                        discount: '-35%',
                        discountSale: false,
                        image: '/assets/bsp-2.svg',
                        title: 'Gucci duffle bag',
                        price: 960,
                        originalPrice: 1160,
                        starCounts: 4,
                        point: 65
                    },
                    {
                        discount: '-30%',
                        discountSale: false,
                        image: '/assets/bsp-3.svg',
                        title: 'RGB liquid CPU Cooler',
                        price: 160,
                        originalPrice: 170,
                        starCounts: 5,
                        point: 65
                    },
                    {
                        discount: '-25%',
                        discountSale: false,
                        image: '/assets/bsp-4.svg',
                        title: 'Small BookSelf ',
                        price: 365,
                        originalPrice: 170,
                        starCounts: 5,
                        point: 65
                    },
                    {
                        discount: '-25%',
                        discountSale: false,
                        image: '/assets/bsp-4.svg',
                        title: 'Small BookSelf ',
                        price: 365,
                        originalPrice: 170,
                        starCounts: 5,
                        point: 65
                    },
                    {
                        discount: '-25%',
                        discountSale: false,
                        image: '/assets/bsp-4.svg',
                        title: 'Small BookSelf ',
                        price: 365,
                        originalPrice: 170,
                        starCounts: 5,
                        point: 65
                    },
                ]} />
            </span>
            {/* <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
            </span> */}
        </div>
    )
}

export default SellingProducts
