import { Link } from "react-router";
import { formatMoney } from "../pages/utils/money";
import "./ReusableProductsContainer.css";

export function ReusableProductsContainer({ products }) {
  return (
    <div className="products-parent-container js-products-parent-container">
      {products.map((product) => {
        const checkfullProduct = () => {
          const productId = product.id;
        };
        return (
          <div key={product.id} className="product-container">
            <div className="image-wrapper">
              <img className="products-image" src={product.image} />
              <Link to={`/product/${product.id}`}>
                <button
                  className="view-product-button"
                  onClick={checkfullProduct}
                >
                  VIEW PRODUCT
                </button>
              </Link>
            </div>

            <div className="product-content">
              <p className="product-name">{product.name}</p>
              <p className="product-color">
                <strong>{product.color.toUpperCase()}</strong>
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
