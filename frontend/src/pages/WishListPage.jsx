import React, { useContext } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import "../styles/WishlistPage.css";
import Footer from "../components/Footer.jsx";

function WishlistPage() {
  const { wishlist, addToCart, toggleWishlist } = useContext(ProductContext);

  if (wishlist.length === 0) {
    return <h2 style={{ textAlign: "center", marginTop: "40px" }}>No items in wishlist</h2>;
  }

  return (
    <>
    <div className="wishlist-page">
      <h2>My Wishlist</h2>
      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="wishlist-content">
              <h3>{item.name}</h3>
              <p className="wishlist-price">₹ {item.price}</p>
              <div className="wishlist-buttons">
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(item)}
                  >
                  Add to Cart
                </button>
                <button
                  className="remove-btn"
                  onClick={() => toggleWishlist(item)}
                  >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
        </>
  );
}

export default WishlistPage;
