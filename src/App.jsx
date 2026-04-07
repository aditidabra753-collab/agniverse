import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import HomeSection from "./components/Home/HomeSection";
import AboutSection from "./components/About/AboutSection";
import ProductsSection from "./components/Products/ProductsSection";
import ServicesSection from "./components/Service/ServicesSection";
import TargetsSection from "./components/Target/TargetsSection";
import CareersSection from "./components/Careers/CareersSection";
import ContactSection from "./components/Contact/ContactSection";

import ProductDetail from "./pages/ProductDetail";

/* One-page landing layout */
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TargetsSection />
      <CareersSection />
      <ContactSection />

      <a href="#contact" className="floating-contact-cta">
  Contact Us
</a>

    </>
  );
};

/* ✅ ONLY ONE App FUNCTION */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
