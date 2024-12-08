import React from 'react'
import Counter from '../Counter'
import { CarouselImage } from '../Carousel'

const GearUp = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center space-y-6">
            {/* <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>Today's</span> */}
            {/* <span className="flex flex-col justify-between items-center"> */}
            <span className="flex flex-col ">
                <h1 className="text-3xl font-bold font-sans">Gear Up</h1>
                {/* <Counter /> */}
                {/* <span></span> */}
                <span className="flex ">
                    <button className="w-1/2 text-end">Shop Men</button>
                    <button className="w-1/2 text-end">Shop Women</button>
                </span>
            </span>
            <span
                className="flex space-x-6"
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
        </div >
    )
}

export default GearUp
