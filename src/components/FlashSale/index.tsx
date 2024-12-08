import React from 'react'
import Counter from '../Counter'
import { CarouselImage } from '../Carousel'

const FlashSale = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center space-y-6">
            {/* <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>Today's</span> */}
            <span className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-sans">Best of Air Max</h1>
                {/* <Counter /> */}
                {/* <span></span> */}
                {/* <span>
                    <button>Left</button>
                    <button>Right</button>
                </span> */}
            </span>
            <span
                className="flex"
            >
                <CarouselImage flash={true} data={[
                    {
                        image: '/assets/best-nike-1.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-2.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                    {
                        image: '/assets/best-nike-3.svg',
                        title: 'Nike Air Max Pulse',
                        category: 'Women\'s Shoes',
                        price: '13 995'
                    },
                ]} />
            </span>
            {/* <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
            </span> */}
        </div>
    )
}

export default FlashSale
