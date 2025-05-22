import React from "react";
import { useSelector } from "react-redux";

const Categories = () => {
  // جلب المنتجات من الـ Redux store
  const products = useSelector((state) => state.app.products);

  // تجميع المنتجات حسب التصنيف (category)
  const categories = {};

  products.forEach((product) => {
    if (!categories[product.category]) {
      categories[product.category] = [];
    }
    categories[product.category].push(product);
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Categories</h1>

      {/* عرض كل تصنيف */}
      {Object.keys(categories).map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold capitalize mb-4">{category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories[category].map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-gray-600">{product.brand}</p>
                <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
