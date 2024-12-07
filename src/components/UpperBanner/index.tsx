import React from 'react'

const UpperBanner = () => {
    return (
        <div
            className="bg-black text-white flex justify-between py-5 px-standardSize"
        >
            <div className="left-portion"></div>
            <div className="mid-portion flex space-x-5">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <button
                    className="underline"
                >ShopNow</button>
            </div>
            <div className="right-portion">
                <select name="" id="" className="bg-black">
                    <option value="eng">English</option>
                    <option value="urdu">Urdu</option>
                    <option value="hindi">Hindi</option>
                </select>
            </div>
        </div>
    )
}

export default UpperBanner
