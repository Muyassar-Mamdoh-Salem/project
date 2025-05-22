import React, { useEffect } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { addToCart } from '../Redux/appSlice';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // تأخير أوضح بين العناصر
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

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">Products</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between"
            variants={cardVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
          >
            <img src={product.image} alt={product.title} className="h-40 object-contain mb-4 mx-auto" />
            <h3 className="text-md font-semibold mb-1 text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.description.slice(0, 60)}...</p>
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-600 font-bold">${product.price}</span>
              <Link to="cart"><button onClicc
              })} className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition">Add to cart</button></Link>
            </div>
            <Link to={`/product/${product.id}`}>
              <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
                More Details
              </button>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Products;
