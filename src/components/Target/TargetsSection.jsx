import { useEffect, useRef } from "react";
import "./TargetsSection.css";

const targets = [
  {
    title: "Aerospace & Drones",
    description: "ISRO, aerospace OEMs, drone manufacturers",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 16l20-8-8 20-2-7-7-2z" />
      </svg>
    ),
  },
  {
    title: "Automotive",
    description: "EV and automotive OEMs (Tata, Ola, Mahindra)",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M5 16l1-4h12l1 4M7 16a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Semiconductor",
    description:
      "Chip manufacturers, fabrication units, and semiconductor equipment providers",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M9 3h6M9 21h6M3 9v6M21 9v6M7 7h10v10H7z" />
      </svg>
    ),
  },
  {
    title: "Medical & Communication",
    description: "Hospitals, medtech companies, telecom equipment providers",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Defense",
    description: "Indian Army, Mahindra Defence, L&T Defence, DRDO laboratories",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
      </svg>
    ),
  },
  {
    title: "Other Industries",
    description: "LAM Research, Oceaneering, specialized industrial partners",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M3 21h18M5 21V7l7-4 7 4v14" />
      </svg>
    ),
  },
];

const TargetsSection = () => {
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
    <section id="targets" className="targets-section" ref={sectionRef}>
      <div className="targets-container">

        <div className="targets-header">
          <p className="targets-eyebrow">TARGET APPLICATIONS</p>
          <h2 className="targets-title">Industries We Serve</h2>
          <p className="targets-subtitle">
            AGNIVERSE technologies are engineered for mission-critical industries
            where reliability, precision, and performance are essential.
          </p>
        </div>

        <div className="targets-grid">
          {targets.map((item, index) => (
            <div
              key={index}
              className="target-card"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="icon">{item.icon}</div>
              <h3 className="target-title">{item.title}</h3>
              <p className="target-description">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TargetsSection;