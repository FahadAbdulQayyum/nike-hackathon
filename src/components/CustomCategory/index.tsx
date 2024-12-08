import React from 'react'
import { RiArrowRightSLine } from 'react-icons/ri'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

const CustomCategory = () => {

    const Categorize = [
        { name: "Shoes", subCategory: false },
        { name: "Sports Bras", subCategory: false },
        { name: "Tops & T-Shirts", subCategory: false },
        { name: "Hoodies & Sweetshirts", subCategory: false },
        { name: "Jackets", subCategory: false },
        { name: "Trousers & Tights", subCategory: false },
        { name: "Shorts", subCategory: false },
        { name: "Tracksuits", subCategory: false },
        { name: "Jumpsuits & Rompers", subCategory: false },
        { name: "Skirts & Dresses", subCategory: false },
        { name: "Socks", subCategory: false },
        { name: "Accessories & Equipment", subCategory: false },
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
            <div className="border-t-2 my-5 w-full"></div>
            <div>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-40">
                        <span>Gender</span>
                        <span><RiArrowRightSLine /></span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <input type="checkbox" id="men" name="fav_language" value="men" />
                        <label className="ml-2" for="men">Men</label><br />
                        <input type="checkbox" id="women" name="fav_language" value="women" />
                        <label className="ml-2" for="women">Women</label><br />
                        <input type="checkbox" id="unisex" name="fav_language" value="unisex" />
                        <label className="ml-2" for="unisex">UnixSex</label><br />
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="border-t-2 my-5 w-full"></div>
            <div>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-40">
                        <span>Kids</span>
                        <span><RiArrowRightSLine /></span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <input type="checkbox" id="boys" name="fav_language" value="boys" />
                        <label className="ml-2" for="boys">Boys</label><br />
                        <input type="checkbox" id="girls" name="fav_language" value="girls" />
                        <label className="ml-2" for="girls">Girls</label><br />
                        <input type="checkbox" id="unisex" name="fav_language" value="unisex" />
                        <label className="ml-2" for="unisex">UnixSex</label><br />
                    </CollapsibleContent>
                </Collapsible>
            </div>
            <div className="border-t-2 my-5 w-full"></div>
            <div>
                <Collapsible>
                    <CollapsibleTrigger className="flex justify-between items-center w-40">
                        <span>Shop By Price</span>
                        <span><RiArrowRightSLine /></span>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <input type="checkbox" id="under" name="fav_language" value="under" />
                        <label className="ml-2" for="under">Under 20 000</label><br />
                        <input type="checkbox" id="above" name="fav_language" value="women" />
                        <label className="ml-2" for="above">Above 20 000</label><br />
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </div>
    )
}

export default CustomCategory
