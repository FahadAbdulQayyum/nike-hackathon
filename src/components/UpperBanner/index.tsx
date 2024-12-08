import Image from 'next/image';
import Link from 'next/link';

const UpperBanner = () => {
    return (
        <div
            className="bg-primaryy text-black flex justify-between items-center py-1 px-standardSize"
        >
            <div className="left-portion">
                <Image src={"/assets/nike-logo.svg"} alt={"logo"} width={30} height={30} />
            </div>
            <div className="mid-portion flex space-x-5">
            </div>
            <div className="right-portion">
                <ul className="flex space-x-3 text-sm">
                    <li className="border-r border-black pr-4">Find a Store</li>
                    <li className="border-r border-black pr-4">Help</li>
                    <li className="border-r border-black pr-4">
                        <Link href="/Sign/up">Join Us</Link>
                    </li>
                    <li>
                        <Link href="/Sign/in">Sign In</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UpperBanner
