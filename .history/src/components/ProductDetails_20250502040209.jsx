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
    <div className="p-4 li">
      <h2>{product.name}</h2>
      <p>{product.description}</p> {/* وصف كامل */}
      <p>السعر: {product.price} جنيه</p>
      {/* باقي التفاصيل */}
    </div>
  );
};

export default ProductDetails;
