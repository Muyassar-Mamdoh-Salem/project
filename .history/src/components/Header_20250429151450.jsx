import React from "react";
import { Link } from "react-router-dom";
// {import icons}
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-200">
      <div className="container mx-auto flex items-center justify-between ">
        <img
          src="/logo.png"
          className="w-32 h-10"
          alt="Logo"
        />
  <div className="flex items-center justify-center w-full max-w-md mx-auto mt-4">
  <div className="flex   w-full shadow-md rounded-lg overflow-hidden border border-blue-200">
    <input
      type="text"
      placeholder="Search..."
      className="w-full px- py-2 text-gray-700 focus:outline-none"
    />
    <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 flex items-center justify-center">
      <FaSearch className="w-5 h-5" />
    </button>
  </div>
</div>


        <ul className="flex space-x-10">
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
        <div className="flex items-center space-x-10">
          <ul className="flex text-orange-400 border-2 text-xl space-x-10">
            <li><FaUser /></li>
            <li><FaShoppingCart /></li>
            <li><MdFavoriteBorder /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
