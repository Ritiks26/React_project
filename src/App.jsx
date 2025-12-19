import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { ScrollToTop } from "./Components/ScrollToTop";
import { HomePage } from "./pages/Home/HomePage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage";
import { LoginPage } from "./Components/LoginPage";
import { CheckfullProduct } from "./pages/Check-product/CheckfullProduct";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [productsMore, setProductsMore] = useState([]);
  const [productsMoreLast, setProductsMoreLast] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get("https://react-products-backend-obvl.onrender.com/products"),
      axios.get(
        "https://react-products-backend-obvl.onrender.com/products-More"
      ),
      axios.get(
        "https://react-products-backend-obvl.onrender.com/products-more-last"
      ),
      axios.get(
        "https://react-products-backend-obvl.onrender.com/new-arrivals"
      ),
    ]).then(
      ([
        productsResponse,
        productsMoreResponse,
        productsMoreLastResponse,
        newArrivalsResponse,
      ]) => {
        setProducts(productsResponse.data);
        setProductsMore(productsMoreResponse.data);
        setProductsMoreLast(productsMoreLastResponse.data);
        setNewArrivals(newArrivalsResponse.data);
        setLoading(false);
      }
    );
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
              newArrivals={newArrivals}
              loadCart={loadCart}
              loading={loading}
              setLoading={setLoading}
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
              newArrivals={newArrivals}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
