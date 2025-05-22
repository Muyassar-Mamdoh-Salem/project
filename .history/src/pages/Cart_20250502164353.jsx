import { useSelector } from 'react-redux';

const Cart = () => {
  // تأكد من أن البيانات موجودة
  const products = useSelector(state => state.cart?.products);

  if (!products) {
    return <div>Loading...</div>; // أو رسالة خطأ مناسبة
  }

  return (
    <div className='mt-20'>
      {/* عرض المنتجات هنا */}
      {products.map(product => (
        <div key={product.id}>
          {/* عرض تفاصيل المنتج */}
        </div>
      ))}
    </div>
  );
};

export default Cart;