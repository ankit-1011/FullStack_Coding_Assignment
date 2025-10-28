import CartDrawer from "./pages/cartDrawer";
import { useCart } from "./context/cartContext";
import Products from "./pages/Products";

function App() {
  const { openDrawer } = useCart();

  return (
    <>
      <nav className="p-4 shadow flex justify-between">
        <h1 className="text-xl font-bold">Vibe Commerce</h1>
        <button
          onClick={openDrawer}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Cart
        </button>
      </nav>

     <Products/>

      <CartDrawer />
    </>
  );
}

export default App;
