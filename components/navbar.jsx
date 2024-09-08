import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-emerald-800 stick top-0">
            <div className="container bg-slate-50 mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <h1>Damin</h1>
                    <ul className="hidden md:flex gap-6 text-white">
                        <li className="text-black">
                            lorem
                        </li>
                        <li className="text-black">
                            lorem
                        </li>
                        <li className="text-black">
                            lorem
                        </li>
                        <li className="text-black">
                            lorem
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;