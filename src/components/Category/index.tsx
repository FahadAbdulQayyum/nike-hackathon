import { CarouselImage } from '../Carousel'

const Category = () => {
    return (
        <div className="p-standardSize flex flex-col justify-center border-b-2 space-y-6">
            <span className="text-tertiary flex items-center font-bold"><div className="w-5 h-10 bg-tertiary mr-5 rounded"></div>Categories</span>
            <span className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-sans">Browse By Category</h1>
                <span>
                    <button>Left</button>
                    <button>Right</button>
                </span>
            </span>
            <span
                className="flex"
            >
                <CarouselImage category={true} flash={true} data={[
                    {
                        icon: '/assets/phone.svg',
                        iconHover: '/assets/hoverphone.svg',
                        title: 'Phones',
                    },
                    {
                        title: 'Computers',
                        iconHover: '/assets/hovercomputer.svg',
                        icon: '/assets/computer.svg',
                    },
                    {
                        icon: '/assets/smartwatch.svg',
                        iconHover: '/assets/hoversmartwatch.svg',
                        title: 'SmartWatch',
                    },
                    {
                        icon: '/assets/camera.svg',
                        iconHover: '/assets/hovercamera.svg',
                        title: 'Camera',
                    },
                    {
                        icon: '/assets/headphone.svg',
                        iconHover: '/assets/hoverheadphone.svg',
                        title: 'HeadPhones',
                    },
                    {
                        icon: '/assets/gamepad.svg',
                        iconHover: '/assets/hovergamepad.svg',
                        title: 'Gaming',
                    },
                ]} />
            </span>
            {/* <span className="text-center">
                <button className="bg-tertiary p-4 text-white rounded">View All Products</button>
            </span> */}
        </div>
    )
}

export default Category
