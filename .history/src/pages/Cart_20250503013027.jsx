import { useSelector } from 'react-redux';

const Cart = () => {
  // استخدام "app" بدلاً من "ecommerce"
  const products = useSelector((state) => state.app.products);

  if (!products || products.length === 0) {
    return (
      <div className="mt-20 text-center text-xl text-gray-600">
        Your cart is empty.
      </div>
    );
  }

  return (
    <div className="mt-20 p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">Your Cart</h1>
      
      {/* عرض المنتجات هنا */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-white p-5 rounded-lg shadow-md mb-6 transition-transform transform hover:scale-105"
        >
          <div className="flex items-center space-x-4">
            <img
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              src={product.image}
              alt={product.name}
              className="rounded-lg"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.description}</p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-lg text-gray-700 font-semibold">${product.price}</p>
            <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
          </div>
        </div>
      ))}

      {/* إجمالي السعر */}
      <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md mt-8">
        <h2 className="text-2xl font-semibold text-gray-800">Total</h2>
        <p className="text-xl font-bold text-gray-900">
          ${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>

      {/* زر الدفع */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
