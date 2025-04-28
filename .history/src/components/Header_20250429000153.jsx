import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-300 x">
        <div className="">
         
          <img
            src="public\logo.png"
            style={{ width: "100px", height: "40px" }}
            alt=""
          />
        </div>
        <div className="flex justify-center  items-center">
        <input className="w-2/3 h-10" placeholder="search" />

 <div className="bg-blue-50 p-2">
  <FaSearch className="w-10 h-5  " />
</div>

        </div>
        <ul className="flex space-x-10">
          <Link>
            <li> Home</li>
          </Link>
          <Link>
            <li>shop</li>
          </Link>
          <Link>
            <li>Categaris</li>
            
          </Link>
          <Link>
            <li>About</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
