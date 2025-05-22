import { useParams } from "react-router-dom";
import products from "../"; // أو المكان اللي فيه بياناتك

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <p>المنتج غير موجود</p>;

  return (
    <div className="p-4">
      <h2>{product.name}</h2>
      <p>{product.description}</p> {/* وصف كامل */}
      <p>السعر: {product.price} جنيه</p>
      {/* باقي التفاصيل */}
    </div>
  );
};
export default ProductDetails;