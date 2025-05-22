import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * The Header component renders the navigation bar of the application.
 */
const Header = () => {
  return (
    <div>
      {/* The header contains a logo, a search bar, and a navigation menu */}
      <div className="flex items-center justify-center bg-gray-300">
        {/* The logo is an image */}
        <div>

      <div className="flex items-center justify-center bg-gray-300 x">
        <div >

          <img
            src="public\logo.png"
            style={{ width: "100px", height: "40px" }}
            alt="The logo of the application"
            alt=""
          />
        </div>
        {/* The search bar is an input field with a search icon */}
        <div className="flex justify-center gap-1 items-center">
          <input
            className="w-2/3 h-10 rounded-lg border-2 border-blue-200"
            placeholder="search.."
            type="search"
          />
          <div className="border-rounded-50 bg-blue-400 hover:bg-blue-600 active:bg-blue-700 rounded-lg p-2">
        <div className=" flex justify-center gap-1 items-center ">
          <input className="w-2/3 h-10 rounded-lg border-2 border-blue-200 " placeholder="search.." />

          <div className="border-rounded-50  bg-blue-400  hover:bg-blue-600 active:bg-blue-700 rounded-lg  p-2">
            <FaSearch className="w-10 h-5 text-white" />
          </div>

        </div>
        {/* The navigation menu is an unordered list of links */}
        <ul className="flex space-x-10">
          <Link to="/" className="hover:text-blue-500">
            <li>Home</li>
        <ul className="flex space-x-10 ">
          <Link to={<Home/>} className="hover:text-blue-500">
            <li> Home</li>
          </Link>
          <Link to="/shop" className="hover:text-blue-500">
            <li>Shop</li>
          <Link to={<Shop/>} className="hover:text-blue-500">
            <li>shop</li>
          </Link>
          <Link to="/categories" className="hover:text-blue-500">
            <li>Categories</li>
          <Link className="hover:text-blue-500">
            <li>Categaris</li>

          </Link>
          <Link to="/about" className="hover:text-blue-500">
          <Link className="hover:text-blue-500">
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};
/*******  64a622c4-08fe-4324-a84e-d1f440196ea3  *******/

export default Header;
