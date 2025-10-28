import CartDrawer from "./pages/cartDrawer";
import { useCart } from "./context/cartContext";
import Products from "./pages/Products";
import { Route, Routes, useNavigate } from "react-router-dom";
import CheckoutPage from "./pages/checkoutPage";

function App() {
  const { openDrawer } = useCart();
  const navigate =useNavigate()

  return (
    <>
      <nav className="p-4 shadow flex justify-between">
        <h1 className="text-xl font-bold">Vibe Commerce</h1>
        <button
          onClick={()=>navigate('/cartDrawer')}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Cart
        </button>
      </nav>

       <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cartDrawer" element={<CartDrawer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
