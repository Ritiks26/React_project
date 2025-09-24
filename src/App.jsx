import { Routes, Route } from "react-router";
import { ScrollToTop } from "./Components/ScrollToTop";
import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { LoginPage } from "./Components/LoginPage";
import { useEffect, useState } from "react";
import { CheckfullProduct } from "./pages/Check-product/CheckfullProduct";
import "./App.css";
import axios from "axios";

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get(
      "http://localhost:9000/cart?expand=products"
    );
    setCart(response.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  let totalQuantity = 0;
  cart.map((cartItems) => {
    totalQuantity += cartItems.quantity;
  });

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          index
          element={
            <HomePage totalQuantity={totalQuantity} loadCart={loadCart} />
          }
        />
        <Route
          path="checkout"
          element={
            <CheckoutPage
              cart={cart}
              setCart={setCart}
              totalQuantity={totalQuantity}
              loadCart={loadCart}
            />
          }
        />
        <Route path="login" element={<LoginPage />} />
        <Route
          path="product/:productId"
          element={
            <CheckfullProduct
              cart={cart}
              setCart={setCart}
              totalQuantity={totalQuantity}
              loadCart={loadCart}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
