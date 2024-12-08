import Image from 'next/Image';

const NikeApp = () => {
    return (
        <div
            className="bg-primaryy text-black flex flex-col justify-center items-center py-1 "
        >
            <h1 className="font-bold">Hello Nike App</h1>
            <span className="flex">
                <p>Download the app to access everything Nike.</p>
                <button className="ml-2 underline mb-2">Get your Great</button>
            </span>
        </div >
    )
}

export default NikeApp
