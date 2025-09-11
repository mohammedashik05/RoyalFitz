import React from "react";
import "../styles/About.css";
import Footer from "../components/Footer.jsx"
import TestimonialSlider from "../components/TestimonialSlider.jsx"

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About <span>MensWear</span></h2>
            <p>
              Welcome to <strong>MensWear</strong> – your one-stop destination
              for premium quality men’s clothing. We believe fashion should be
              effortless, comfortable, and stylish.
            </p>
            <p>
              Founded with a passion for style and quality, we ensure every
              product meets the highest standards.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
              alt="About MensWear"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />
      <Footer/>
    </>
  );
};

export default About;
