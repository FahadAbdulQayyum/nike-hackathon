import Image from 'next/image'
import { BsInboxFill } from "react-icons/bs";

const CheckoutComponent = () => {
    return (
        <div className="flex p-standardSize space-x-12">
            <div className="w-[70%] ml-[30%] space-y-4">
                <h1 className="font-bold text-xl">How would you like to get your order?</h1>
                <p>Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information. Learn More</p>
                <button className="flex border-2 border-black rounded w-full py-3 font-bold text-start px-5">
                    <BsInboxFill />
                    <p>Deliver it</p>
                </button>
                <span className="flex flex-col space-y-2">
                    <h1 className="font-bold text-xl">Enter your name and address:</h1>
                    <input className="border p-2 w-full" type="text" placeholder="First Name" />
                    <input className="border p-2 w-full" type="text" placeholder="Last Name" />
                    <input className="border p-2 w-full" type="text" placeholder="Address Line 1" />
                    <input className="border p-2 w-full" type="text" placeholder="Address Line 2" />
                    <input className="border p-2 w-full" type="text" placeholder="Address Line 3" />
                    <span className="w-full">
                        <input className="border p-2 w-1/2" type="text" placeholder="Postal Code" />
                        <input className="border p-2 w-1/2" type="text" placeholder="Locality" />
                    </span>
                    <span className="w-full">
                        <input className="border p-2 w-1/2" type="text" placeholder="State/Territory" />
                        <input className="border p-2 w-1/2" type="text" placeholder="India" />
                    </span>
                    <input type="radio" /> <label>Save this address to my profile</label>
                    <input type="radio" /> <label>Make this my preferred address</label>
                    <h1 className="font-bold text-xl">What's your contact information?</h1>
                    <input className="border p-2 w-full" type="text" placeholder="India" />
                    <small>A confirmation email will be sent after checkout.</small>
                    <input className="border p-2 w-full" type="text" placeholder="India" />
                    <small>A confirmation email will be sent after checkout.</small>
                    <h1 className="font-bold text-xl">What's your PAN?</h1>
                    <input className="border p-2 w-full" type="text" placeholder="PAN" />
                    <small>Enter your PAN to enable payment with UPI, Net Banking or local card methods</small>
                    <input type="radio" /> <label>Save PAN details to Nike Profile</label>
                    <input type="radio" /> <label>I have read and consent to eShopWorld processing my information in accordance with the Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.</label>
                    <button className="bg-primaryy rounded-full p-2 w-full text-gray-600">Continue</button>
                    <h1 className="font-bold text-xl">Delivery</h1>
                    <h1 className="font-bold text-xl">Shipping</h1>
                    <h1 className="font-bold text-xl">Billing</h1>
                    <h1 className="font-bold text-xl">Payment</h1>
                </span>
            </div>
            <div className="w-[30%]">
                <h1 className="font-bold mb-4">Order Summary</h1>
                <span className="flex w-full justify-between">
                    <p>Subtotal</p>
                    <p>₹ 20 890.00</p>
                </span>
                <span className="flex w-full justify-between">
                    <p>Delivery & Shipping</p>
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
                {/* <button className="bg-black p-2 px-4 text-white rounded-full w-full">Member Checkout</button> */}
                <p className="text-sm">(The total reflects the price of your order, including all duties and taxes)</p>
                <span>
                    <h1 className="font-bold py-2">Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
                    <span className="flex">
                        <span>
                            <Image src="/assets/best-nike-2.svg" alt="nike" width={300} height={300} className="bg-primaryy" />
                        </span>
                        <span className="ml-2">
                            <p>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                            <p className="text-gray-400">Qty: 1</p>
                            <p className="text-gray-400">Size: L</p>
                            <p className="text-gray-400">₹ 3 895.00</p>
                        </span>
                    </span>
                    <span className="flex">
                        <span>
                            <Image src="/assets/best-nike-2.svg" alt="nike" width={300} height={300} className="bg-primaryy" />
                        </span>
                        <span className="ml-2">
                            <p>Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                            <p className="text-gray-400">Qty: 1</p>
                            <p className="text-gray-400">Size: L</p>
                            <p className="text-gray-400">₹ 3 895.00</p>
                        </span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default CheckoutComponent
