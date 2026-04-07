import { useEffect, useRef } from "react";
import "./CareersSection.css";

const CareersSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("reveal");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="careers"
      className="careers-section"
      ref={sectionRef}
    >
      <div className="careers-container">

        {/* Header */}
        <div className="careers-header">
          <p className="careers-eyebrow">CAREERS</p>
          <h2 className="careers-title">
            Build the Future of Advanced Engineering
          </h2>
          <p className="careers-subtitle">
            At AGNIVERSE, we work on complex engineering problems at the
            intersection of materials science, mechanics, and real-world
            applications.
          </p>
        </div>

        {/* VALUES */}
        <div className="careers-values">

          <div className="value-row">
            <div className="value-heading">
              <svg viewBox="0 0 24 24">
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" />
              </svg>
              <h4>Challenging Problems</h4>
            </div>
            <p>
              Work on real engineering challenges that demand deep thinking,
              experimentation, and innovation.
            </p>
          </div>

          <div className="value-row">
            <div className="value-heading">
              <svg viewBox="0 0 24 24">
                <path d="M3 21h6l12-12-6-6L3 15v6z" />
              </svg>
              <h4>Hands-on Engineering</h4>
            </div>
            <p>
              From simulation and design to fabrication and testing, you’ll be
              involved end-to-end.
            </p>
          </div>

          <div className="value-row">
            <div className="value-heading">
              <svg viewBox="0 0 24 24">
                <path d="M6 2h12v6H6zM9 14h6v8H9z" />
              </svg>
              <h4>Research-Driven</h4>
            </div>
            <p>
              We value scientific rigor, data-driven decisions, and continuous
              learning.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="careers-cta">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeX7LCuRpXOUCK_JiBL3Nvx-20vGCN8lrn3ZidvMGCtreQHzA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="careers-button"
          >
            Join AGNIVERSE
          </a>

          <p className="cta-note">
            Open to full-time roles, internships, and research collaborations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareersSection;