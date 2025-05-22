import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { FaSearch, FaUser, FaShoppingCart, FaBars } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div>
          <img src="/logo.png" className="w-32 h-10" alt="Logo" />
        </div>

        {/* Search bar */}
        <div className="hidden md:flex items-center">
          <input
            className="w-96 h-10 rounded-l-lg border-2 border-blue-200 px-3"
            placeholder="Search..."
          />
          <div className="h-10 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-r-lg px-3 flex items-center justify-center">
            <FaSearch className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Navigation - hidden on mobile */}
        <div className="ml-5 hidden md:flex">
          <ul className="flex space-x-10 text-lg">
            <Link to="/" className="hover:text-blue-500">
              <li>Home</li>
            </Link>
            <Link to="/shop" className="hover:text-blue-500">
              <li>Shop</li>
            </Link>
            <Link to="/categories" className="hover:text-blue-500">
              <li>Categories</li>
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              <li>About</li>
            </Link>
          </ul>
        </div>

        {/* Icons - hidden on mobile */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex text-xl text-gray-700 space-x-8">
            <li className="hover:text-blue-500">
              <FaUser />
            </li>
            <li className="hover:text-blue-500">
              <FaShoppingCart />
            </li>
            <li className="hover:text-blue-500">
              <MdFavoriteBorder />
            </li>
          </ul>
        </div>

        {/* Mobile menu icon */}
        <div className="md:hidden text-2xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoMdClose /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 text-right">
          <IoMdClose className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>
        <ul className="flex flex-col space-y-6 px-6 text-lg">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/categories" onClick={() => setMenuOpen(false)}>Categories</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </ul>
        <ul className="flex space-x-6 text-2xl px-6 mt-6 text-gray-700">
          <li><FaUser /></li>
          <li><FaShoppingCart /></li>
          <li><MdFavoriteBorder /></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
~