import React, { useState } from "react";
import { HashLink } from 'react-router-hash-link';
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Header = () => {
  const [openBar, setOpenBar] = useState(false);

  const totalItems = useSelector((state) =>
    state.app.products.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <>
      <header className="bg-gray-200 shadow-md fixed top-0 left-0 right-0 z-30">
        <div className="container mx-auto px-4 py-3">
          <div className="grid grid-cols-3 items-center">
            {/* Logo */}
            <div className="flex justify-start col-span-1">
              <img src="/logo.png" alt="Logo" className="w-28 h-10" />
            </div>

            {/* Search bar - يظهر في الشاشات md وفوق */}
            <div className="hidden md:flex justify-center col-span-1">
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

            {/* Icons and Menu */}
            <div className="flex justify-end items-center space-x-4 col-span-2 md:col-span-1">
              {/* Navigation - يظهر فقط على الشاشات المتوسطة وفوق */}
              <nav className="hidden md:flex space-x-6 text-lg">
                <HashLink smooth to="/#top" onClick={() => setOpenBar(false)} className="hover:text-blue-500 transition duration-300">Home</HashLink>
                <HashLink to="/shop" className="hover:text-blue-500 transition duration-300">Shop</HashLink>
                <HashLink to="/categories" className="hover:text-blue-500 transition duration-300">Categories</HashLink>
                <HashLink to="/about" className="hover:text-blue-500 transition duration-300">About</HashLink>
              </nav>

              {/* Icons - يظهر فقط على الشاشات المتوسطة وفوق */}
              <div className="hidden md:flex space-x-4 text-xl text-gray-700">
                <FaUser className="hover:text-blue-500 cursor-pointer transition duration-300" />
                <HashLink to="/cart" className="relative inline-block">
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                  <FaShoppingCart className="text-xl hover:text-blue-500 cursor-pointer transition duration-300" />
                </HashLink>
                <MdFavoriteBorder className="hover:text-blue-500 cursor-pointer transition duration-300" />
              </div>

              {/* Mobile menu button - يظهر فقط في الشاشات الصغيرة */}
              <div
                className="md:hidden cursor-pointer text-gray-800"
                onClick={() => setOpenBar(!openBar)}
              >
                {!openBar ? <FaBars fontSize="20px" /> : <IoMdClose fontSize="20px" />}
              </div>
            </div>
          </div
