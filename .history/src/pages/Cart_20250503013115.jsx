import { useSelector } from 'react-redux';

const Cart = () => {
  // استخدام "app" بدلاً من "ecommerce"
  const products = useSelector((state) => state.app.products);

  if (!products || products.length === 0) {
    return (
      <div className="mt-20 text-center text-2xl font-semibold text-gray-600">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="mt-20 p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Your Cart</h1>

      {/* عرض المنتجات هنا */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center space-x-6">
            <img
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              src={product.image}
              alt={product.name}
              className="rounded-xl shadow-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">{product.title}</h2>
              <p className="text-sm text-white opacity-80">{product.description}</p>
            </div>
          </div>

          <div className="text-right text-white">
            <p className="text-xl font-semibold">${product.price}</p>
            <p className="text-sm opacity-70">Quantity: {product.quantity}</p>
          </div>
        </div>
      ))}

      {/* إجمالي السعر */}
      <div className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg mt-12 transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-white">Total</h2>
        <p className="text-2xl font-bold text-white">
          ${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>

      {/* زر الدفع */}
      <div className="mt-12 text-center">
        <button className="bg-yellow-500 text-white py-4 px-8 rounded-full shadow-xl hover:bg-yellow-600 transform transition duration-300 ease-in-out">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
