import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
  const UserInfo = useSelector((state) => state.app.UserInfo);

  const [openBar, setOpenBar] = useState(false);

  const totalItems = useSelector((state) =>
    state.app.products.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      <header className="bg-gray-200 shadow-md fixed top-0 left-0 right-0 z-30">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-4 px-4 py-3">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <h2 className="text-2xl font-bold">
              <span className="text-blue-600">Shop</span> Ease
            </h2>
          </div>

          {/* Search bar */}
          <div className="flex justify-center md:justify-center   w-full">
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

          {/* Desktop icons and menu */}
          <div className="flex justify-end items-center space-x-4">
            {/* Navigation Links */}
            <nav className="hidden md:flex space-x-6 text-lg">
              <HashLink smooth to="/#top" onClick={() => setOpenBar(false)} className="hover:text-blue-500 transition duration-300">
                Home
              </HashLink>
              <HashLink to="/shop" className="hover:text-blue-500 transition duration-300">
                Shop
              </HashLink>
              <HashLink to="/categories" className="hover:text-blue-500 transition duration-300">
                Categories
              </HashLink>
              <HashLink to="/about" className="hover:text-blue-500 transition duration-300">
                About
              </HashLink>
            </nav>

            {/* User & Icons */}
            <div className="hidden md:flex items-center space-x-4 text-xl text-gray-700">
              {UserInfo ? (
                <span className="text-sm font-semibold text-gray-800 mr-2">
                  Hi, {UserInfo.userName}
                </span>
              ) : (
                <HashLink to="/regpage">
                  <FaUser className="hover:text-blue-500 cursor-pointer transition duration-300" />
                </HashLink>
              )}

              <HashLink to="/cart" className="relative inline-block">
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
                <FaShoppingCart className="text-xl hover:text-blue-500 cursor-pointer transition duration-300" />
              </HashLink>
              <MdFavoriteBorder className="hover:text-blue-500 cursor-pointer transition duration-300" />
            </div>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden cursor-pointer text-gray-800"
              onClick={() => setOpenBar(!openBar)}
            >
              {!openBar ? <FaBars fontSize="20px" /> : <IoMdClose fontSize="20px" />}
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 w-[220px] h-[100vh] transform ${
          openBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 md:hidden`}
      >
        {/* Close Button */}
        <div
          className="absolute top-4 left-3 text-white cursor-pointer"
          onClick={() => setOpenBar(false)}
        >
          <IoMdClose fontSize="24px" />
        </div>

        {/* Sidebar Icons */}
        <div className="flex items-center justify-around py-5 text-white mt-12 border-b border-gray-600">
          <FaUser className="text-xl active:text-yellow-400 cursor-pointer transition duration-300" />
          <HashLink to="/cart" onClick={() => setOpenBar(false)} className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
            <FaShoppingCart className="text-xl active:text-yellow-400 cursor-pointer transition duration-300" />
          </HashLink>
          <MdFavoriteBorder className="text-xl active:text-yellow-400 cursor-pointer transition duration-300" />
        </div>

        {/* Sidebar Navigation */}
        <nav className="mt-10 text-white flex flex-col space-y-6 px-6 text-lg">
          <HashLink smooth to="/#top" onClick={() => setOpenBar(false)} className="hover:text-yellow-400 transition duration-300">
            Home
          </HashLink>
          <HashLink to="/shop" onClick={() => setOpenBar(false)} className="hover:text-yellow-400 transition duration-300">
            Shop
          </HashLink>
          <HashLink to="/categories" onClick={() => setOpenBar(false)} className="hover:text-yellow-400 transition duration-300">
            Categories
          </HashLink>
          <HashLink to="/about" onClick={() => setOpenBar(false)} className="hover:text-yellow-400 transition duration-300">
            About
          </HashLink>
        </nav>
      </div>
    </>
  );
};

export default Header;
