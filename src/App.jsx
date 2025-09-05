import { Routes, Route } from "react-router";
import { ScrollToTop } from "./Components/ScrollToTop";
import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { LoginPage } from "./Components/LoginPage";
import { useState } from "react";
import { CheckfullProduct } from "./pages/Check-product/CheckfullProduct";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  let totalQuantity = 0;
  cart.map((cartItems) => {
    totalQuantity += cartItems.quantity;
  });

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<HomePage totalQuantity={totalQuantity} />} />
        <Route
          path="checkout"
          element={
            <CheckoutPage
              cart={cart}
              setCart={setCart}
              totalQuantity={totalQuantity}
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
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
