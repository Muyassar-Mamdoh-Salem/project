import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../Redux/appSlice";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favorites = useSelector((state) => state.Ecommerce.favorites);  // طبق اسم الـ slice الصحيح
  const dispatch = useDispatch();

  if (favorites.length === 0) {
    return <p className="text-center mt-10 text-gray-600">No favorites added yet.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">My Favorites</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 object-contain mb-4 mx-auto"
            />
            <h3 className="text-md font-semibold mb-1 text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">
              {product.description.slice(0, 60)}...
            </p>
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-600 font-bold">${product.price}</span>
              <button
                onClick={() => dispatch(removeFromFavorites(product))}
                className="bg-red-500 text-white text-sm px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
            <Link to={`/product/${product.id}`}>
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                More Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
