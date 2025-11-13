import React, { useState, useRef, useEffect, useContext, useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaRegHeart,
  FaBell,
} from "react-icons/fa";
import "../styles/Navbar.css";
import { ProductContext } from "../components/ProductProvider.jsx";

const DEFAULT_AVATAR =
  "https://cdn-icons-png.flaticon.com/512/847/847969.png";

const Navbar = () => {
  const {
    cartCount,
    wishlist,
    verifyAdmin,
    notificationCount,
    user,
    token,
    logout,          // ← use this from provider
  } = useContext(ProductContext);

  const wishlistCount = wishlist?.length || 0;

  const [isOpen, setIsOpen] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [logoutPopup, setLogoutPopup] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState(DEFAULT_AVATAR);

  const dropdownRef = useRef(null);
  const avatarRef = useRef(null);
  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen((v) => !v);
  const toggleDropdown = () => setDropdownOpen((v) => !v);

  /* ---------------------------------------------------------
     Update avatar instantly whenever user changes
  ---------------------------------------------------------- */
  useEffect(() => {
    if (user?.avatar) setAvatarSrc(user.avatar);
    else setAvatarSrc(DEFAULT_AVATAR);
  }, [user]);

  /* ---------------------------------------------------------
     Update admin role instantly when user updates
  ---------------------------------------------------------- */
  useEffect(() => {
    if (typeof user?.isAdmin !== "undefined") {
      setAdmin(Boolean(user.isAdmin));
      return;
    }

    if (!token) {
      setAdmin(false);
      return;
    }

    let cancel = false;

    const checkRole = async () => {
      try {
        const res = await verifyAdmin();
        if (!cancel) setAdmin(Boolean(res.isAdmin));
      } catch {
        if (!cancel) setAdmin(false);
      }
    };

    checkRole();
    return () => (cancel = true);
  }, [user, token]);

  /* ---------------------------------------------------------
     Close dropdown when clicking outside
  ---------------------------------------------------------- */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !avatarRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  /* ---------------------------------------------------------
     Close menus when navigating
  ---------------------------------------------------------- */
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
    setLogoutPopup(false);
  }, [location.pathname]);

  /* ---------------------------------------------------------
     Avatar fallback
  ---------------------------------------------------------- */
  const onAvatarError = useCallback(() => {
    if (avatarSrc !== DEFAULT_AVATAR) setAvatarSrc(DEFAULT_AVATAR);
  }, [avatarSrc]);

  /* ---------------------------------------------------------
     Logout Confirm
  ---------------------------------------------------------- */
  const handleLogoutConfirm = () => {
    logout(); // ← from provider
    navigate("/");
  };

  /* ---------------------------------------------------------
     Helper to navigate from dropdown
  ---------------------------------------------------------- */
  const goTo = (path) => {
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <>
      <nav className="navbar">
        {/* LOGO */}
        <div className="navbar__logo">
          <Link to="/home">
            Royal<span className="highlight">Fitz</span>
          </Link>
        </div>

        {/* NAV LINKS */}
        <ul className={`navbar__links ${isOpen ? "active" : ""}`} ref={menuRef}>
          <li>
            <Link to="/home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>

          {admin && (
            <li>
              <Link to="/adminDashBoard" onClick={() => setIsOpen(false)}>
                Orders
              </Link>
            </li>
          )}

          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT AREA */}
        <div className="navbar__icons">
          {/* Mobile Toggles */}
          <button
            className="navbar__toggle"
            onClick={toggleMenu}
            ref={toggleRef}
          >
            {isOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>

          {/* CART */}
          {!admin && (
            <Link to="/cart" className="cart-icon-wrapper">
              <FaShoppingCart className="cart_icon" />
              {cartCount > 0 && (
                <span className="cart-count">{cartCount}</span>
              )}
            </Link>
          )}

          {/* WISHLIST */}
          {!admin && (
            <Link to="/wishListPage" className="wishlist-link">
              <FaRegHeart className="wishlist_icon" />
              {wishlistCount > 0 && (
                <span className="wishlist-count">{wishlistCount}</span>
              )}
            </Link>
          )}

          {/* ADMIN NOTIFICATIONS */}
          {admin && (
            <Link to="/notificationPage" className="notification-link">
              <FaBell className="notification_icon" />
              {notificationCount > 0 && (
                <span className="cart-count">{notificationCount}</span>
              )}
            </Link>
          )}

          {/* AVATAR */}
          <div className="avatar-wrapper">
            <img
              ref={avatarRef}
              src={avatarSrc}
              alt="User Avatar"
              className="nav-avatar"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onError={onAvatarError}
            />
          </div>

          {/* DROPDOWN */}
          {dropdownOpen && (
            <div className="avatar-dropdown" ref={dropdownRef}>
              <button onClick={() => goTo("/profile")}>My Profile</button>
              {!admin && (
                <button onClick={() => goTo("/orders")}>My Orders</button>
              )}
              <button onClick={() => setLogoutPopup(true)}>Logout</button>
            </div>
          )}
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* LOGOUT POPUP */}
      {logoutPopup && (
        <div className="logout-popup-overlay">
          <div className="logout-popup">
            <h3>Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="logout-popup-buttons">
              <button className="confirm-btn" onClick={handleLogoutConfirm}>
                Logout
              </button>
              <button className="cancel-btn" onClick={() => setLogoutPopup(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
