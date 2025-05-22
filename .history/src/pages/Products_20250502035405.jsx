import React, { useEffect } from 'react';
import { useLoaderData,Link  } from 'react-router-dom';
const Products = () => {
    const products = useLoaderData();

    useEffect(() => {
        console.log( products);
        console.log( products.length);
    }, [products]);

    return (
        
        <div> 
           <h2 className='text-3xl font-bold mx-5'>Product</h2>  
           <div className="container-fluid flex flex-wrap justify-center items-center mx-auto">
        {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">

            <ul className="list-none  ">
              <li   className="w-[200px] h-auto mb-2 transform transition-transform duration-300 hover:scale-105">
                <img src={product.image}   style={{ width: "200px"  }} alt={product.title} className="h-auto mb-2" />
                <p className="text-lg font-medium">{product.title}</p>
                <p>{product.description.slice(0, 70)}...</p>
                <Link to={`/product/${product.id}`}>
  <button className="text-blue-600 border-2 rounded-lg px-4 py-2"></button>
</Link>

                <div className='flex justify-between items-center '>
                <p className="text-gray-600">{product.price}$</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition-transform duration-150">Add to cart</button>
                </div> 
                <button></button>
              </li>
            </ul>
          </div>
          
        ))}
      </div>
      </div>
      
      
    );
};

export default Products;
