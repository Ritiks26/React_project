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
  const [products, setProducts] = useState([]);
  const [productsMore, setProductsMore] = useState([]);
  const [productsMoreLast, setProductsMoreLast] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    // axios.get("https://react-products-backend-obvl.onrender.com/products").then((response) => {
    axios.get("https://react-products-backend-obvl.onrender.com/products").then((response) => {
      setProducts(response.data);
    });

    axios.get("https://react-products-backend-obvl.onrender.com/products-More").then((response) => {
      setProductsMore(response.data);
    });

    axios.get("https://react-products-backend-obvl.onrender.com/products-more-last").then((response) => {
      setProductsMoreLast(response.data);
    });
  }, []);

  const loadCart = async () => {
    const response = await axios.get(
      "https://react-products-backend-obvl.onrender.com/cart?expand=products"
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
            <HomePage
              totalQuantity={totalQuantity}
              products={products}
              productsMore={productsMore}
              productsMoreLast={productsMoreLast}
              loadCart={loadCart}
            />
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
              products={products}
              productsMore={productsMore}
              productsMoreLast={productsMoreLast}
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
              products={products}
              productsMore={productsMore}
              productsMoreLast={productsMoreLast}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
