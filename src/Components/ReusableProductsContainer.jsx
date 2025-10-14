import { Link } from "react-router";
import { formatMoney } from "../pages/utils/money";
import "./ReusableProductsContainer.css";

export function ReusableProductsContainer({ products }) {
  return (
    <div className="products-container-all">
      <h1>TRENDING NOW</h1>
      <div className="products-parent-container">
        {products.map((product) => {
          return (
            <div key={product.id} className="product-container">
              <div className="image-wrapper">
                <img
                  className="products-image"
                  src={
                    product.colors
                      ? product.colors[0].image
                      : "something went wrong"
                  }
                />
                <Link to={`/product/${product.id}`}>
                  <button className="view-product-button">VIEW PRODUCT</button>
                </Link>
              </div>

              <div className="product-content">
                <p className="product-name">{product.name}</p>
                <p className="product-color">
                  <strong>
                    {product.colors ? product.colors[0].name : product.name}
                    {console.log(product.colors)}
                  </strong>
                </p>
                <p className="product-price">
                  {formatMoney(product.priceRupees)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
