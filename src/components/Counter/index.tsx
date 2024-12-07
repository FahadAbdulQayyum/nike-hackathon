import React from 'react'

const Counter = () => {
    return (
        <div className="flex items-center space-x-4">
            <span className="flex flex-col"><small className="font-semibold">Days</small><h1 className="text-5xl font-bold font-sans">03</h1></span>
            <span className="text-tertiary text-4xl font-semibold mt-2">:</span>
            <span className="flex flex-col"><small className="font-semibold">Hours</small><h1 className="text-5xl font-bold font-sans">23</h1></span>
            <span className="text-tertiary text-4xl font-semibold mt-2">:</span>
            <span className="flex flex-col"><small className="font-semibold">Minutes</small><h1 className="text-5xl font-bold font-sans">19</h1></span>
            <span className="text-tertiary text-4xl font-semibold mt-2">:</span>
            <span className="flex flex-col"><small className="font-semibold">Seconds</small><h1 className="text-5xl font-bold font-sans">56</h1></span>
        </div>
    )
}

export default Counter
