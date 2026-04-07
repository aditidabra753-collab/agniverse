import { useState } from "react";
import "./AboutSection.css";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <p className="about-eyebrow">ABOUT AGNIVERSE</p>

        <h2 className="about-title">
          Engineering Advanced Materials for Extreme Performance
        </h2>

        <p className="about-text">
          AGNIVERSE is a next-generation engineered materials company delivering
          advanced, customizable solutions for the world’s most demanding
          industries. We specialize in developing lightweight, high-strength,
          and multifunctional materials with capabilities that include EMI
          shielding, ballistic protection, and structural energy storage.
        </p>

        {expanded && (
          <div className="about-more">
            <p className="about-text">
              In addition to material development, AGNIVERSE also provides
              engineering design solutions and builds specialized testing
              systems, including custom setups such as Hopkinson tensile and
              compressive bars, as well as other advanced mechanical testing
              equipment.
            </p>

            <p className="about-text">
              Our products and engineering services are designed to solve
              critical challenges across defense, aerospace, telecommunications,
              automotive, and medical industries. Whether it’s creating
              materials that block electromagnetic interference, designing
              ultra-tough ballistic panels, or pioneering structural battery
              composites that integrate strength with energy storage, AGNIVERSE
              delivers solutions that push the limits of modern material
              science.
            </p>

            <p className="about-text">
              At the core of AGNIVERSE is a commitment to innovation, research,
              and precision customization, ensuring that every material and
              system is tailored to meet exact client specifications and
              seamlessly integrates into applications such as drones, armored
              platforms, EMI-shielded electronics, electric vehicles, and
              next-generation medical devices.
            </p>
          </div>
        )}

        <button
          className="about-toggle"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See less" : "See more"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
