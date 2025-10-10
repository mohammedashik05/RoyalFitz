import React from "react";
import "../styles/About.css";
import Footer from "../components/Footer.jsx"
import TestimonialSlider from "../components/TestimonialSlider.jsx"
import Ecommerce from "../animation/Ecommerce.json"
import Lottie from "lottie-react";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-images">
            <Lottie className="about-image" animationData={Ecommerce}>  </Lottie>
          </div>
          <div className="about-text">
            <h2>About <span>Royal</span>Fitz</h2>
            <p>
              Welcome to <strong>RoyalFitz</strong> – your one-stop destination
              for premium quality men’s clothing. We believe fashion should be
              effortless, comfortable, and stylish.
            </p>
            <p>
              Founded with a passion for style and quality, we ensure every
              product meets the highest standards.
            </p>
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
