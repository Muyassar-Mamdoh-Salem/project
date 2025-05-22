import { useLoaderData, Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToFavorites } from '../Redux/appSlice';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

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
    <div className="min-h-screen bg-gray-50 py-8 px-4 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Our Products</h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="relative bg-white rounded-xl shadow-md p-4 flex flex-col justify-between group w-full"
              variants={cardVariants}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
            >
              {/* زر المفضلة */}
              <button
                onClick={() => handleAddToFavorites(product)}
                aria-label="Add to favorites"
                title="Add to favorites"
                className={`absolute top-3 right-3 bg-white rounded-full p-1 shadow-md transition-all duration-300 ${
                  favorites.find(item => item.id === product.id) ? 'text-red-500' : 'text-gray-400'
                } sm:opacity-0 sm:group-hover:opacity-100 opacity-100`}
              >
                {/* SVG */}
              </button>

              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-contain mb-4"
              />
              <h3 className="text-md font-semibold mb-1 text-gray-800 line-clamp-2">{product.title}</h3>
              <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-green-600 font-bold">${product.price}</span>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        title: product.title,
                        image: product.image,
                        category: product.category,
                        description: product.description,
                        price: product.price,
                        quantity: 1,
                      })
                    )
                  }
                  className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition active:bg-blue-700"
                >
                  Add to cart
                </button>
              </div>
              <Link to={`/product/${product.id}`} className="w-full">
                <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                  More Details
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;