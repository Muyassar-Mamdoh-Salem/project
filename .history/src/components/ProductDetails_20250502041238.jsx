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
    <div className="p-4 bg-gray-100 space-y-8">
      <h2 className="text-2xl font-bold" >{product.title}</h2>
      <img className="w-40" src={product.image} alt={product.title} />
      <p>{product.description}</p> 
      <p>price: {product.price}$</p>
      <div>
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 active:scale-95 transition-transform 
      duration-150">Add to cart</button>
      <button className="border-2 rounded-lg p-3 bg-orange-400 active:bg-orange-600 transform">Buy Now</button> 
      </div>
    </div>
  );
};

export default ProductDetails;
