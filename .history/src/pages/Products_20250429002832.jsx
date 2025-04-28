import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();

    useEffect(() => {
        console.log( products);
        console.log( products.length);
    }, [products]);

    return (
        
        <div> 
           <h2 className='text-3xl font-bold m-r5'>Product</h2>  
           <div className="container-fluid flex flex-wrap justify-center items-center">
        {products.map((product) => (
          <div key={product.id} className="w-10 sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            
            <ul className="list-none">
              <li className="border p-4 rounded-lg mb-4">
                <img src={product.image} alt={product.title} className="w-full h-auto mb-2" />
                <p className="text-lg font-medium">{product.title}</p>
                <p className="text-gray-600">{product.price}$</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Add to cart</button>
              </li>
            </ul>
          </div>
          
        ))}
      </div>
      </div>
      
      
    );
};

export default Products;
