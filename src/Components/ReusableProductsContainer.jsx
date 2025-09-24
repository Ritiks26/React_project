import { Link } from "react-router";
import { useState } from "react";
import { formatMoney } from "../pages/utils/money";
import "./ReusableProductsContainer.css";
import axios from "axios";
import { useEffect } from "react";

export function ReusableProductsContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="products-parent-container js-products-parent-container">
      {products.map((product) => {
        return (
          <div key={product.id} className="product-container">
            <div className="image-wrapper">
              <img className="products-image" src={product.image} />
              <Link to={`/product/${product.id}`}>
                <button className="view-product-button">VIEW PRODUCT</button>
              </Link>
            </div>

            <div className="product-content">
              <p className="product-name">{product.name}</p>
              <p className="product-color">
                <strong>{product.color}</strong>
              </p>
              <p className="product-price">
                {formatMoney(product.priceRupees)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
