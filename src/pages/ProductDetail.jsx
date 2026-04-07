import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";
import "./ProductDetail.css";

/* ✅ IMPORTS (MATCH YOUR FILES EXACTLY) */
import bcp1 from "../assets/bcp-1.JPG";
import bcp2 from "../assets/bcp-2.JPG";
import bcp3 from "../assets/bcp-3.JPG";

import emi1 from "../assets/emi-1.jpg";
import emi2 from "../assets/emi-2.JPG";
import emi3 from "../assets/emi-3.jpg";

import ses from "../assets/ses.JPG";
import helipad from "../assets/helipad.jpg";

/* ✅ ORIGINAL DATA + IMAGES ADDED */
const PRODUCT_DATA = {
  "ballistic-composite-panels": {
    title: "Ballistic Composite Panels",
    tagline: "Lightweight, high-strength engineered protection systems",
    images: [bcp1, bcp2, bcp3],
    description: [
      "These lightweight, engineered structural composite ballistic panels are designed to deliver reliable and robust protection against gunshots, high-velocity projectiles, and fragmentation threats. Developed using advanced composite materials and optimized layup architectures, these panels achieve an exceptional balance of strength, toughness, and low weight.",
      "The panels are suitable for both mobile defense platforms such as vehicles, UAV ground stations, and portable shelters, as well as stationary applications like checkpoints, bunkers, command posts, and critical infrastructure reinforcement.",
      "Their modular design, multi-hit capability, and excellent energy absorption ensure dependable performance in mission-critical environments, even during extended engagements."
    ],
    applications: [
      "Military and defense vehicles",
      "Portable and stationary protective shelters",
      "Critical infrastructure reinforcement",
      "Law enforcement and VIP protection",
      "Disaster-response and high-risk environments"
    ],
    capabilities: [
      "Customizable threat levels (small-arms, AK-47, INSAS)",
      "Multi-hit ballistic resistance",
      "Blast fragment and secondary projectile protection",
      "Lightweight, modular construction",
      "Rapid deployment capability"
    ]
  },

  "ballistic-emi-panels": {
    title: "Ballistic Panels with EMI Shielding",
    tagline: "Dual-function protection against ballistic and electromagnetic threats",
    images: [emi1, emi2, emi3],
    description: [
      "Ballistic panels with electromagnetic shielding represent an advanced evolution of conventional protective materials, offering both physical and electromagnetic protection in a single engineered structure.",
      "By incorporating conductive layers and specialized composite architectures, these panels attenuate electromagnetic interference across wide frequency ranges while maintaining robust ballistic resistance.",
      "They are particularly valuable in environments where sensitive electronic systems must remain operational under physical and electromagnetic threats."
    ],
    applications: [
      "Command and communication centers",
      "Medical imaging and diagnostic facilities",
      "Aerospace and avionics systems",
      "Radar and electronic warfare installations",
      "Defense electronics protection"
    ],
    capabilities: [
      "Integrated EMI shielding",
      "Wide-band electromagnetic attenuation",
      "Ballistic and fragmentation protection",
      "Lightweight multifunctional composite structure",
      "Protection of mission-critical electronics"
    ]
  },

  "structural-energy-storage": {
    title: "Structural Energy Storage Composites",
    tagline: "Load-bearing structures with integrated energy storage",
    images: [ses],
    description: [
      "Structural energy storage composites are next-generation multifunctional materials engineered to combine mechanical strength with electrical energy storage.",
      "These materials replace conventional battery packs with load-bearing, energy-storing components, significantly reducing system weight while improving efficiency and usable volume.",
      "Their tunable mechanical and electrochemical properties make them ideal for aerospace, defense, UAVs, EVs, and next-generation mobility platforms."
    ],
    applications: [
      "Electric aircraft and drones",
      "Electric vehicle body structures",
      "Defense and aerospace platforms",
      "Robotics and autonomous systems",
      "High-performance energy-integrated structures"
    ],
    capabilities: [
      "Structural battery functionality",
      "High stiffness-to-weight ratio",
      "Integrated load-bearing and energy storage",
      "Customizable mechanical and electrochemical properties",
      "Compatibility with EMI shielding and thermal management"
    ]
  },

  "portable-helipads": {
    title: "Modular Portable Helipads",
    tagline: "Rapidly deployable landing solutions for challenging terrains",
    images: [helipad],
    description: [
      "Modular portable helipads are being developed to enable helicopter operations in locations where permanent infrastructure is not feasible.",
      "These systems are designed for quick assembly and deployment using lightweight composite modules, ensuring stability and reliability in difficult environments.",
      "They are particularly useful for defense logistics, disaster response, and remote-area operations."
    ],
    applications: [
      "Remote and high-altitude regions",
      "Disaster response operations",
      "Defense logistics and field deployments",
      "Temporary medical evacuation points",
      "Emergency and humanitarian missions"
    ],
    capabilities: [
      "Rapid assembly and disassembly",
      "Lightweight modular construction",
      "High structural stability",
      "Designed for harsh terrains",
      "Future-ready composite architecture"
    ]
  }
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = PRODUCT_DATA[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <section className="product-detail">
        <div className="product-detail-container">
          <h2>Product not found</h2>
          <HashLink smooth to="/#products" className="back-link">
            ← Back to Products
          </HashLink>
        </div>
      </section>
    );
  }

  return (
    <section className="product-detail">
      <div className="product-detail-container">

        <HashLink smooth to="/#products" className="back-link">
          ← Back to Products
        </HashLink>

        <h1 className="product-title">{product.title}</h1>
        <p className="product-tagline">{product.tagline}</p>

        <div className="product-detail-grid">

          {/* TEXT */}
          <div className="product-text">
            {product.description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}

            <h3>Applications</h3>
            <ul>
              {product.applications.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <h3>Key Capabilities</h3>
            <ul>
              {product.capabilities.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* IMAGES */}
          <div className="product-visual">
            <div className={`image-gallery ${product.images.length === 1 ? "single" : "multi"}`}>
              {product.images.map((img, index) => (
                <img key={index} src={img} alt="product" />
              ))}
            </div>
          </div>

        </div>

        <div className="product-cta">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdPUa31oN29STY1roXa9DVFbYdDraeiP-Z7TVYtUIozEAbDkA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="product-button"
          >
            Request Custom Solution
          </a>
        </div>

        <HashLink smooth to="/#products" className="back-link">
          ← Back to Products
        </HashLink>

      </div>
    </section>
  );
};

export default ProductDetail;