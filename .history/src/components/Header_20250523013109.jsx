import { Link, NavLink } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            ShopEase
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `hover:text-blue-600 transition ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className={({isActive}) => 
                `hover:text-blue-600 transition ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}`
              }
            >
              Shop
            </NavLink>
            <NavLink 
              to="/categories" 
              className={({isActive}) => 
                `hover:text-blue-600 transition ${isActive ? 'text-blue-600 font-medium' : 'text-gray-700'}`
              }
            >
              Categories
            </NavLink>
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-blue-600 transition">
              <FaSearch className="text-lg" />
            </button>
            <Link to="/account" className="text-gray-700 hover:text-blue-600 transition">
              <FaUser className="text-lg" />
            </Link>
            <Link to="/wishlist" className="relative text-gray-700 hover:text-blue-600 transition">
              <MdFavoriteBorder className="text-lg" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition">
              <FaShoppingCart className="text-lg" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                5
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <NavLink 
              to="/" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/shop" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </NavLink>
            <NavLink 
              to="/categories" 
              className="block py-2 text-gray-700 hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </NavLink>
            
            <div className="flex items-center space-x-6 pt-4">
              <button className="text-gray-700 hover:text-blue-600 transition">
                <FaSearch className="text-lg" />
              </button>
              <Link 
                to="/account" 
                className="text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaUser className="text-lg" />
              </Link>
              <Link 
                to="/wishlist" 
                className="relative text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <MdFavoriteBorder className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link 
                to="/cart" 
                className="relative text-gray-700 hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaShoppingCart className="text-lg" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;