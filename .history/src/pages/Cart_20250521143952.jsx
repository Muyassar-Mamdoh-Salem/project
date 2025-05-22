import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, RemoveAllCart } from '../Redux/appSlice';

const Cart = () => {
  const products = useSelector((state) => state.app.products);
  const dispatch = useDispatch();

  if (!products || products.length === 0) {
    return (
      <div className="mt-32 text-center text-gray-600 px-3 sm:px-4">
        <div className="flex flex-col items-center justify-center">
          <img src="shopping.png" className="w-20 h-20 sm:w-28 sm:h-28 mb-6 animate-bounce" />
          <h2 className="text-lg sm:text-2xl font-semibold text-gray-800 mb-3">Your cart is empty!</h2>
          <p className="text-sm sm:text-base text-gray-500 mb-4">
            It looks like you haven't added anything to your cart yet.
          </p>
          <button
            className="bg-blue-600 text-white text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={() => window.location.href = '/shop'}
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-gray-800 mb-8">Your Cart</h1>

      <div className="space-y-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 bg-gradient-to-r from-purple-600 to-blue-500 p-3 sm:p-5 rounded-xl shadow-md"
          >
            {/* Image + info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 w-full sm:w-2/3">
              <img
                src={product.image}
                alt={product.title}
                className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow"
              />
              <div className="text-white text-center sm:text-left break-words max-w-full sm:max-w-sm md:max-w-md">
                <h2 className="text-base sm:text-lg font-semibold mb-1">{product.title}</h2>
                <p className="text-sm sm:text-base text-white/90">{product.description}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="text-white text-center sm:text-right w-full sm:w-1/3">
              <p className="text-sm sm:text-base font-semibold">${product.price}</p>
              <p className="mt-1 text-sm sm:text-base">Qty: {product.quantity}</p>
              <div className="flex justify-center sm:justify-end gap-2 mt-2">
                <button
                  onClick={() => dispatch(increment({ id: product.id }))}
                  className="text-lg bg-green-500 px-2 py-1 rounded-full hover:bg-green-600"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(decrement({ id: product.id }))}
                  className="text-lg bg-red-500 px-2 py-1 rounded-full hover:bg-red-600"
                >
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clear All */}
      <div className="mt-6 text-center">
        <button
          onClick={() => dispatch(RemoveAllCart())}
          className="bg-red-600 text-white text-sm sm:text-base px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Clear All
        </button>
      </div>

      {/* Total */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-3 sm:p-5 rounded-xl shadow-lg mt-10">
        <h2 className="text-lg sm:text-xl font-semibold text-white">Total</h2>
        <p className="text-lg sm:text-2xl font-bold text-yellow-300 mt-2 sm:mt-0">
          ${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>

      {/* Checkout */}
      <div className="mt-10 text-center">
        <button className="bg-yellow-500 text-white text-sm sm:text-base py-3 px-6 sm:py-4 sm:px-10 rounded-full shadow-xl hover:bg-yellow-600 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
