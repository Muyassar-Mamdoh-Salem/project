import React from "react";
import { Link } from "react-router-dom";
// {import icons}
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => (
  <div className="bg-gray-200">
    <div className="container mx-auto flex items-center justify-aroun">
      {/* Logo */}
      <img
        src="/logo.png"
        className="w-32 h-10"
        alt="Logo" />
      {/* Search bar */}
      <div className="flex justify-center items-center ">
        <input
          className="w-96 h-10 rounded-l-lg border-2 border-blue-200 px-2"
          placeholder="Search..." />
        <div className="h-10 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-r-lg px-3 flex items-center justify-center">
          {/* Search icon */}
          <FaSearch className="w-5 h-5 text-white" />
      </div>
     
      

      {/* Navigation */}
      <ul className="flex space-x-10">
        {/* Home link */}
        <Link to="/" className="hover:text-blue-500">
          <li>Home</li>
        </Link>
        {/* Shop link */}
        <Link to="/shop" className="hover:text-blue-500">
          <li>Shop</li>
        </Link>
        {/* Categories link */}
        <Link to="/categories" className="hover:text-blue-500">
          <li>Categories</li>
        </Link>
        {/* About link */}
        <Link to="/about" className="hover:text-blue-500">
          <li>About</li>
        </Link>
      </ul>
      {/* Cart and user icons */}
      <div className="flex items-center space-x-10">
        <ul className="flex text-orange-400 border-2 text-xl space-x-10">
          {/* User icon */}
          <li><FaUser /></li>
          {/* Cart icon */}
          <li><FaShoppingCart /></li>
          {/* Favorite icon */}
          <li><MdFavoriteBorder /></li>
        </ul>
      </div>
    </div>
  </div>
  </div>
);

export default Header;
