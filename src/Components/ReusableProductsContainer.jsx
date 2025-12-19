import { Link } from "react-router";
import { formatMoney } from "../pages/utils/money";
import { ProductSkeleton } from "../pages/Home/ProductSkeleton";
import "./ReusableProductsContainer.css";

export function ReusableProductsContainer({ title, products, loading }) {
  return (
    <div className="products-container-all">
      <h1>{title}</h1>
      <div className="products-parent-container">
        {loading ? (
          <ProductSkeleton />
        ) : (
          products.map((product) => {
            return (
              <div key={product.id} className="product-container">
                <div className="image-wrapper">
                  <img
                    className="products-image"
                    src={product.colors[0].image[0]}
                  />
                  <Link to={`/product/${product.id}`}>
                    <button className="view-product-button">
                      VIEW PRODUCT
                    </button>
                  </Link>
                </div>

                <div className="product-content">
                  <p className="product-name">{product.name}</p>
                  <p className="product-color">
                    <strong>{product.colors[0].name.toUpperCase()}</strong>
                  </p>
                  <p className="product-price">
                    {formatMoney(product.priceRupees)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
