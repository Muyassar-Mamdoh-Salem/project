import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaSignOutAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { Logoutuser } from "../Redux/appSlice";
import { Myswal } from "./Myswal";

const Header = () => {
  const UserInfo = useSelector((state) => state.app.UserInfo);
  const dispatch = useDispatch();
  const [openBar, setOpenBar] = useState(false);

  const totalItems = useSelector((state) =>
    state.app.products.reduce((total, item) => total + item.quantity, 0)
  );

  const totalFavorites = useSelector((state) => state.app.favorites.length);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(Logoutuser());
      })
      .catch((error) => {
        console.log("An error happened", error);
      });
  };

  const handleLogout = () => {
  Myswal:"هل تريد  تسجيل الخروج "
  icon:"warning"
  showCancelButton: true,
  confirmButtonText: "نعم",
  cancelButtonText: "لا",

  }

  return (
    <>
      <header className="bg-gray-200 shadow-md fixed top-0 left-0 right-0 z-30 w-full overflow-x-hidden">
        {/* حاوية رئيسية بحد أقصى للعرض */}
        <div className="max-w-[100vw] mx-auto px-2 sm:px-4 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 w-full">
            {/* الشعار */}
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <h2 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
                <span className="text-blue-600">Shop</span> Ease
              </h2>
            </div>

            {/* حقل البحث */}
            <div className="w-full md:flex-1 flex justify-center max-w-[500px]">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full h-10 rounded-l-lg border-2 border-blue-200 px-3 focus:outline-none focus:border-blue-400"
                  placeholder="Search..."
                />
                <button className="absolute right-0 top-0 h-10 bg-blue-400 hover:bg-blue-600 rounded-r-lg px-3 flex items-center justify-center">
                  <FaSearch className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>

            {/* عناصر التنقل والأيقونات */}
            <div className="w-full md:w-auto flex justify-end items-center space-x-3 sm:space-x-4">
              {/* القائمة الكبيرة (تظهر في الشاشات المتوسطة فما فوق) */}
              <nav className="hidden md:flex space-x-4 lg:space-x-6 text-base lg:text-lg">
                <HashLink smooth to="/#top" className="hover:text-blue-500 transition">Home</HashLink>
                <HashLink to="/shop" className="hover:text-blue-500 transition hidden lg:inline">Shop</HashLink>
                <HashLink to="/categories" className="hover:text-blue-500 transition hidden lg:inline">Categories</HashLink>
                <HashLink smooth to="#footer" className="hover:text-blue-500 transition">About</HashLink>
              </nav>

              {/* الأيقونات (تظهر في الشاشات المتوسطة فما فوق) */}
              <div className="hidden md:flex items-center space-x-3 sm:space-x-4">
                {UserInfo ? (
                  <>
                    <span className="text-sm font-semibold text-gray-800">
                      {UserInfo.userName}
                    </span>
                    <button onClick={handleLogout} title="Logout">
                      <FaSignOutAlt className="text-lg hover:text-red-600 transition" />
                    </button>
                  </>
                ) : (
                  <HashLink to="/regpage">
                    <FaUser className="hover:text-blue-500 transition" />
                  </HashLink>
                )}

                <HashLink to="/cart" className="relative">
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                  <FaShoppingCart className="text-lg hover:text-blue-500 transition" />
                </HashLink>

                <Link to="/favorite" className="relative">
                  {totalFavorites > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalFavorites}
                    </span>
                  )}
                  <MdFavoriteBorder className="text-lg hover:text-blue-500 transition" />
                </Link>
              </div>

              {/* زر القائمة الجانبية (يظهر في الشاشات الصغيرة فقط) */}
              <button 
                className="md:hidden text-gray-800 focus:outline-none"
                onClick={() => setOpenBar(!openBar)}
                aria-label="Toggle menu"
              >
                {!openBar ? <FaBars size={20} /> : <IoMdClose size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* القائمة الجانبية للجوّال */}
      <div className={`fixed top-0 right-0 w-[220px] h-full bg-gradient-to-b from-blue-900 to-blue-800 transform ${
        openBar ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50 md:hidden`}>
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button 
              onClick={() => setOpenBar(false)}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <IoMdClose size={24} />
            </button>
          </div>

          <div className="flex items-center justify-around py-4 border-b border-blue-700 px-4">
            {UserInfo ? (
              <>
                <span className="text-white text-sm font-semibold truncate max-w-[120px]">
                  {UserInfo.userName}
                </span>
                <button onClick={handleLogout} title="Logout">
                  <FaSignOutAlt className="text-white hover:text-yellow-400 transition" />
                </button>
              </>
            ) : (
              <HashLink to="/regpage" onClick={() => setOpenBar(false)}>
                <FaUser className="text-white hover:text-yellow-400 transition" />
              </HashLink>
            )}

            <HashLink to="/cart" onClick={() => setOpenBar(false)} className="relative">
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
              <FaShoppingCart className="text-white hover:text-yellow-400 transition" />
            </HashLink>

            <Link to="/favorite" onClick={() => setOpenBar(false)} className="relative">
              {totalFavorites > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalFavorites}
                </span>
              )}
              <MdFavoriteBorder className="text-white hover:text-yellow-400 transition" />
            </Link>
          </div>

          <nav className="flex flex-col space-y-4 p-4 mt-2">
            <HashLink 
              smooth to="/#top" 
              onClick={() => setOpenBar(false)}
              className="text-white hover:text-yellow-400 transition"
            >
              Home
            </HashLink>
            <HashLink 
              to="/shop" 
              onClick={() => setOpenBar(false)}
              className="text-white hover:text-yellow-400 transition"
            >
              Shop
            </HashLink>
            <HashLink 
              to="/categories" 
              onClick={() => setOpenBar(false)}
              className="text-white hover:text-yellow-400 transition"
            >
              Categories
            </HashLink>
            <HashLink 
              to="/about" 
              onClick={() => setOpenBar(false)}
              className="text-white hover:text-yellow-400 transition"
            >
              About
            </HashLink>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;