import { useState } from "react";
import { FiMenu, FiXCircle } from "react-icons/fi";
const Navbar = () =>{

    const [nav,setNav] = useState(false);

    return (
        <div className="flex items-center h-24 max-w-[1240px] mx-auto px-4">
                <h1 className='text-green-500 text-3xl font-bold w-full'>REACT.</h1>
            <ul className="text-white hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resources</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={(e)=>setNav(!nav)} className="block md:hidden">
                {!nav? <FiMenu color="white" size={30}/> : <FiXCircle color="white" size="30"/>}
            </div>
            <div className={nav?"fixed top-0 left-0 w-[60%] bg-black transition ease-linear duration-500":"hidden"}>
            <h1 className="text-3xl w-full text-white m-4">REACT.</h1>
                <ul className="text-white p-4 uppercase">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Company</li>
                <li className="p-4 border-b border-gray-600">Resources</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;