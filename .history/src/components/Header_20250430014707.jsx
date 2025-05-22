import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <header className="bg-gray-200">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div>
            <img src="/logo.png" alt="Logo" className="w-32 h-10" />
          </div>

          {/* Search bar */}
          <div className="flex items-center">
            <input
              type="text"
              className="w-96 h-10 rounded-l-lg border-2 border-blue-200 px-3"
              placeholder="Search..."
            />
            <button className="h-10 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-r-lg px-3 flex items-center justify-center">
              <FaSearch className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="ml-5 hidden md:block">
            <ul className="flex space-x-10 text-lg">
              <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link to="/shop" className="hover:text-blue-500">Shop</Link></li>
              <li><Link to="/categories" className="hover:text-blue-500">Categories</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
            </ul>
          </nav>

          {/* Cart and user icons */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex text-xl text-gray-700 space-x-8">
              <li className="hover:text-blue-500"><FaUser /></li>
              <li className="hover:text-blue-500"><FaShoppingCart /></li>
              <li className="hover:text-blue-500"><MdFavoriteBorder /></li>
            </ul>
          </div>

          {/* Mobile menu icon */}
          <div
            className="md:hidden relative cursor-pointer text-gray-800"
            onClick={() => setOpenBar(!openBar)}
          >
            {!openBar ? <FaBars fontSize="20px" /> : <IoMdClose fontSize="20px" />}
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 bg-[#3F181C] w-[200px] h-[100vh] transform ${
          openBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div
          className="absolute top-4 left-2 text-white cursor-pointer"
          onClick={() => setOpenBar(false)}
        >
          <IoMdClose fontSize="24px" />
        </div>

        <nav className="mt-16 text-white flex flex-col space-y-4 px-6">
          <Link to="/" onClick={() => setOpenBar(false)}>Home</Link>
          <Link to="/shop" onClick={() => setOpenBar(false)}>Shop</Link>
          <Link to="/categories" onClick={() => setOpenBar(false)}>Categories</Link>
          <Link to="/about" onClick={() => setOpenBar(false)}>About</Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
