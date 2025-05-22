import React from "react";
import { Link } from "react-router-dom";
// {import icons}
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="container mx-auto flex  items-center justify-between ">
        <div>
          <img
            src="/logo.png"
            style={{ width: "100px", height: "40px" }}
            alt="Logo"
          />
        </div>
        <div className="flex justify-center gap-1 items-center">
          <input
            className="w-2/3 h-10 rounded-lg border-2 border-blue-200"
            placeholder="search..."
          />
          <div className="border-rounded-50 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-lg p-2">
            <FaSearch className="w-10 h-5 text-white" />
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
        <div>

          <ul className="flex   border-2  text-lg space-x-10">
            <li className="" ><FaUser /></li>
            <li><FaShoppingCart /></li>
            <li ><MdFavoriteBorder /></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
