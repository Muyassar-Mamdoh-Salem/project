import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [openBar, setOpenBar] = useState(false);

  return (
    <>
      <header className="bg-gray-200 shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4 py-3">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img src="/logo.png" alt="Logo" className="w-32 h-10" />
          </div>

          {/* Search bar */}
          <div className="flex justify-center">
            <div className="flex items-center w-full max-w-md">
              <input
                type="text"
                className="flex-grow h-10 rounded-l-lg border-2 border-blue-200 px-3"
                placeholder="Search..."
              />
              <button className="h-10 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-r-lg px-3 flex items-center justify-center">
                <FaSearch className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Navigation and icons */}
          <div className="flex justify-end items-center space-x-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-lg">
              <Link to="/" className="hover:text-blue-500">Home</Link>
              <Link to="/shop" className="hover:text-blue-500">Shop</Link>
              <Link to="/categories" className="hover:text-blue-500">Categories</Link>
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </nav>

            {/* Icons */}
            <div className="hidden md:flex space-x-4 text-xl text-gray-700">
              <FaUser className="hover:text-blue-500 cursor-pointer" />
              <Link to={"/cart"}>   <FaShoppingCart className="hover:text-blue-500 cursor-pointer" /></Link>
              <MdFavoriteBorder className="hover:text-blue-500 cursor-pointer" />
            </div>

          
            <div
              className="md:hidden cursor-pointer text-gray-800"
              onClick={() => setOpenBar(!openBar)}
            >
              {!openBar ? <FaBars fontSize="20px" /> : <IoMdClose fontSize="20px" />}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 bg-[#d59e7b] w-[200px] h-[100vh] transform ${
          openBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        {/* Close icon */}
        <div
          className="absolute top-4 left-2 text-white cursor-pointer"
          onClick={() => setOpenBar(false)}
        >
          <IoMdClose fontSize="24px" />
        </div>

        {/* Sidebar navigation */}
        <nav className="mt-16 text-white flex flex-col space-y-4 px-6">
          <Link
            to="/"
            onClick={() => setOpenBar(false)}
            className="hover:text-blue-300 transition duration-300 hover:translate-x-1"
          >
            Home
          </Link>
          <Link
            to="/shop"
            onClick={() => setOpenBar(false)}
            className="hover:text-blue-300 transition duration-300 hover:translate-x-1"
          >
            Shop 0
          </Link>
          <Link
            to="/categories"
            onClick={() => setOpenBar(false)}
            className="hover:text-blue-300 transition duration-300 hover:translate-x-1"
          >
            Categories
          </Link>
          <Link
            to="/About"
            onClick={() => setOpenBar(false)}
            className="hover:text-blue-300 transition duration-300 hover:translate-x-1"
          >
            About
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
