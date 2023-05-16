import React from "react";
import  { useState } from 'react'; 
import {Link } from "react-router-dom";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);
return (
// Nav bar
<nav className=" list-none  md:flex justify-between  bg-[#0b051a] sticky  top-[0.5px] text-[3rem] border-b-2 border-t-2 border-solid border-b-white   ">
    {/* Social midia link */}
    <div className=" flex flex-wrap items-center justify-center border-r-2 border-solid border-b-white hover:bg-[#002855] hover:text-[#e2ff40]     ">
        <p className="text-[#a931ff] text-3xl">{"<"}</p>
        <Link className="text-white" to="/">ANISH</Link>
        <p className="text-[#a931ff] text-3xl">{"/>"}</p>
    </div>
    {/* Hamburger button */}
    <div className=" flex justify-center lg:hidden border-t-2 border-solid border-white  "  >
        <button
            onClick={() =>
            setIsOpen(!isOpen)}
            className="flex items-center justify-center px-3 py-2 h-16 w-16 rounded text-black-500 hover:text-black-400"
            >
            <svg
            className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
            className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
        </button>
    </div>
    {/*Navigation Link*/}
    <div className={` flex justify-center lg:flex  ${isOpen ? "block" : "hidden"}`}>
    <ul className="m-0 p-0 lg:flex ">
        <li className=" hover:bg-white lg:flex justify-end   text-[20px] lg:border-l border-solid border-white   "><a className="text-white flex justify-start  lg:p-8  py-8  hover:text-black " href="#">About</a></li>
        <li className=" hover:bg-white lg:flex justify-end   text-[20px] lg:border-l border-solid border-white   "><Link className="text-white flex justify-start lg:p-8  py-8  hover:text-black " to="/skill">Skills</Link></li>
        <li className=" hover:bg-white lg:flex justify-end   text-[20px] lg:border-l border-solid border-white   "><a className="text-white flex justify-start  lg:p-8  py-8  hover:text-black "  href="#">Project</a></li>
        <li className=" hover:bg-white lg:flex justify-end   text-[20px] lg:border-l border-solid border-white   "><a className="text-white flex justify-start  lg:p-8  py-8  hover:text-black "  href="#">Contact</a></li>
    </ul>
    </div>
</nav>
);
}
export default Navbar;