import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartContext";

const CartDrawer = () => {
  const { cart, total, isDrawerOpen, closeDrawer, removeFromCart } = useCart();

  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 z-50 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">Your Cart</h2>
        <button
          className="text-red-500 font-bold"
          onClick={closeDrawer}
        >
          ✕
        </button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[75vh]">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.productId}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p>₹{item.price} × {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.productId)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex justify-between font-semibold mb-2">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
        <button className="w-full bg-blue-500 text-white rounded-2xl p-2   shadow-md active:shadow-indigo-500/50 active:scale-95" onClick={()=>navigate('/checkout')}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartDrawer
