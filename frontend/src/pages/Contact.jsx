import React, { useState } from "react";
import Footer from "../components/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "../styles/Contact.css";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // You can integrate Formspree, EmailJS, or your own API here.
        setStatus("Message sent! We will be in touch soon.");
        setForm({ name: "", email: "", message: "" });
    }

    return (
        <>
        <div  className="contact-main-container">

            <div className="contact-container">
                <h2>Contact Us</h2>
                 <div className="contact-info">

                    <p><a href="mailto:example@gmail.com"><MdEmail /></a> info@example.com  </p>  {/* Gmail/Email icon */}
                    <p><a href="tel:+1234567890"><FaPhoneAlt /></a> +91 9994533276 </p>
                    
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
                    <button type="submit">Send</button>
                </form>
                {status && <div className="contact-status">{status}</div>}
               
            </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
