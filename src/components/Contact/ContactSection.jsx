import { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ ADD THIS
import "./ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    // ✅ EMAILJS SEND
    emailjs
      .send(
        "service_m4ep6yg",      
        "template_1kyd1bq",    
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "r-7TuoaDioWqNLXcl"       // 🔁 replace this
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");

          // Reset form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error.text);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <p className="contact-eyebrow">CONTACT</p>
          <h2 className="contact-title">
            Let’s Build Something Meaningful
          </h2>
          <p className="contact-subtitle">
            Whether you’re exploring advanced materials, engineering consultancy,
            or research collaboration, we’d be glad to connect.
          </p>
        </div>

        {/* Content */}
        <div className="contact-grid">

          {/* Left */}
          <div className="contact-info">
            <h4>Get in Touch</h4>
            <p>
              Reach out to discuss engineering challenges, potential
              collaborations, or custom solutions.
            </p>

            <div className="contact-details">
              <div>
                <span>Email</span>
                <p>agniversetech@gmail.com </p>
              </div>

              <div>
                <span>Location</span>
                <p>India</p>
              </div>

              <div>
                <span>We typically respond within</span>
                <p>1–2 business days</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Briefly describe your requirement"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>

            <p className="form-note">
              Messages are sent securely.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;