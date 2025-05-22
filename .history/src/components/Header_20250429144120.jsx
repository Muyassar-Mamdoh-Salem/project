import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-300 x">
        <div>
          <img
            src="/logo.png" // تم تعديل المسار
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
      </div>
    </div>
  );
};

export default Header;
