import "./ProductsSection.css";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <p className="products-eyebrow">PRODUCTS</p>

        <h2 className="products-title">
          Advanced Composite Systems
        </h2>

        <p className="products-intro">
          AGNIVERSE develops next-generation engineered composite solutions
          that combine protection, performance, and multifunctionality
          for the world’s most demanding applications.
        </p>

        <div className="products-grid">
          <ProductCard
            title="Ballistic Composite Panels"
            summary="Lightweight, high-strength composite panels engineered to protect against gunfire, high-velocity projectiles, and fragmentation."
            slug="ballistic-composite-panels"
            highlight
          />

          <ProductCard
            title="Ballistic Panels with EMI Shielding"
            summary="Multifunctional panels combining ballistic protection with electromagnetic interference shielding."
            slug="ballistic-emi-panels"
            highlight
          />

          <ProductCard
            title="Structural Energy Storage Composites"
            summary="Load-bearing composite materials that store electrical energy while maintaining high structural performance."
            slug="structural-energy-storage"
            highlight
          />

          <ProductCard
            title="Modular Portable Helipads"
            summary="Rapidly deployable, modular helipad systems designed for challenging terrains."
            slug="portable-helipads"
            highlight
  tag="Under Development"
          />

          <ProductCard
  title="Semiconductor & Thermal Interface Cooling Solutions"
  summary="Optimizing heat management in semiconductor processes and high-performance electronics through advanced thermal interface materials, ensuring reliability, efficiency, and enhanced system performance."
  slug="structural-energy-storage"
  highlight
  showLink={false}
/>

<ProductCard
  title="Simulation Strategies for Multiple Applications"
  summary="Enabling efficient design and performance optimization through accurate, data-driven simulation techniques across diverse engineering applications."
  slug="structural-energy-storage"
  highlight
  showLink={false}
/>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
