import React from 'react'

const FirstLook = () => {
    return (
        <div className="flex flex-col justify-center items-center space-y-1">
            <span>
                <p className="text-sm font-bold">First Look</p>
            </span>
            <span>
                <h1 className="text-4xl font-bold uppercase">Nike Air Max Pulse</h1>
            </span>
            <span className="space-y-1 py-5">
                <p className="text-sm">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                </p>
                <p className="text-sm">—designed to push you past your limits and help you go to the max.
                </p>
            </span>
            <span className="space-x-4">
                <button className="bg-black text-white text-sm p-2 px-4 rounded-full">Notify Me</button>
                <button className="bg-black text-white text-sm p-2 px-4 rounded-full">Shop Air Max</button>
            </span>
        </div>
    )
}

export default FirstLook
