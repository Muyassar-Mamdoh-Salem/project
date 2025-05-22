import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaSignOutAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { Logoutuser } from "../Redux/appSlice";
import Swal from "sweetalert2";
import "animate.css";

const Header = () => {
  const UserInfo = useSelector((state) => state.app.UserInfo);
  const dispatch = useDispatch();
  const [openBar, setOpenBar] = useState(false);

  const totalItems = useSelector((state) =>
    state.app.products.reduce((total, item) => total + item.quantity, 0)
  );

  const totalFavorites = useSelector((state) => state.app.favorites.length);

  const handleLogout = () => {
    Swal.fire({
      title: '<span style="font-size: 1.5rem; color: #333; font-weight: 600">تأكيد الخروج</span>',
      html: '<div style="font-size: 1.1rem; margin: 1rem 0">هل أنت متأكد من رغبتك في تسجيل الخروج من حسابك؟</div>',
      icon: 'question',
      iconColor: '#e53e3e',
      showCancelButton: true,
      confirmButtonText: '<span style="font-weight: 600">سجل خروجي</span>',
      cancelButtonText: '<span style="font-weight: 600">إلغاء</span>',
      reverseButtons: true,
      focusCancel: true,
      customClass: {
        popup: 'arabic-swal',
        confirmButton: 'swal-confirm-button',
        cancelButton: 'swal-cancel-button',
        actions: 'swal-actions'
      },
      buttonsStyling: false,
      showClass: {
        popup: 'animate__animated animate__fadeIn animate__faster'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOut animate__faster'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const auth = getAuth();
        signOut(auth)
          .then(() => {
            dispatch(Logoutuser());
            Swal.fire({
              title: 'تم الخروج',
              text: 'تم تسجيل الخروج بنجاح',
              icon: 'success',
              confirmButtonText: 'حسناً'
            });
          })
          .catch((error) => {
            Swal.fire({
              title: 'خطأ',
              text: 'حدث خطأ أثناء محاولة الخروج',
              icon: 'error',
              confirmButtonText: 'حسناً'
            });
            console.error('Error signing out:', error);
          });
      }
    });
  };

  return (
    <>
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 w-full overflow-hidden">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-600">
              <span className="text-blue-600">Shop</span> Ease
            </Link>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <input
                type="text"
                className="flex-grow h-10 rounded-l-lg border-2 border-gray-200 px-4 focus:outline-none focus:border-blue-400"
                placeholder="Search..."
              />
              <button className="h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg px-4 flex items-center justify-center transition-colors duration-300">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex space-x-6">
                <HashLink 
                  to="/" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
                >
                  Home
                </HashLink>
                <HashLink 
                  to="/shop" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
                >
                  Shop
                </HashLink>
                <HashLink 
                  to="/categories" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
                >
                  Categories
                </HashLink>
              </nav>

              <div className="flex items-center space-x-4">
                {UserInfo ? (
                  <>
                    <span className="text-sm font-semibold text-gray-700">
                      {UserInfo.userName}
                    </span>
                    <button 
                      onClick={handleLogout} 
                      title="Logout"
                      className="text-gray-700 hover:text-red-600 transition duration-300"
                    >
                      <FaSignOutAlt className="text-xl" />
                    </button>
                  </>
                ) : (
                  <Link to="/regpage" className="text-gray-700 hover:text-blue-600 transition duration-300">
                    <FaUser className="text-xl" />
                  </Link>
                )}

                <Link to="/cart" className="relative text-gray-700 hover:text-blue-600 transition duration-300">
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                  <FaShoppingCart className="text-xl" />
                </Link>

                <Link to="/favorite" className="relative text-gray-700 hover:text-blue-600 transition duration-300">
                  {totalFavorites > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalFavorites}
                    </span>
                  )}
                  <MdFavoriteBorder className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setOpenBar(!openBar)}
              aria-label="Toggle menu"
            >
              {!openBar ? <FaBars className="text-xl" /> : <IoMdClose className="text-xl" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-b from-blue-800 to-blue-900 transform ${
          openBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:hidden`}
      >
        <div className="p-4">
          <button 
            className="text-white p-2 focus:outline-none"
            onClick={() => setOpenBar(false)}
            aria-label="Close menu"
          >
            <IoMdClose className="text-2xl" />
          </button>

          <div className="mt-8 px-4">
            <div className="flex items-center justify-between mb-8">
              {UserInfo ? (
                <>
                  <span className="text-white font-medium">{UserInfo.userName}</span>
                  <button 
                    onClick={handleLogout}
                    className="text-white hover:text-yellow-300 transition duration-300"
                  >
                    <FaSignOutAlt className="text-xl" />
                  </button>
                </>
              ) : (
                <Link 
                  to="/regpage" 
                  className="text-white hover:text-yellow-300 transition duration-300"
                  onClick={() => setOpenBar(false)}
                >
                  <FaUser className="text-xl" />
                </Link>
              )}

              <div className="flex items-center space-x-4">
                <Link 
                  to="/cart" 
                  className="relative text-white hover:text-yellow-300 transition duration-300"
                  onClick={() => setOpenBar(false)}
                >
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                  <FaShoppingCart className="text-xl" />
                </Link>

                <Link 
                  to="/favorite" 
                  className="relative text-white hover:text-yellow-300 transition duration-300"
                  onClick={() => setOpenBar(false)}
                >
                  {totalFavorites > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {totalFavorites}
                    </span>
                  )}
                  <MdFavoriteBorder className="text-xl" />
                </Link>
              </div>
            </div>

            <nav className="flex flex-col space-y-4 text-white">
              <HashLink 
                to="/" 
                className="py-2 hover:text-yellow-300 transition duration-300"
                onClick={() => setOpenBar(false)}
              >
                Home
              </HashLink>
              <HashLink 
                to="/shop" 
                className="py-2 hover:text-yellow-300 transition duration-300"
                onClick={() => setOpenBar(false)}
              >
                Shop
              </HashLink>
              <HashLink 
                to="/categories" 
                className="py-2 hover:text-yellow-300 transition duration-300"
                onClick={() => setOpenBar(false)}
              >
                Categories
              </HashLink>
            </nav>

            {/* Mobile Search */}
            <div className="mt-6 flex items-center">
              <input
                type="text"
                className="flex-grow h-10 rounded-l-lg px-3 focus:outline-none"
                placeholder="Search..."
              />
              <button className="h-10 bg-blue-600 text-white rounded-r-lg px-3 flex items-center justify-center">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for SweetAlert */}
      <style jsx global>{`
        .arabic-swal {
          font-family: 'Tajawal', 'Arial', sans-serif;
          direction: rtl;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .swal-confirm-button {
          background-color: #e53e3e;
          color: white;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          margin-right: 8px;
        }
        .swal-confirm-button:hover {
          background-color: #c53030;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(229, 62, 62, 0.3);
        }
        .swal-cancel-button {
          background-color: #f0f0f0;
          color: #4a5568;
          border: none;
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          margin-left: 8px;
        }
        .swal-cancel-button:hover {
          background-color: #e2e8f0;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(74, 85, 104, 0.1);
        }
        .swal-actions {
          margin-top: 1.5rem;
        }
      `}</style>
    </>
  );
};

export default Header;