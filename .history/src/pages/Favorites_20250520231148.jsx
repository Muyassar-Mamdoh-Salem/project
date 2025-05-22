import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../Redux/appSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.Ecommerce.favorites);

  if (favorites.length === 0) {
    return <div className="text-center mt-10">No favorites added yet.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between">
            <img src={item.image} alt={item.title} className="h-40 object-contain mb-4 mx-auto" />
            <h3 className="text-md font-semibold mb-1 text-gray-800">{item.title}</h3>
            <button
              onClick={() => dispatch(removeFromFavorites({ id: item.id }))}
              className="mt-2 bg-red-500 text-white py-1 rounded hover:bg-red-600 transition"
            >
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
