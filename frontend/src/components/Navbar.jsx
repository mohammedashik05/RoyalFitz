import React, { useState, useRef, useEffect,useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes, FaHeart, FaRegHeart,FaCrown } from "react-icons/fa";
import "../styles/Navbar.css";
import { ProductContext } from "../components/ProductProvider.jsx";

const Navbar = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const [admin, setAdmin] = useState(false);
    const { verifyAdmin } = useContext(ProductContext);
  
    useEffect(() => {
      const checkAdmin = async () => {
        try {
          const result = await verifyAdmin(); // ✅ Await async call
          setAdmin(result.isAdmin);           // backend returns { isAdmin: true/false }
        } catch (err) {
          console.error("Error verifying admin:", err);
          setAdmin(false);
        } 
      };
  
      checkAdmin();
    }, [verifyAdmin]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="navbar__logo">
          {/* <Link to="/">Kings<span className="highlight">Man<FaCrown className="crown-logo" size={22} color="#000000ff" />

  </span></Link> */}
         <Link to={"/home"}>Royal<span  className="highlight" >Fitz</span> </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul
          className={`navbar__links ${isOpen ? "active" : ""}`}
          ref={menuRef}
        >
          <li><Link to="/home" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
         { (admin)? <li><Link to="/adminDashBoard" onClick={() => setIsOpen(false)}>Order's</Link></li>
          : <li><Link to="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
         }

          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="navbar__icons">
          <button className="navbar_logout" onClick={handleLogout}>LogOut</button>

          <button
            className="navbar__toggle"
            onClick={toggleMenu}
            ref={toggleRef}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="menu_close_icon" size={15} /> : <FaBars className="menu_open_icon" size={15} />}
          </button>

          {/* Cart Icon */}
          <Link to="/cart" className="cart-icon-wrapper">
            <FaShoppingCart className="cart_icon" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>

          {/* Wishlist Icon */}
          <Link to="/wishListPage" className="wishlist-link">
            {wishlistCount > 0 ? (
              <FaHeart className="wishlist_icon filled" />
            ) : (
              <FaRegHeart className="wishlist_icon" />
            )}
            {wishlistCount > 0 && <span className="wishlist-count">{wishlistCount}</span>}
          </Link>

        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
