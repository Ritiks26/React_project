import "./SkeletonLoading.css";

export function SkeletonLoading() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-image shimmer"></div>

      <div className="skeleton-details">
        <div className="skeleton-line title shimmer"></div>
        <div className="skeleton-line subtitle shimmer"></div>
        <div className="skeleton-line price shimmer"></div>

        <div className="skeleton-colors">
          <div className="skeleton-circle shimmer"></div>
          <div className="skeleton-circle shimmer"></div>
          <div className="skeleton-circle shimmer"></div>
        </div>

        <div className="skeleton-sizes">
          <div className="skeleton-box shimmer"></div>
          <div className="skeleton-box shimmer"></div>
          <div className="skeleton-box shimmer"></div>
        </div>

        <div className="skeleton-btn shimmer"></div>
      </div>
    </div>
  );
}
