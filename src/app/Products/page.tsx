"use client"

import CustomCategory from '@/components/CustomCategory'
import Image from 'next/image'
import { RiLoader3Fill } from "react-icons/ri";
import { useRouter } from 'next/navigation';

const Products = () => {

    const btns = [
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
        { name: 'Best Selling Products' },
    ]

    const data = [
        {
            id: 0,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        },
        {
            id: 1,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 2,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 3,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 4,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 5,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 6,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 7,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 8,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 9,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 10,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        }, {
            id: 11,
            status: 'Just In',
            color: '1 Colour',
            desc: 'Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.',
            category: 'Men\'s shoe',
            image: '/assets/bsp-1.svg',
            title: 'The north coat',
            price: '8 695.00'
        },
    ]

    const router = useRouter();

    // const handleImageClick = (id: number) => {
    const handleImageClick = (product: { id: number }) => {
        // router.push(`/Products/${id}`); // Navigate to the product detail page
        const queryString = encodeURIComponent(JSON.stringify(product));
        router.push(`/Products/${product.id}?data=${queryString}`);
    }

    return (
        <div className="px-standardSize py-5">
            <div className="flex justify-between">
                <h1 className="font-bold">New (500)</h1>
                <span className="flex space-x-4">
                    <p>Hide Filter</p>
                    <p>Sort By </p>
                </span>
            </div>
            <div className="flex px-standardSize">
                <span>
                    <CustomCategory />
                </span>
                <span className="grid grid-cols-3 gap-4">
                    {data.map(v => <div>
                        <span className="bg-primaryy"
                            onClick={() => handleImageClick(v)}
                        >
                            <Image src={v.image} alt={v.title}
                                width={500} height={500}
                                // layout="fill" // Makes the image cover the span container
                                // objectFit="cover" // Ensures the image covers the container without distortion
                                className="bg-primaryy"
                            />
                        </span>
                        <span>
                            <p className="text-tertiary">{v?.status}</p>
                            <p className="font-bold">{v?.title}</p>
                            <p className="text-gray-400">{v?.category}</p>
                            <p className="text-gray-400">{v?.color}</p>
                            <p className="mt-4 font-bold">{'MRP : ₹' + v?.price}</p>
                        </span>
                    </div>)}
                </span>
            </div>
            <span className="flex justify-center items-center py-10">
                <RiLoader3Fill className="text-3xl" />
            </span>
            <div className="border-t-2 mt-5">
                <h1 className="font-bold mt-10">Related Categories</h1>
                <span
                    className="space-y-4 space-x-2"
                >
                    {btns.map(b => <button className="border rounded-full space-x-5 text-sm p-2 px-4">{b.name}</button>)}
                </span>
            </div>
        </div>
    )
}

export default Products
