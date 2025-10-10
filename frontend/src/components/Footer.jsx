import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
    {/* <div className="footer-hr">
        <hr />
    </div> */}
    <footer className="footer">
      {/* Top Section */}
      <div className="footer__container">
        
        {/* Brand Info */}
        <div className="footer__section">
          <h2 className="footer__logo">
            Royal<span className="highlight">Fitz</span>
          </h2>
          <p>
            Your go-to store for premium men’s fashion. Stylish, comfortable, and made to last.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="footer__section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/returns">Returns</Link></li>
            <li><Link to="/shipping">Shipping Info</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer__section">
          <h3>Follow Us</h3>
          <div className="footer__socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} MensWear. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
};

export default Footer;
