import { Link } from "react-router";
import "./NewArrivals.css";

export function NewArrivals({ title, newArrivals }) {
  return (
    <div className="arrivals-all">
      <h1>{title}</h1>
      <div className="new-arrivals-container">
        {newArrivals.map((product) => (
          <div className="new-arrivals-child">
            <Link to={`/product/${product.id}`}>
              <img src={product.colors[0].image[0]} alt="" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
