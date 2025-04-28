import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();

    useEffect(() => {
        console.log('البيانات المستلمة:', products);
        console.log('عدد المنتجات:', products.length);
    }, [products]);

    return (
        <div className='container' >
            <h2>المنتجات ({products.length})</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} width="100" />
                        <p>{product.title}</p>
                        <p>{product.price}$</p>
                        <button>Add to cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
