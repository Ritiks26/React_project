import { formatMoney } from "../utils/money";
import { Link } from "react-router";
import "./SuggestedProducts.css";

export function SuggestedProducts({ allProducts }) {
  return (
    <div className="suggested-product-all">
      <h1>YOU MAY ALSO LIKE_</h1>
      <div className="suggested-product-parent">
        {allProducts.slice(9, 13).map((product) => (
          <div key={product.id} className="suggested-product-container">
            <div className="image-wrapper">
              <img
                className="suggested-product-image"
                src={
                  product.colors
                    ? product.colors[2].image
                    : "something went wrong"
                }
              />
              <Link to={`/product/${product.id}`}>
                <button className="view-product-button">VIEW PRODUCT</button>
              </Link>
            </div>

            <div className="suggested-product-content">
              <p className="suggested-product-name">{product.name}</p>
              <p className="suggested-product-color">
                <strong>
                  {product.colors
                    ? product.colors[2].name.toUpperCase()
                    : product.name}
                </strong>
              </p>
              <p className="suggested-product-price">
                {formatMoney(product.priceRupees)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
