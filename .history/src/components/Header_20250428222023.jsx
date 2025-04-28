import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="flex">
        <  div>
         
          <img
            src="public\logo.png"
            style={{ width: "100px", height: "40px" }}
            alt=""
          />
        <div/>
        <div>
        <input className="w-2/3 h-10" placeholder="search" />

        <FaSearch  style={{ width: "40px", height: "20px",color:"blue" ,border:"2" }} />
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
