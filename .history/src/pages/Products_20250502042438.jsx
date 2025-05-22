import React, { useEffect } from 'react';
import { useLoaderData,Link  } from 'react-router-dom';
const Products = () => {
    const products = useLoaderData();

    useEffect(() => {
        console.log( products);
        console.log( products.length);
    }, [products]);

    return (
      <div className="bg-gray-50 min-h-screen py-10">
      <h2 className="text-4xl font-bold text-center text-purple-700 mb-10">Our Products</h2>
    
      <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
    
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.title}</h3>
    
            <p className="text-gray-600 text-sm mb-2">
              {product.description.slice(0, 70)}...
            </p>
    
            <div className="flex justify-between items-center mt-auto mb-4">
              <span className="text-green-600 font-bold text-md">${product.price}</span>
              <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition">
                Add to cart
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

export default Products;
