import "./ProductSkeleton.css";

export function ProductSkeleton({ count = 8 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="product-container skeleton-card">
          <div className="image-wrapper skeleton-image">
            <div className="skeleton-view-btn" />
          </div>

          <div className="product-content">
            <div className="skeleton-line name" />
            <div className="skeleton-line color" />
            <div className="skeleton-line price" />
          </div>
        </div>
      ))}
    </>
  );
}
