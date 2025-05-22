import { useLoaderData, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorites } from '../Redux/appSlice';
import { useState } from 'react';

const Products = () => {
  const products = useLoaderData();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.app.favorites);

  const [addedToFavId, setAddedToFavId] = useState(null);

  const handleAddToFavorites = (product) => {
    if (!favorites.find(item => item.id === product.id)) {
      dispatch(addToFavorites(product));
      setAddedToFavId(product.id);
      setTimeout(() => setAddedToFavId(null), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-2 sm:px-4 w-full overflow-x-hidden">
      {/* حاوية رئيسية بحد أقصى للعرض */}
      <div className="max-w-[100vw] mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-6 px-2">
          Our Products
        </h2>

        {/* شبكة المنتجات */}
        <motion.div
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white rounded-lg shadow-sm p-3 flex flex-col justify-between group w-full"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 100, damping: 15 },
                },
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* زر المفضلة */}
              <button
                onClick={() => handleAddToFavorites(product)}
                className={`absolute top-2 right-2 p-1 rounded-full ${
                  favorites.find(item => item.id === product.id) 
                    ? "text-red-500" 
                    : "text-gray-400"
                }`}
              >
                ❤️
              </button>

              {/* صورة المنتج */}
              <div className="w-full h-40 flex items-center justify-center mb-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain "
                />
              </div>

              {/* تفاصيل المنتج */}
              <h3 className="text-sm sm:text-md font-semibold mb-1 line-clamp-2">
                {product.title}
              </h3>
              <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                {product.description}
              </p>

              {/* السعر وإضافة للسلة */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-green-600 font-bold text-sm sm:text-md">
                  ${product.price}
                </span>
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="bg-blue-500 text-white text-xs sm:text-sm px-2 py-1 rounded hover:bg-blue-600"
                >
                  Add to cart
                </button>
              </div>

              {/* زر التفاصيل */}
              <Link 
                to={`/product/${product.id}`} 
                className="block w-full"
              >
                <button className="w-full bg-purple-500 text-white text-sm py-1.5 rounded hover:bg-purple-600">
                  More Details
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;