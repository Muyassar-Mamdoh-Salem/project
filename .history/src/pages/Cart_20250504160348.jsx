import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/appSlice';

const Cart = () => {
  const products = useSelector((state) => state.app.products);
  const dispatch = useDispatch();

  if (!products || products.length === 0) {
    return (
      <div className="mt-60 text-center text-gray-600">
        <div className="flex flex-col items-center justify-center">
          <img src="shopping.png" className="w-32 h-32 mb-6 animate-bounce" />
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Your cart is empty!</h2>
          <p className="text-lg text-gray-500 mb-4">It looks like you haven't added anything to your cart yet. Start shopping now!</p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition ease-in-out duration-200"
            onClick={() => window.location.href = '/shop'}
          >
            Go to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 p-6 max-w-7xl mx-auto">
      <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">Your Cart</h1>

      {products.map((product) => (
        <div key={product.id} className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-lg shadow-lg mb-8 transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center space-x-6">
            <img
              style={{ width: '180px', height: '180px', objectFit: 'cover' }}
              src={product.image}
              alt={product.name}
              className="rounded-xl shadow-xl"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">{product.title}</h2>
              <p className="text-sm max-w-[60%] text-white">{product.description}</p>
            </div>
          </div>

          <div className="text-right text-white">
            <p className="text-xl   mr-20 font-semibold">${product.price}</p>
            <p className="text-xl  mr-20">Quantity:${product.quantity}</p>
            <div className="flex justify-between items-center mr-20 mt-2">
              <button
                onClick={() => dispatch(increment({ id: product.id }))}
                className="text-2xl bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-all"
              >
                +
              </button>
              <button
                onClick={() => dispatch(decrement({ id: product.id }))}
                className="text-2xl bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-all"
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg mt-12 transform hover:scale-105 transition-all duration-300">
        <h2 className="text-3xl font-semibold text-white">Total</h2>
        <p className="text-3xl font-bold text-yellow-400">
          ${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
        </p>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-yellow-500  text-white py-4 px-8 rounded-full shadow-xl hover:bg-yellow-600 transform transition duration-300 ease-in-out">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
