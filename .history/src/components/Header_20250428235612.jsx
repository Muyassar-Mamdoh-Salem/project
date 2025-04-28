import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-center  ">
         
          <img
            src="public\logo.png"
            style={{ width: "100px", height: "40px" }}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center">
        <input className="w-2/3 h-10" placeholder="search" />

 <div className="bg-blue-50"><FaSearch  style={{ width: "30px", height: "20",color:"white" ,border:"2", backgroundColor:"blue" }} />
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
