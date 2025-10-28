import CartDrawer from "./pages/cartDrawer";
import Products from "./pages/Products";
import { Route, Routes} from "react-router-dom";
import CheckoutPage from "./pages/checkoutPage";
import Navbar from "./component/Navbar";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Navbar/>
       <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cartDrawer" element={<CartDrawer />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<h2 className="flex justify-center align-center mt-20 font-bold text-3xl">404 Page Not Found</h2>} />
      </Routes>
     
    </>
  );
}

export default App;
