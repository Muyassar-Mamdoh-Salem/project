import React, { useState } from "react";
// import productsData from "../data/products.json"; // أو من Redux
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProducts = productsData.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8">
        Explore All Products
      </h1>

      {/* Search */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full sm:w-1/2 p-2 rounded-md border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
