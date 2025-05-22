import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {
  return (
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
        <nav className="ml-5 hidden">
          <ul className="flex space-x-10 text-lg">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-blue-500">Shop</Link>
            </li>
            <li>
              <Link to="/categories" className="hover:text-blue-500">Categories</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </li>
          </ul>
        </nav>

        {/* Cart and user icons */}
        <div className="flex items-center space-x-6">
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
      </div>
    </header>
  );
};

export default Header;
