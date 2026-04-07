import "./HomeSection.css";
import heroBg from "../../assets/background-web-4.png";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="home-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="home-overlay"></div>

      <div className="home-container">
        <div className="home-content">
          <p className="home-tag">— INCUBATED AT IIT ROPAR</p>

          <h1 className="home-title">
            Innovating Composites <br /> for the Future
          </h1>

          <p className="home-highlight">
            LIGHTWEIGHT, LETHAL AND LOCAL
          </p>

          <p className="home-description">
            Agniverse is building India’s next-generation multifunctional
            composite materials for defense, aerospace, electric vehicles,
            and medical applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;