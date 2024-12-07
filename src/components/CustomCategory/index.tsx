import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'

const CustomCategory = () => {

    const Categorize = [
        { name: "Woman's Fashion", subCategory: true },
        { name: "Men's Fashion", subCategory: true },
        { name: "Electronics", subCategory: false },
        { name: "Home & Lifestyle", subCategory: false },
        { name: "Medicine", subCategory: false },
        { name: "Sports & Outdoor", subCategory: false },
        { name: "Baby's & Toys", subCategory: false },
        { name: "Groceries & Pets", subCategory: false },
        { name: "Health & Beauty", subCategory: false },
    ]

    return (
        <div
            className="border-r-2"
        >
            {Categorize?.map(v => {
                return <div key={v.name}
                    className="text-secondaryy flex justify-between items-center font-medium w-60 pr-3 my-4"
                >
                    <span>
                        {v.name}
                    </span>
                    <span>
                        {v.subCategory && <RiArrowRightSLine />}
                    </span>
                </div>
            })}
        </div>
    )
}

export default CustomCategory
