import "./ServicesSection.css";

const ServicesSection = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">

        {/* Header */}
        <div className="services-header fade-in">
          <p className="services-eyebrow">ENGINEERING CONSULTANCY</p>
          <h2 className="services-title">
            Specialized Engineering Services
          </h2>
          <p className="services-subtitle">
            We design and develop advanced mechanical testing systems and
            experimental infrastructure for research and industrial applications.
          </p>
        </div>

        {/* Capability Strip */}
        <div className="services-capabilities slide-in">
          <span>Advanced Mechanical Testing Systems</span>
          <span>High-Strain-Rate Material Characterization</span>
          <span>Engineering Design & Simulation Support</span>
          <span>Custom Experimental & Research Infrastructure</span>
        </div>

        {/* Divider */}
        <div className="services-divider"></div>

        {/* Flagship */}
        <div className="services-flagship fade-in">
          <p className="flagship-label">FLAGSHIP EXPERTISE</p>
          <h3>Split Hopkinson Pressure Bar (SHPB) Systems</h3>
          <p>
            Design and development of high-strain-rate tensile and compressive
            testing systems with integrated calibration and data acquisition.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="services-fixed-cta">
        <a
          href="https://forms.gle/LDZSSzJkRJu1F38U7"
          target="_blank"
          rel="noopener noreferrer"
          className="services-button"
        >
          Request Technical Consultation
        </a>
      </div>

    </section>
  );
};

export default ServicesSection;