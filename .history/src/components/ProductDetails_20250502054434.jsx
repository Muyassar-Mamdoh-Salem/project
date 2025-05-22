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
        setError("  ");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">جارٍ التحميل...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-red-500 font-bold mb-4">المنتج غير موجود</p>
          <a href="/" className="text-blue-500 underline">العودة إلى الصفحة الرئيسية</a>
        </div>
      </div>
    );
  }

  const fullStars = Math.floor(product.rating?.rate || 0);
  const halfStar = product.rating?.rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-700">
          {product.title}
        </h2>

        <div className="flex justify-center">
          <img
            className="w-48 h-48 object-contain"
            src={product.image}
            alt={`صورة المنتج: ${product.title}`}
          />
        </div>

        <p className="text-gray-700 text-sm leading-relaxed">
          <span className="font-semibold">Details:</span> {product.description}
        </p>

        <p className="text-lg font-medium text-green-600">
          Price: ${product.price}
        </p>

        {/* ⭐ تقييم النجوم */}
        <div className="flex items-center space-x-1 text-yellow-400">
          {Array(fullStars).fill().map((_, i) => (
            <svg key={`full-${i}`} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"/>
            </svg>
          ))}
          {halfStar && (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0v15z" />
            </svg>
          )}
          {Array(emptyStars).fill().map((_, i) => (
            <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z"/>
            </svg>
          ))}
          <span className="text-sm text-gray-500 ml-2">
            ({product.rating?.rate || "N/A"})
          </span>
        </div>

        <div className="flex justify-between space-x-4">
          <button
            aria-label="أضف إلى السلة"
            className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition duration-150"
          >
            Add to cart
          </button>
          <button
            aria-label="شراء الآن"
            className="flex-1 bg-orange-400 text-white py-2 rounded-lg hover:bg-orange-500 active:scale-95 transition duration-150"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
