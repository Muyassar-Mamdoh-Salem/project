import { useSelector } from 'react-redux';

const Cart = () => {
  // استخدام "app" بدلاً من "ecommerce"
  const products = useSelector(state => state.app.products);

  if (!products || products.length === 0) {
    return <div className='mt-20'>Your cart is empty</div>; // رسالة للمستخدم إذا كانت السلة فارغة
  }
  

  return (
    <div className='mt-20'>
      <h1>Your Cart</h1>
      {/* عرض المنتجات هنا */}
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.name} />
          <p>Description: {product.description}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;

