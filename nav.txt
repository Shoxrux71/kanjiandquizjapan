import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800 text-cyan-400">
            Damin
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <a 
                href="#home" 
                className="text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className="text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className="text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-blue-500 hover:underline transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
