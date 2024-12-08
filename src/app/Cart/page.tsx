import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { CiHeart } from 'react-icons/ci'
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
    return (
        <div className="p-standardSize">
            <div className="flex space-x-4">
                <div className="w-[70%] px-standardSize">
                    <div className="bg-primaryy p-1">
                        <p>Free Delivery</p>
                        <span className="flex space-x-4">
                            <p>Applies to orders of ₹ 14 000.00 or more.</p>
                            <p className="font-bold underline">View details</p>
                        </span>
                    </div>
                    <span>
                        <h1 className="my-2 font-bold">Bag</h1>
                        <span className="flex border-b py-5">
                            <span className="w-[25%]">
                                <Image src={'/assets/fs-1.svg'} alt={'cart'} width={150} height={150} className="bg-primaryy" />
                            </span>
                            <span className="w-[50%]">
                                <h1 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h1>
                                <p className="text-gray-400">Men's Short-Sleeve Running Top</p>
                                <p className="text-gray-400">Ashen Slate/Cobalt Bliss</p>
                                <span className="flex justify-between w-[50%] text-gray-400">
                                    <p>Size: L</p>
                                    <p>Quantity: 1</p>
                                </span>
                                <span className="flex justify-between w-[10%] mt-5">
                                    <CiHeart />
                                    <RiDeleteBin6Line />
                                </span>
                            </span>
                            <span className="w-[25%]">
                                <p>MRP: ₹ 3 895.00</p>
                            </span>
                        </span>
                        <span className="flex border-b py-5">
                            <span className="w-[25%]">
                                <Image src={'/assets/fs-1.svg'} alt={'cart'} width={150} height={150} className="bg-primaryy" />
                            </span>
                            <span className="w-[50%]">
                                <h1 className="font-bold">Nike Dri-FIT ADV TechKnit Ultra</h1>
                                <p className="text-gray-400">Men's Short-Sleeve Running Top</p>
                                <p className="text-gray-400">Ashen Slate/Cobalt Bliss</p>
                                <span className="flex justify-between w-[50%] text-gray-400">
                                    <p>Size: L</p>
                                    <p>Quantity: 1</p>
                                </span>
                                <span className="flex justify-between w-[10%] mt-5">
                                    <CiHeart />
                                    <RiDeleteBin6Line />
                                </span>
                            </span>
                            <span className="w-[25%]">
                                <p>MRP: ₹ 3 895.00</p>
                            </span>
                        </span>
                        <span>
                            <h1 className="font-bold my-3">Favourites</h1>
                            <p className="text-sm">There are no items saved to your favourites.</p>
                        </span>
                    </span>
                </div>
                <div className="w-[30%]">
                    <h1 className="font-bold mb-4">Summary</h1>
                    <span className="flex w-full justify-between">
                        <p>Subtotal</p>
                        <p>₹ 20 890.00</p>
                    </span>
                    <span className="flex w-full justify-between">
                        <p>Estimated Delivery & Handling</p>
                        <p>Free</p>
                    </span>
                    <div className="border-b w-full h-1 my-4"></div>
                    <span className="flex w-full justify-between">
                        <p>
                            Total
                        </p>
                        <p>₹ 20 890.00</p>
                    </span>
                    <div className="border-b w-full h-1 my-4"></div>
                    <button className="bg-black p-2 px-4 text-white rounded-full w-full">Member Checkout</button>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="font-bold my-4">You Might Also Like</h1>
                <div
                    className="flex"
                >
                    <CardContent
                        className="flex items-start text-black -ml-6"
                    >
                        <span
                            className="flex flex-col justify-between font-500"
                        >
                            <span
                                className="bg-primaryy h-68 flex items-center justify-center"
                            >
                                <Image src={'/assets/best-nike-1.svg'} alt={"best-nik-svg"} width={400} height={300} className="z-10" />
                            </span>
                            <span className="flex flex-col space-y-2 mt-4 w-full">
                                <span className="flex flex-col justify-between text-sm">
                                    <p>Air Jordan 1 Mid SE Craft</p>
                                    <span className="text-gray-400">Men's Shoes</span>
                                    <p>MRP : ₹ 12 295.00</p>
                                </span>
                            </span>
                        </span>
                    </CardContent>
                </div>
            </div>
        </div >
    )
}

export default Cart
