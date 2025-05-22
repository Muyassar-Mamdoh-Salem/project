import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, RemoveAllCart } from '../Redux/appSlice';

const Cart = () => {
  const products = useSelector((state) => state.app.products);
  const dispatch = useDispatch();

  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (!products || products.length === 0) {
    return (
      <div className="mt-32 text-center text-gray-600 px-4">
        <div className="flex flex-col items-center justify-center">
          <img src="shopping.png" className="w-24 h-24 mb-6 animate-bounce" />
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Your cart is empty!</h2>
          <p className="text-sm text-gray-500 mb-4">Start adding some items to your cart now!</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            onClick={() => window.location.href = '/shop'}
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 mb-8 import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'إلكترونيات',
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
      count: 45
    },
    {
      id: 2,
      name: 'ملابس',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f',
      count: 32
    },
    {
      id: 3,
      name: 'أثاث',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      count: 28
    },
    {
      id: 4,
      name: 'ألعاب',
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
      count: 19
    },
    {
      id: 5,
      name: 'كتب',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
      count: 56
    },
    {
      id: 6,
      name: 'رياضة',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
      count: 23
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    }
  };

  return (
    <div id='Categories' className="min-h-screen py-12 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            تصفح الفئات
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            اكتشف مجموعتنا الواسعة من المنتجات المصنفة بدقة لتسهيل تجربة التسوق لديك
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative overflow-hidden rounded-xl shadow-md bg-white"
            >
              <Link to={`/category/${category.id}`} className="block">
                <div className="h-48 sm:h-56 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count} منتج</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                  عرض الكل
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
            عرض جميع الفئات
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Categories;">Your Cart</h1>

      <div className="flex flex-col items-center gap-6">
        {products.map((product) => {
          const isExpanded = expanded[product.id];
          const shortDesc = product.description.slice(0, 70);

          return (
            <div
              key={product.id}
              className="w-full max-w-[300px] sm:max-w-2xl flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-purple-600 to-blue-500 p-4 rounded-xl shadow-lg"
            >
              {/* Image + info */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full sm:w-2/3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-28 h-28 object-cover rounded-xl shadow"
                />
                <div className="text-white text-center sm:text-left w-full">
                  <h2 className="text-lg font-semibold mb-1">{product.title}</h2>
                  <p className="text-sm text-white/90">
                    {isExpanded ? product.description : shortDesc + '... '}
                    {product.description.length > 70 && (
                      <button
                        onClick={() => toggleExpand(product.id)}
                        className="text-yellow-300 underline text-xs"
                      >
                        {isExpanded ? 'Read less' : 'Read more'}
                      </button>
                    )}
                  </p>
                </div>
              </div>

              {/* Controls */}
              <div className="text-white text-center sm:text-right w-full sm:w-1/3">
                <p className="text-base font-semibold">${product.price}</p>
                <p className="mt-1 text-sm">Qty: {product.quantity}</p>
                <div className="flex justify-center sm:justify-end gap-2 mt-2">
                  <button
                    onClick={() => dispatch(increment({ id: product.id }))}
                    className="text-lg bg-green-500 px-2 py-1 rounded-full hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => dispatch(decrement({ id: product.id }))}
                    className="text-lg bg-red-500 px-2 py-1 rounded-full hover:bg-red-600"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Clear All */}
      <div className="mt-6 text-center">
        <button
          onClick={() => dispatch(RemoveAllCart())}
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>

      {/* Total */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-4 rounded-xl shadow-lg mt-10">
        <h2 className="text-xl font-semibold text-white">Total</h2>
        <p className="text-xl font-bold text-yellow-300 mt-2 sm:mt-0">
          ${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>

      {/* Checkout */}
      <div className="mt-10 text-center">
        <button className="bg-yellow-500  text-white py-3 px-6 rounded-full shadow-xl hover:bg-yellow-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
