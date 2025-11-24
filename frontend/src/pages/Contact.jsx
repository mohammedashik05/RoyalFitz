import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";
import Lottie from "lottie-react";
import message_sent from "../animation/Message_sent.json";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Integrate Formspree, EmailJS, or your own API here.
    setStatus(true);
    setForm({ name: "", email: "", message: "" });

    // Hide the animation after 3 seconds
    setTimeout(() => setStatus(false), 3000);
  }

  return (
    <>
      <div className={`contact-main-container ${status ? "blur-background" : ""}`}>
        <div className="contact-container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              <a href="mailto:royalfitz@gmail.com">
                <MdEmail />
              </a>{" "}
              royalfitz@gmail.com
            </p>
            <p>
              <a href="tel:+1234567890">
                <FaPhoneAlt />
              </a>{" "}
              +91 9994533276
            </p>
          </div>
          <p>Have a question or suggestion? Send us a message!</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
            />
            <label>Email:</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Message:</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <button type="submit" >Send  </button>
          </form>
        </div>

        {/* Success Animation Overlay */}
        {status && (
          <div className="message-animation-overlay">
            <div className="message-animation-box">
              <Lottie animationData={message_sent} loop={false} />          
            </div>
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Contact;
