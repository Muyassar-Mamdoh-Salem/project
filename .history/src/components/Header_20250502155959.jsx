import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(prev => prev + 1);
  };

  return (
    <header className="p-4 bg-gray-100 flex justify-between items-center">
      <h1 className="text-xl font-bold">Logo</h1>

      <div className="flex items-center space-x-4">
        {/* أيقونة السلة */}
        <div className="relative cursor-pointer" onClick={handleClick}>
          <FaShoppingCart className="text-2xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        </div>

        {/* زر للذهاب للصفحة */}
        <Link to="/cart" className="text-blue-600 underline">
          Go to cart
        </Link>
      </div>
    </header>
  );
};

export default Header;
