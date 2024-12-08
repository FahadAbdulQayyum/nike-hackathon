import Image from 'next/image'

const Sign = ({ signup }: any) => {
    return (
        <div className="flex flex-col justify-center items-center space-y-5 p-standardSize">
            <Image src="/assets/nike-logo-1.svg" alt="logo" width={50} height={50} />
            <h1 className="font-bold text-xl w-[15%] text-center">{signup ? "BECOME A NIKE MEMBER" : "YOUR ACCOUNT FOR EVERYTHING NIKE"}</h1>
            <p className="text-sm text-gray-400 w-[23%] text-center">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
            <input className="border p-2 w-[30%]" type="text" placeholder="Email address" />
            <input className="border p-2 w-[30%]" type="password" placeholder="Password" />
            {signup && <input className="border p-2 w-[30%]" type="text" placeholder="First Name" />}
            {signup && <input className="border p-2 w-[30%]" type="text" placeholder="Last Name" />}
            {signup && <input className="border p-2 w-[30%]" type="date" placeholder="Date of Birth" />}
            {signup && <p className="flex justify-between w-[28%] text-gray-400 text-sm">Get a Nike Member Reward every year on your Birthday.</p>}
            {signup && <select className="border p-2 w-[30%]" >
                <option value="in" selected>India</option>
                <option value="pak">Pakistan</option>
                <option value="eng">England</option>
                <option value="usa">USA</option>
            </select>
            }
            {signup &&
                <span className="flex justify-between w-[30%] items-center">
                    <p className="border rounded w-[48%] text-gray-400 text-sm text-center py-2">Male</p>
                    <p className="border rounded w-[48%] text-gray-400 text-sm text-center py-2">Female</p>
                </span>
            }
            {!signup && <span className="flex justify-between w-[30%] text-gray-400 text-sm space-x-4">
                <span>
                    <input type="checkbox" checked />
                    <label className="ml-2">Keep me signed in</label>
                </span>
                <span>
                    Forgotten your password?
                </span>
            </span>}
            {signup &&
                <span className="flex w-[30%] text-gray-400 text-sm">
                    <input type="checkbox" checked />
                    <label className="ml-2">Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>
                </span>
            }
            <p className="text-sm text-gray-400 w-[25%] text-center py-2">
                {'By ' + (signup ? 'creating an account' : `logging in`)}, you agree to Nike's <span className="border-b ">Privacy Policy</span> and <span className="border-b">Terms of Use</span>.
            </p>
            <button className="bg-black w-[30%] text-white py-2 rounded uppercase">{signup ? 'Join Us' : 'Sign in'}</button>
            <span className="flex text-sm text-gray-400">
                <p>{signup ? 'Already a Member' : 'Not a Member?'}</p>
                <span className="ml-2 border-b border-black text-black">{signup ? 'Sign In.' : 'Join Us.'}</span>
            </span>
        </div>
    )
}

export default Sign
