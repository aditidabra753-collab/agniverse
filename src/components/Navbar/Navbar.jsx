import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/agniverse-logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-solid" : "navbar-transparent"}`}>
      
      {/* LOGO */}
      <div className="navbar-logo">
        <img src={logo} alt="AGNIVERSE Logo" />
      </div>

      {/* LINKS */}
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#services">Consultation / Services</a></li>
        <li><a href="#targets">Targets</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </nav>
  );
};

export default Navbar;