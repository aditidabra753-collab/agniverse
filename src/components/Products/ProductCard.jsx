import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ title, summary, slug, highlight, tag, showLink = true }) => {
  return (
    <div className={`product-card ${highlight ? "product-highlight" : ""}`}>
      {tag && <span className="product-tag">{tag}</span>}

      <h3 className="product-title">{title}</h3>

      <p className="product-summary">{summary}</p>

      {/* CONDITIONAL LINK */}
      {showLink && (
        <Link to={`/products/${slug}`} className="product-link">
          See more
        </Link>
      )}
    </div>
  );
};

export default ProductCard;