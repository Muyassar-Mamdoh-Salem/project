import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductsData } from "../api/Api"; // ✅ الأقواس ضرورية

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await ProductsData(); // استدعاء دالة API لجلب المنتجات
        const selectedProduct = products.find(p => p.id === parseInt(id)); // ابحث عن المنتج باستخدام ID
        setProduct(selectedProduct);
      } catch (err) {
        setError("فشل في تحميل المنتج");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>جارٍ التحميل...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>المنتج غير موجود</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 grid-cols1 md:grid-cols-">
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full space-y-6">
      <h2 className="text-3xl font-bold text-center text-purple-700">{product.title}</h2>
      
      <div className="flex justify-center">
        <img className="w-48 h-48 object-contain" src={product.image} alt={product.title} />
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        <span className="font-semibold">Details:</span> {product.description}
      </p>
      
      <p className="text-lg font-medium text-green-600">Price: ${product.price}</p>
  
      {/* ⭐ تقييم النجوم */}
      <div className="flex items-center space-x-1 text-yellow-400">
        {Array(4).fill(0).map((_, i) => (
          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"/>
          </svg>
        ))}
        <svg className="w-5 h-5 text-gray-300" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"/>
        </svg>
        <span className="text-sm text-gray-500 ml-2">(4.0)</span>
      </div>
  
      <div className="flex justify-between space-x-4">
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition duration-150">
          Add to cart
        </button>
        <button className="flex-1 bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 active:scale-95 transition duration-150">
          Buy Now
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default ProductDetails;
